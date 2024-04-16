import { FormEvent, useEffect, useRef, useState } from 'react';
import Dropzone from 'react-dropzone';
import { AiOutlineLoading } from 'react-icons/ai';
import useArticles from '../../../features/articles/useArticles';
import useUpdateArticle from '../../../features/articles/useUpdateArticle';
import { ArticleProps } from '../../../types/ArticleProps';
import Button from '../../Button';
import { FiUploadCloud } from 'react-icons/fi';

interface AdminUpdateAticleProps {
  id: number;
}

function AdminUpdateAticle({ id }: AdminUpdateAticleProps) {
  const [isOpenEditModal, setIsOpenEditModal] = useState(false);
  const [article, setArticle] = useState<ArticleProps | null>(null);
  const [file, setFile] = useState<File[] | null>(null);

  const formRef = useRef<HTMLFormElement>(null);

  const { editArticle, isUpdating } = useUpdateArticle();
  const { articles } = useArticles();

  useEffect(() => {
    const selectedArticle = articles?.find((articles) => articles.id === id);
    if (selectedArticle) {
      setArticle(selectedArticle);
    } else {
      setArticle(null);
    }
  }, [articles, id]);

  const updateHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const updatedArticle = {
      id: parseInt(formData.get('id') as string),
      title: formData.get('title') as string,
      content: formData.get('content') as string,
      image: file ? file[0] : null,
    };

    try {
      editArticle(updatedArticle);
      if (formRef.current) {
        setIsOpenEditModal(false);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Button
        onClick={() => setIsOpenEditModal(true)}
        type="button"
        className="rounded-md bg-sky-600 hover:bg-sky-700 max-lg:px-4 max-sm:px-1"
      >
        {article?.title && isUpdating ? (
          <AiOutlineLoading size={22} className="animate-spin" />
        ) : (
          'ویرایش'
        )}
      </Button>

      {/* Edit Modal */}
      <div
        className={`fixed left-0 top-0 flex h-screen w-full items-center justify-center bg-black/50 transition-all duration-1000 ${isOpenEditModal ? 'visible z-50 opacity-100' : 'invisible  opacity-0'}`}
      >
        <div
          className={`relative w-[600px] rounded-md bg-white p-5 text-center shadow-md transition-all duration-1000 max-sm:w-96 sm:p-8 ${isOpenEditModal ? 'translate-y-0' : '-translate-y-[370px]'}`}
        >
          <div
            className="absolute top-3 cursor-pointer font-vazirBold text-2xl transition-all hover:text-pink-500"
            onClick={() => setIsOpenEditModal(false)}
          >
            &times;
          </div>
          <h2 className="mb-5 font-vazirBold text-xl text-sky-600">
            ویرایش مقاله
          </h2>
          <form
            ref={formRef}
            onSubmit={updateHandler}
            className="flex flex-col gap-4 max-sm:gap-1 "
          >
            <input
              disabled={isUpdating}
              name="id"
              type="number"
              defaultValue={article?.id}
              readOnly
              className="hidden"
            />
            <label htmlFor="title" className='"w-full flex items-center gap-1'>
              <span className="w-20 shrink-0 text-right text-sm text-stone-400">
                نام مقاله:
              </span>
              <input
                disabled={isUpdating}
                id="title"
                defaultValue={article?.title}
                type="text"
                name="title"
                className="w-full border p-2 text-sm outline-none disabled:opacity-50 dark:border-0 dark:bg-stone-500  dark:text-stone-100 dark:placeholder:text-stone-300"
              />
            </label>
            <label
              htmlFor="content"
              className='"w-full flex items-center gap-1'
            >
              <span className="w-20 shrink-0 text-right text-sm text-stone-400">
                متن مقاله:
              </span>
              <input
                disabled={isUpdating}
                id="content"
                defaultValue={article?.content}
                type="text"
                name="content"
                className="w-full border p-2 text-sm outline-none disabled:opacity-50 dark:border-0 dark:bg-stone-500  dark:text-stone-100 dark:placeholder:text-stone-300"
              />
            </label>

            <Dropzone onDrop={(acceptedFiles) => setFile(acceptedFiles)}>
              {({ getRootProps, getInputProps }) => (
                <section>
                  <div {...getRootProps()}>
                    <input disabled={isUpdating} {...getInputProps()} />
                    <p className="flex w-full items-center gap-1">
                      <span className="w-20 shrink-0 text-right text-sm text-stone-400">
                        پوستر مقاله:
                      </span>
                      <FiUploadCloud
                        className="w-full border p-2 text-sm outline-none disabled:opacity-50 dark:border-0 dark:bg-stone-500  dark:text-stone-100 dark:placeholder:text-stone-300"
                        size={35}
                      />
                    </p>
                  </div>
                </section>
              )}
            </Dropzone>
            <Button
              disabled={isUpdating}
              type="submit"
              className="mt-5 w-full rounded-md bg-sky-600 font-vazirBold text-lg hover:bg-sky-700 max-sm:px-4"
            >
              ویرایش
            </Button>
          </form>
        </div>
      </div>
    </>
  );
}

export default AdminUpdateAticle;
