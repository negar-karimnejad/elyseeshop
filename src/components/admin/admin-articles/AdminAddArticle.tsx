import { FormEvent, useRef } from 'react';
import { FiUploadCloud } from 'react-icons/fi';
import useAddArticle from '../../../features/articles/useAddArticle';
import useArticles from '../../../features/articles/useArticles';
import Button from '../../Button';
import Input from '../../Input';
import Create from '../Create';

import { FilePond, registerPlugin } from "react-filepond";

import "filepond/dist/filepond.min.css";

import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import FilePondPluginFileValidateType from "filepond-plugin-file-validate-type";

import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";
import { FILE_POND_BUCKET } from "@/lib/constant";

registerPlugin(
	FilePondPluginImageExifOrientation,
	FilePondPluginImagePreview,
	FilePondPluginFileValidateType
);
function AdminAddArticle() {
  const { createArticle, isAdding } = useAddArticle();
  const formRef = useRef<HTMLFormElement>(null);
  const { articles } = useArticles();

  const createHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const newArticle = {
      id: parseInt(formData.get('id') as string),
      title: formData.get('title') as string,
      content: formData.get('content') as string,
      image: formData.get('image') as File,
    };

    try {
      createArticle(newArticle);
      if (formRef.current) {
        formRef.current?.reset();
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Create heading="افزودن مقاله جدید">
      <form
        ref={formRef}
        onSubmit={createHandler}
        className="flex flex-col gap-5"
      >
        <div className="flex flex-col gap-2">
          <input
            name="id"
            type="number"
            defaultValue={articles && articles?.length + 1}
            readOnly
            className="hidden px-1 py-2"
          />
          <label htmlFor="title" className="flex w-full flex-col gap-1">
            نام مقاله
            <Input
              disabled={isAdding}
              name="title"
              id="title"
              type="text"
              className="px-1 py-2"
            />
          </label>
          <label htmlFor="content" className="flex w-full flex-col gap-1">
            متن مقاله
            <textarea
              disabled={isAdding}
              name="content"
              id="content"
              cols={30}
              rows={5}
              required
              className="border bg-white px-1 py-2 text-lg outline-none disabled:opacity-50 dark:border-0 dark:bg-stone-500"
            ></textarea>
          </label>
        </div>
        {/* <label htmlFor="image" className="relative flex w-fit flex-col">
          پوستر مقاله
          <input
            name="image"
            type="file"
            id="image"
            accept="image/*"
            className="absolute left-0 right-0 top-10 m-auto cursor-pointer border-0 text-[2px] opacity-0"
          />
          <FiUploadCloud
            className="mx-auto mt-3 h-16 w-24 cursor-pointer rounded-md border p-2 text-stone-400"
            size={24}
          />
        </label> */}
        <FilePond
          acceptedFileTypes={['image/*']}
          allowMultiple={true}
          server={{
            process: async (
              fieldName,
              file,
              metadata,
              load,
              error,
              progress,
              abort,
            ) => {
              const formData = new FormData();
              formData.append(fieldName, file, file.name);
              const request = new XMLHttpRequest();
              request.open(
                'POST',
                `${process.env.REACT_PUBLIC_SUPABASE_URL}/storage/v1/object/${FILE_POND_BUCKET}/${file.name}`,
              );
              request.setRequestHeader(
                'Authorization',
                // make sure to change and enforce your policy
                'Bearer ' + process.env.REACT_PUBLIC_SUPABASE_ANON_KEY,
              );
              request.upload.onprogress = (e) => {
                progress(e.lengthComputable, e.loaded, e.total);
              };
              request.onload = function () {
                if (request.status >= 200 && request.status < 300) {
                  load(request.responseText);
                } else {
                  error('oh no');
                }
              };

              request.send(formData);

              return {
                abort: () => {
                  request.abort();
                  abort();
                },
              };
            },
            remove: async (fileId, load) => {
              // implementation here
            },
            revert: (source, load, error) => {
              // implementation here
            },
            load: async (source, load, error) => {
              // implementation here
            },
          }}
          name="files"
          labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
        />{' '}
        <Button
          disabled={isAdding}
          type="submit"
          className="mx-auto mt-10 w-full rounded-md bg-sky-600 py-3 font-vazirBold text-lg hover:bg-sky-700"
        >
          افزودن
        </Button>
      </form>
    </Create>
  );
}

export default AdminAddArticle;
