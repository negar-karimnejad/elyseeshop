import { ReactNode, useState } from 'react';
import Button from '../../components/Button';
import Input from '../../components/Input';
import Create from '../../components/admin/Create';

interface StyledDivProps {
  children?: ReactNode;
  style: string;
  content?: string;
}

const StyledDiv = ({ children, style, content }: StyledDivProps) => {
  return (
    <div className={`border-r p-1 text-center font-vazirBold ${style}`}>
      {content}
      {children}
    </div>
  );
};
function AdminArticals() {
  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');
  const [content, setContent] = useState('');

  return (
    <div className="bg-stone-100 max-md:col-span-12 md:col-span-9 lg:col-span-10">
      <Create heading="افزودن مقاله جدید">
        <form className="flex flex-col gap-5">
          <label htmlFor="title" className="flex flex-1 flex-col">
            نام مقاله
            <Input
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              type="text"
              className="p-2"
            />
          </label>
          <label htmlFor="content" className="flex flex-1 flex-col">
            متن مقاله
            <textarea
              id="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              required
              rows={5}
              className="p-2 text-lg outline-none disabled:opacity-50"
            ></textarea>
          </label>
          <label htmlFor="image" className="flex w-fit flex-col">
            پوستر مقاله
            <Input
            id='image'
              value={image}
              onChange={(e) => setImage(e.target.value)}
              type="file"
              className="cursor-pointer border-0 p-2"
            />
          </label>
          <Button
            onClick={() => {}}
            type="submit"
            className="float-right w-36 rounded-md bg-sky-600 hover:bg-sky-700 dark:bg-stone-900 dark:hover:bg-stone-800"
          >
            افزودن
          </Button>
        </form>
      </Create>

      <div className="mx-10 border p-5 shadow-md ">
        <h2 className="mb-10 font-vazirBold text-xl text-stone-700">
          لیست مقالات
        </h2>

        {/* Artical list heading */}
        <div className="grid grid-cols-12 bg-stone-400 text-stone-100 dark:bg-stone-700">
          <StyledDiv
            style="max-sm:col-span-2 col-span-1 border"
            content="شناسه"
          />
          <StyledDiv
            style="col-span-3 border max-sm:col-span-4"
            content="نام مقاله"
          />
          <StyledDiv
            style="col-span-4 border max-sm:hidden"
            content="متن مقاله"
          />
          <StyledDiv
            style="col-span-2 max-sm:col-span-3 border"
            content="ویرایش"
          />
          <StyledDiv
            style="col-span-2 max-sm:col-span-3 border"
            content="حذف"
          />
        </div>

        {/* Artical list */}
        <div className="grid grid-cols-12 items-center border-b bg-white">
          <StyledDiv style="col-span-1 max-sm:col-span-2" content="1" />
          <StyledDiv style="col-span-3 max-sm:col-span-4" content="نام مقاله" />
          <StyledDiv style="col-span-4 max-sm:hidden" content="متن مقاله" />
          <StyledDiv style="col-span-2 p-3 max-sm:col-span-3">
            <Button
              onClick={() => {}}
              type="button"
              className="rounded-md bg-sky-600 hover:bg-sky-700 max-sm:px-4"
            >
              ویرایش
            </Button>
          </StyledDiv>
          <StyledDiv style="col-span-2 p-3 max-sm:col-span-3">
            <Button
              onClick={() => {}}
              type="button"
              className="rounded-md bg-red-600 hover:bg-red-700 max-sm:px-4"
            >
              حذف
            </Button>
          </StyledDiv>
        </div>
      </div>
    </div>
  );
}

export default AdminArticals;
