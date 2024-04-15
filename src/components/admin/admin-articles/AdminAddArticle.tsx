import { FormEvent, useRef } from 'react';
import { FiUploadCloud } from 'react-icons/fi';
import useAddArticle from '../../../features/articles/useAddArticle';
import useArticles from '../../../features/articles/useArticles';
import Button from '../../Button';
import Input from '../../Input';
import Create from '../Create';

function AdminAddArticle() {
  const { createArticle, isAdding } = useAddArticle();
  const formRef = useRef<HTMLFormElement>(null);
  const { articles } = useArticles();

  const createHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const newArticle = {
      id: parseInt(formData.get('id') as string),
      title: formData.get('title') as string,
      content: formData.get('content') as string,
      image: formData.get('image') as string,
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
        <div className="flex gap-2 max-sm:flex-col">
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
            <Input
              disabled={isAdding}
              name="content"
              id="content"
              type="text"
              className="px-1 py-2"
            />
          </label>
        </div>

        <label htmlFor="image" className="relative flex w-fit flex-col">
          پوستر مقاله
          <Input
            name="image"
            type="file"
            id="image"
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
