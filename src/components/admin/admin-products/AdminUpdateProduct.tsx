import { FormEvent, useEffect, useRef, useState } from 'react';
import { AiOutlineLoading } from 'react-icons/ai';
import useProducts from '../../../features/products/useProducts';
import useUpdateProduct from '../../../features/products/useUpdateProduct';
import { UpdateProductProps } from '../../../types/ProductProps';
import Button from '../../Button';

interface AdminUpdateProductProps {
  name: string;
}

function AdminUpdateProduct({ name }: AdminUpdateProductProps) {
  const [isOpenEditModal, setIsOpenEditModal] = useState(false);
  const [product, setProduct] = useState<UpdateProductProps | null>(null);

  const formRef = useRef<HTMLFormElement>(null);

  const { editProduct, isUpdating } = useUpdateProduct();
  const { products } = useProducts();

  useEffect(() => {
    const selectedProduct = products?.find((product) => product.name === name);
    if (selectedProduct) {
      setProduct(selectedProduct);
    } else {
      setProduct(null);
    }
  }, [name, products]);

  const updateHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const updatedProduct = {
      id: parseInt(formData.get('id') as string),
      name: formData.get('name') as string,
      brand: formData.get('brand') as string,
      brandDescription: formData.get('brandDescription') as string,
      mass: formData.get('mass') as string,
      price: parseFloat(formData.get('price') as string),
      category: formData.get('category') as string,
      code: formData.get('code') as string,
      description: formData.get('description') as string,
    };
    try {
      editProduct(updatedProduct);
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
        className="rounded-md bg-sky-600 hover:bg-sky-700 max-sm:px-1 max-lg:px-4"
      >
        {product?.name && isUpdating ? (
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
            ویرایش محصول
          </h2>
          <form
            ref={formRef}
            onSubmit={updateHandler}
            className="flex flex-col gap-4 max-sm:gap-1 "
          >
            <input
              name="id"
              type="number"
              defaultValue={product?.id}
              readOnly
              className="hidden"
            />
            <label htmlFor="name" className='"w-full flex items-center gap-1'>
              <span className="w-20 shrink-0 text-right text-sm text-stone-400">
                نام محصول:
              </span>
              <input
                id="name"
                defaultValue={product?.name}
                type="text"
                name="name"
                className="w-full border p-2 text-sm outline-none disabled:opacity-50 dark:border-0 dark:bg-stone-500  dark:text-stone-100 dark:placeholder:text-stone-300"
              />
            </label>
            <label htmlFor="brand" className='"w-full flex items-center gap-1'>
              <span className="w-20 shrink-0 text-right text-sm text-stone-400">
                نام برند:
              </span>
              <input
                id="brand"
                defaultValue={product?.brand}
                type="text"
                name="brand"
                className="w-full border p-2 text-sm outline-none disabled:opacity-50 dark:border-0 dark:bg-stone-500  dark:text-stone-100 dark:placeholder:text-stone-300"
              />
            </label>
            <label htmlFor="price" className='"w-full flex items-center gap-1'>
              <span className="w-20 shrink-0 text-right text-sm text-stone-400">
                قیمت:
              </span>
              <input
                id="price"
                defaultValue={product?.price}
                type="number"
                name="price"
                className="w-full border p-2 text-sm outline-none disabled:opacity-50 dark:border-0 dark:bg-stone-500  dark:text-stone-100 dark:placeholder:text-stone-300"
              />
            </label>
            <label htmlFor="mass" className='"w-full flex items-center gap-1'>
              <span className="w-20 shrink-0 text-right text-sm text-stone-400">
                حجم:
              </span>
              <input
                id="mass"
                defaultValue={product?.mass}
                type="number"
                name="mass"
                className="w-full border p-2 text-sm outline-none disabled:opacity-50 dark:border-0 dark:bg-stone-500  dark:text-stone-100 dark:placeholder:text-stone-300"
              />
            </label>
            <label htmlFor="code" className='"w-full flex items-center gap-1'>
              <span className="w-20 shrink-0 text-right text-sm text-stone-400">
                کد محصول:
              </span>
              <input
                id="code"
                defaultValue={product?.code}
                type="text"
                name="code"
                className="w-full border p-2 text-sm outline-none disabled:opacity-50 dark:border-0 dark:bg-stone-500  dark:text-stone-100 dark:placeholder:text-stone-300"
              />
            </label>
            <label
              htmlFor="brandDescription"
              className='"w-full flex items-center gap-1'
            >
              <span className="w-20 shrink-0 text-right text-sm text-stone-400">
                متن برند:
              </span>
              <input
                id="brandDescription"
                defaultValue={product?.brandDescription}
                type="text"
                name="brandDescription"
                className="w-full border p-2 text-sm outline-none disabled:opacity-50 dark:border-0 dark:bg-stone-500  dark:text-stone-100 dark:placeholder:text-stone-300"
              />
            </label>
            <label
              htmlFor="description"
              className='"w-full flex items-center gap-1'
            >
              <span className="w-20 shrink-0 text-right text-sm text-stone-400">
                متن محصول:
              </span>
              <input
                id="description"
                defaultValue={product?.description}
                type="text"
                name="description"
                className="w-full border p-2 text-sm outline-none disabled:opacity-50 dark:border-0 dark:bg-stone-500  dark:text-stone-100 dark:placeholder:text-stone-300"
              />
            </label>
            <label
              htmlFor="category"
              className="flex w-full items-center gap-1"
            >
              <span className="w-20 shrink-0 text-right text-sm text-stone-400">
                دسته بندی:
              </span>
              <select
                id="category"
                name="category"
                className="w-full border px-1.5 py-2 text-sm outline-0"
              >
                <option value="-1">دسته بندی مورد نظر را انتخاب کنید</option>
                <option value="عطر و ادکلن">عطر و ادکلن</option>
                <option value="لوازم آرایشی">لوازم آرایشی</option>
                <option value="محصولات بدن">محصولات بدن</option>
                <option value="مراقبت از مو">مراقبت از مو</option>
                <option value="مراقبت از پوست">مراقبت از پوست</option>
              </select>
            </label>
            <Button
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

export default AdminUpdateProduct;
