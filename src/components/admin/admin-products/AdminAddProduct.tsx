import { FormEvent, useRef } from 'react';
import { AiOutlineLoading } from 'react-icons/ai';
import { FiUploadCloud } from 'react-icons/fi';
import useCreateProduct from '../../../features/products/useCreateProduct';
import Button from '../../Button';
import Input from '../../Input';
import Create from '../Create';

function AdminAddProduct() {
  const { addProduct, isPending } = useCreateProduct();
  const formRef = useRef<HTMLFormElement>(null);

  const createHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const newProduct = {
      id: parseInt(formData.get('id') as string),
      name: formData.get('name') as string,
      brand: formData.get('brand') as string,
      brandImage: formData.get('brandImage') as File,
      brandDescription: formData.get('brandDescription') as string,
      image: formData.get('productImage') as File,
      features: [] as string[],
      tag: [] as string[],
      mass: formData.get('mass') as string,
      price: parseFloat(formData.get('price') as string),
      category: formData.get('category') as string,
      code: formData.get('code') as string,
      description: formData.get('description') as string,
    };

    try {
      addProduct(newProduct);
      if (formRef.current) {
        formRef.current?.reset();
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Create heading="افزودن محصول جدید">
      <form
        ref={formRef}
        onSubmit={createHandler}
        className="flex flex-col gap-5"
      >
        <div className="flex gap-2 max-sm:flex-col">
          <input
            name="id"
            type="number"
            defaultValue={Math.floor(Math.random() * 1000)}
            readOnly
            className="hidden px-1 py-2"
          />
          <label htmlFor="name" className="flex w-full flex-col gap-1">
            نام محصول
            <Input
              disabled={isPending}
              name="name"
              id="name"
              type="text"
              className="px-1 py-2"
            />
          </label>
          <label htmlFor="brand" className="flex w-full flex-col gap-1">
            نام برند
            <Input
              disabled={isPending}
              name="brand"
              id="brand"
              type="text"
              className="px-1 py-2"
            />
          </label>
        </div>
        <div className="flex gap-2 max-sm:flex-col">
          <label htmlFor="price" className="flex w-full flex-col gap-1">
            قیمت محصول
            <Input
              disabled={isPending}
              name="price"
              id="price"
              type="number"
              className="px-1 py-2"
            />
          </label>
          <label htmlFor="mass" className="flex w-full flex-col gap-1">
            حجم محصول
            <Input
              disabled={isPending}
              name="mass"
              id="mass"
              type="number"
              className="px-1 py-2"
            />
          </label>
        </div>
        <div className="flex gap-2 max-sm:flex-col">
          <label htmlFor="code" className="flex w-full flex-col gap-1">
            کد محصول
            <Input
              disabled={isPending}
              name="code"
              id="code"
              type="text"
              className="px-1 py-2"
            />
          </label>
          <label
            htmlFor="brandDescription"
            className="flex w-full flex-col gap-1"
          >
            توضیحات برند
            <textarea
              name="brandDescription"
              disabled={isPending}
              id="brandDescription"
              required
              rows={1}
              className="border bg-white px-1 py-2 text-lg outline-none disabled:opacity-50 dark:border-0 dark:bg-stone-500"
            ></textarea>
          </label>
        </div>
        <label htmlFor="description" className="flex w-full flex-col gap-1">
          توضیحات محصول
          <textarea
            name="description"
            disabled={isPending}
            id="description"
            rows={5}
            required
            className="border bg-white px-1 py-2 text-lg outline-none disabled:opacity-50 dark:border-0 dark:bg-stone-500"
          ></textarea>
        </label>

        <div className="flex flex-col justify-around gap-2 sm:flex-row">
          <label htmlFor="category" className="flex w-full flex-col gap-1">
            دسته بندی محصول
            <select
              disabled={isPending}
              name="category"
              id="category"
              required
              className="bg-white px-1 py-2 outline-0 dark:bg-stone-500"
            >
              <option value="-1">دسته بندی مورد نظر را انتخاب کنید</option>
              <option value="عطر و ادکلن">عطر و ادکلن</option>
              <option value="لوازم آرایشی">لوازم آرایشی</option>
              <option value="محصولات بدن">محصولات بدن</option>
              <option value="مراقبت از مو">مراقبت از مو</option>
              <option value="مراقبت از پوست">مراقبت از پوست</option>
            </select>
          </label>
          <div className="flex justify-between gap-x-10 max-sm:mt-5 sm:px-10">
            <label
              htmlFor="productImage"
              className="relative flex w-fit flex-col"
            >
              عکس محصول
              <Input
                disabled={isPending}
                name="productImage"
                type="file"
                id="productImage"
                className="absolute left-0 right-0 top-10 m-auto cursor-pointer border-0 text-[2px] opacity-0"
              />
              <FiUploadCloud
                className="mx-auto mt-3 h-16 w-24 cursor-pointer rounded-md border p-2 text-stone-400"
                size={24}
              />
            </label>
            <label
              htmlFor="brandImage"
              className="relative flex w-fit flex-col"
            >
              عکس برند
              <Input
                disabled={isPending}
                name="brandImage"
                type="file"
                id="brandImage"
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
          disabled={isPending}
          type="submit"
          className="mx-auto mt-10 w-full rounded-md bg-sky-600 py-3 font-vazirBold text-lg hover:bg-sky-700"
        >
          {isPending ? (
            <div className="flex items-center justify-center gap-2">
              <AiOutlineLoading size={22} className="animate-spin" />
              در حال افزودن...
            </div>
          ) : (
            'افزودن'
          )}
        </Button>
      </form>
    </Create>
  );
}

export default AdminAddProduct;
