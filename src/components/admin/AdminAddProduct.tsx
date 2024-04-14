import { FormEvent, useRef } from 'react';
import { FiUploadCloud } from 'react-icons/fi';
import Create from '../../components/admin/Create';
import useCreateProduct from '../../features/products/useCreateProduct';
import useProducts from '../../features/products/useProducts';
import Button from '../Button';
import Input from '../Input';

function AdminAddProduct() {
  const { addProduct, isPending } = useCreateProduct();
  const formRef = useRef<HTMLFormElement>(null);
  const { products } = useProducts();

  const createHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const newProduct = {
      id: parseInt(formData.get('id') as string),
      name: formData.get('name') as string,
      brand: formData.get('brand') as string,
      brandImage: formData.get('brandImage') as string,
      brandDescription: formData.get('brandDescription') as string,
      image: formData.get('image') as string,
      features: [] as string[],
      tag: [] as string[],
      mass: parseInt(formData.get('mass') as string),
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
        <div className="flex gap-2">
          <input
            name="id"
            type="number"
            defaultValue={products && products?.length + 1}
            readOnly
            className="hidden px-1 py-2"
          />
          <label htmlFor="" className="flex w-full flex-col gap-1">
            نام محصول
            <Input
              disabled={isPending}
              name="name"
              type="text"
              className="px-1 py-2"
            />
          </label>
          <label htmlFor="" className="flex w-full flex-col gap-1">
            نام برند
            <Input
              disabled={isPending}
              name="brand"
              type="text"
              className="px-1 py-2"
            />
          </label>
        </div>
        <div className="flex gap-2">
          <label htmlFor="" className="flex w-full flex-col gap-1">
            قیمت محصول
            <Input
              disabled={isPending}
              name="price"
              type="number"
              className="px-1 py-2"
            />
          </label>
          <label htmlFor="" className="flex w-full flex-col gap-1">
            حجم محصول
            <Input
              disabled={isPending}
              name="mass"
              type="number"
              className="px-1 py-2"
            />
          </label>
        </div>
        <div className="flex gap-2">
          <label htmlFor="" className="flex w-full flex-col gap-1">
            کد محصول
            <Input
              disabled={isPending}
              name="code"
              type="text"
              className="px-1 py-2"
            />
          </label>
          <label htmlFor="" className="flex w-full flex-col gap-1">
            توضیحات محصول
            <Input
              disabled={isPending}
              name="description"
              type="text"
              className="px-1 py-2"
            />
          </label>
        </div>

        <label htmlFor="" className="flex w-full flex-col gap-1">
          متن محصول
          <textarea
            name="content"
            disabled={isPending}
            required
            rows={5}
            className="px-1 py-2 text-lg outline-none disabled:opacity-50"
          ></textarea>
        </label>
        <div className="flex flex-col justify-around gap-2 sm:flex-row">
          <label htmlFor="" className="flex w-full flex-col gap-1">
            دسته بندی محصول
            <select
              disabled={isPending}
              name="category"
              required
              className="px-1 py-2 outline-0"
            >
              <option value="">دسته بندی مورد نظر را انتخاب کنید</option>
              <option value="عطر و ادکلن">عطر و ادکلن</option>
              <option value="لوازم آرایشی">لوازم آرایشی</option>
              <option value="محصولات بدن">محصولات بدن</option>
              <option value="مراقبت از مو">مراقبت از مو</option>
              <option value="مراقبت از پوست">مراقبت از پوست</option>
            </select>
          </label>
          <div className="flex justify-between gap-x-10 px-10">
            <label htmlFor="" className="relative flex w-fit flex-col">
              عکس محصول
              <Input
                name="productImage"
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
                name="brandImage"
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
          disabled={isPending}
          type="submit"
          className="mt-10 w-36 rounded-md bg-sky-600 hover:bg-sky-700 dark:bg-stone-900 dark:hover:bg-stone-800"
        >
          افزودن
        </Button>
      </form>
    </Create>
  );
}

export default AdminAddProduct;
