import { ReactNode, useState } from 'react';
import { FiUploadCloud } from 'react-icons/fi';
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
function AdminProducts() {
  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');
  const [content, setContent] = useState('');

  return (
    <div className="bg-stone-100 max-md:col-span-12 md:col-span-9 lg:col-span-10">
      <Create heading="افزودن محصول جدید">
        <form className="flex flex-col gap-5">
          <div className="flex gap-2">
            <label htmlFor="" className="flex w-full flex-col gap-1">
              نام محصول
              <Input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                type="text"
                className="px-1 py-2"
              />
            </label>
            <label htmlFor="" className="flex w-full flex-col gap-1">
              نام برند
              <Input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                type="text"
                className="px-1 py-2"
              />
            </label>
          </div>
          <div className="flex gap-2">
            <label htmlFor="" className="flex w-full flex-col gap-1">
              قیمت محصول
              <Input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                type="number"
                className="px-1 py-2"
              />
            </label>
            <label htmlFor="" className="flex w-full flex-col gap-1">
              حجم محصول
              <Input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                type="number"
                className="px-1 py-2"
              />
            </label>
          </div>
          <div className="flex gap-2">
            <label htmlFor="" className="flex w-full flex-col gap-1">
              کد محصول
              <Input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                type="number"
                className="px-1 py-2"
              />
            </label>
            <label htmlFor="" className="flex w-full flex-col gap-1">
              توضیحات محصول
              <Input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                type="number"
                className="px-1 py-2"
              />
            </label>
          </div>

          <label htmlFor="" className="flex w-full flex-col gap-1">
            متن محصول
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              required
              rows={5}
              className="px-1 py-2 text-lg outline-none disabled:opacity-50"
            ></textarea>
          </label>
          <div className="flex flex-col justify-around gap-2 sm:flex-row">
            <label htmlFor="" className="flex w-full flex-col gap-1">
              دسته بندی محصول
              <select name="" id="" className="px-1 py-2 outline-0">
                <option value="">دسته بندی مورد نظر را انتخاب کنید</option>
                <option value="">عطر و ادکلن</option>
                <option value="">لوازم آرایشی</option>
                <option value="">محصولات بدن</option>
                <option value="">مراقبت از مو</option>
                <option value="">مراقبت از پوست</option>
              </select>
            </label>
            <div className="flex justify-between gap-x-10 px-10">
              <label htmlFor="" className="relative flex w-fit flex-col">
                عکس محصول
                <Input
                  value={image}
                  onChange={(e) => setImage(e.target.value)}
                  type="file"
                  className="absolute left-0 right-0 top-10 m-auto cursor-pointer border-0 text-[2px] opacity-0"
                />
                <FiUploadCloud
                  className="mx-auto mt-3 h-16 w-24 cursor-pointer rounded-md border p-2 text-stone-400"
                  size={24}
                />
              </label>
              <label htmlFor="" className="relative flex w-fit flex-col">
                عکس برند
                <Input
                  value={image}
                  onChange={(e) => setImage(e.target.value)}
                  type="file"
                  className="absolute left-0 right-0 top-10 m-auto cursor-pointer border-0 text-[2px] opacity-0"
                />
                <FiUploadCloud
                  className="mx-auto mt-3 h-16 w-24 cursor-pointer rounded-md border p-2 text-stone-400"
                  size={24}
                />
              </label>
            </div>
          </div>
          <Button
            onClick={() => {}}
            type="submit"
            className="mt-10 w-36 rounded-md bg-sky-600 hover:bg-sky-700 dark:bg-stone-900 dark:hover:bg-stone-800"
          >
            افزودن
          </Button>
        </form>
      </Create>

      <div className="mx-10 border p-5 shadow-md ">
        <h2 className="mb-10 font-vazirBold text-xl text-stone-700">
          لیست محصولات
        </h2>

        {/* Artical list heading */}
        <div className="grid grid-cols-12 bg-stone-400 text-stone-100 dark:bg-stone-700">
          <StyledDiv
            style="max-sm:col-span-2 col-span-1 border"
            content="شناسه"
          />
          <StyledDiv
            style="col-span-3 border max-sm:col-span-4"
            content="نام محصول"
          />
          <StyledDiv
            style="col-span-2 border max-sm:hidden"
            content="کد محصول"
          />
          <StyledDiv
            style="col-span-2 border max-sm:hidden"
            content="قیمت محصول"
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
          <StyledDiv style="col-span-3 max-sm:col-span-4" content="نام محصول" />
          <StyledDiv style="col-span-2 max-sm:hidden" content="کد محصول" />
          <StyledDiv style="col-span-2 max-sm:hidden" content="قیمت محصول" />
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

export default AdminProducts;
