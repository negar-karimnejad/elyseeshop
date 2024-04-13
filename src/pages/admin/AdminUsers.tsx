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
function AdminUsers() {
  const [title, setTitle] = useState('');

  return (
    <div className="bg-stone-100 max-md:col-span-12 md:col-span-9 lg:col-span-10">
      <Create heading="افزودن کاربر جدید">
        <form className="flex flex-col gap-5">
          <div className="flex gap-2">
            <label htmlFor="" className="flex w-full flex-col gap-1">
              نام ونام خانوادگی
              <Input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                type="text"
                className="px-1 py-2"
              />
            </label>
            <label htmlFor="" className="flex w-full flex-col gap-1">
              نام کاربری
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
              ایمیل
              <Input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                type="number"
                className="px-1 py-2"
              />
            </label>
            <label htmlFor="" className="flex w-full flex-col gap-1">
              رمز عبور
              <Input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                type="number"
                className="px-1 py-2"
              />
            </label>
          </div>
          <label htmlFor="" className="flex w-full flex-col gap-1">
            شماره تلفن
            <Input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              type="number"
              className="w-1/2 px-1 py-2"
            />
          </label>
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
          لیست کاربران
        </h2>

        {/* Artical list heading */}
        <div className="grid grid-cols-12 bg-stone-400 text-stone-100 dark:bg-stone-700">
          <StyledDiv
            style="max-sm:col-span-2 col-span-1 border"
            content="شناسه"
          />
          <StyledDiv
            style="col-span-3 border max-sm:col-span-4"
            content="نام و نام خانوادگی"
          />
          <StyledDiv style="col-span-3 border max-sm:hidden" content="ایمیل" />
          <StyledDiv style="col-span-1 border max-sm:hidden" content="نقش" />
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
          <StyledDiv style="col-span-3 max-sm:col-span-4" content="نام کاربر" />
          <StyledDiv style="col-span-3 max-sm:hidden" content="کد کاربر" />
          <StyledDiv style="col-span-1 max-sm:hidden" content="قیمت کاربر" />
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

export default AdminUsers;
