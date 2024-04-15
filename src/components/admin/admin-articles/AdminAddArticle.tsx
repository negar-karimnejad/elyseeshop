import { FormEvent, useRef } from 'react';
import { FiUploadCloud } from 'react-icons/fi';
import useAddArticle from '../../../features/articles/useAddArticle';
import useArticles from '../../../features/articles/useArticles';
import supabase, { supabaseUrl } from '../../../services/supabase';
import Button from '../../Button';
import Input from '../../Input';
import Create from '../Create';

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

    const { data, error } = await supabase.storage
      .from('article-image')
      .upload(
        `${supabaseUrl}/storage/v1/object/public/article-image/${newArticle.image.name}`,
        newArticle.image,
      );
    if (error) {
      console.log(error);
    }
    console.log(data);

    try {
      createArticle({ ...newArticle, image: data });
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

        <label htmlFor="image" className="relative flex w-fit flex-col">
          پوستر مقاله
          <Input
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
        </label>

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
