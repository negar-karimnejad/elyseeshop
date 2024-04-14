import { FormEvent, ReactNode, useRef, useState } from 'react';
import { AiOutlineLoading } from 'react-icons/ai';
import { toast } from 'react-toastify';
import Button from '../../components/Button';
import Input from '../../components/Input';
import useDeleteProduct from '../../features/products/useDeleteProduct';
import useProduct from '../../features/products/useProduct';
import useProducts from '../../features/products/useProducts';
import useUpdateProduct from '../../features/products/useUpdateProduct';

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
  const [deletedProduct, setDeletedProduct] = useState<number>(0);
  const [editedProduct, setEditedProduct] = useState('');
  const [isOpenEditModal, setIsOpenEditModal] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const { editProduct, isUpdating } = useUpdateProduct();
  const { isDeleting, removeProduct } = useDeleteProduct();
  const { product } = useProduct(editedProduct);
  const { products } = useProducts();

  const productsList = products?.slice().sort((a, b) => b.id - a.id);

  const handleEditClick = (productName: string) => {
    setEditedProduct(productName);
    setIsOpenEditModal(true);
  };

  const updateHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const updatedProduct = {
      id: parseInt(formData.get('id') as string),
      name: formData.get('name') as string,
      brand: formData.get('brand') as string,
      brandDescription: formData.get('brandDescription') as string,
      mass: parseInt(formData.get('mass') as string),
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

  const deleteHandler = (id: number) => {
    setDeletedProduct(id);

    toast(
      () => (
        <div
          className="flex items-center justify-between"
          style={{ direction: 'rtl' }}
        >
          <span>حذف محصول:</span>
          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                removeProduct(id);
                toast.dismiss();
              }}
              className="rounded-md bg-red-500 px-5 py-1 text-white transition-all hover:bg-red-400"
            >
              حذف
            </button>
          </div>
        </div>
      ),
      {
        autoClose: false,
        position: 'top-right',
        theme: 'light',
      },
    );
  };

  return (
    <div className="bg-stone-100 max-md:col-span-12 md:col-span-9 lg:col-span-10">
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
        {productsList?.map((product) => (
          <div
            key={product.id}
            className="grid grid-cols-12 items-center border-b bg-white"
          >
            <StyledDiv
              style="col-span-1 max-sm:col-span-2"
              content={String(product.id)}
            />
            <StyledDiv
              style="col-span-3 text-right max-sm:col-span-4 text-sm"
              content={product.name}
            />
            <StyledDiv
              style="col-span-2 max-sm:hidden"
              content={product.code}
            />
            <StyledDiv
              style="col-span-2 max-sm:hidden"
              content={`${product.price.toLocaleString()} تومان`}
            />
            <StyledDiv style="col-span-2 p-3 max-sm:col-span-3">
              <Button
                onClick={() => handleEditClick(product?.name)}
                type="button"
                className="rounded-md bg-sky-600 hover:bg-sky-700 max-sm:px-4"
              >
                ویرایش
              </Button>
            </StyledDiv>
            <StyledDiv style="col-span-2 p-3 max-sm:col-span-3">
              <Button
                onClick={() => deleteHandler(product.id)}
                type="button"
                className="rounded-md bg-red-600 hover:bg-red-700 max-sm:px-4"
              >
                {deletedProduct === product.id && isDeleting ? (
                  <AiOutlineLoading size={22} className="animate-spin" />
                ) : (
                  'حذف'
                )}
              </Button>
            </StyledDiv>
          </div>
        ))}
      </div>

      {/* Edit Modal */}

      <div
        className={`fixed left-0 top-0 flex h-screen w-full items-center justify-center bg-black/50 transition-all duration-1000 ${isOpenEditModal ? 'visible z-50 opacity-100' : 'invisible  opacity-0'}`}
      >
        <div
          className={`relative w-[600px] rounded-md bg-white p-8 text-center shadow-md transition-all duration-1000 max-sm:w-96 ${isOpenEditModal ? 'translate-y-0' : '-translate-y-[370px]'}`}
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
            className="flex flex-col gap-4"
          >
            <input
              name="id"
              type="number"
              defaultValue={product && product?.id}
              readOnly
              className="hidden"
            />
            <label htmlFor="" className='"w-full flex items-center gap-1'>
              <span className="w-20 shrink-0 text-right text-sm text-stone-400">
                نام محصول:
              </span>

              <Input
                defaultValue={product?.name}
                type="text"
                name="name"
                className="w-full p-2 text-sm"
              />
            </label>
            <label htmlFor="" className='"w-full flex items-center gap-1'>
              <span className="w-20 shrink-0 text-right text-sm text-stone-400">
                نام برند:
              </span>
              <Input
                defaultValue={product?.brandName}
                type="text"
                name="brand"
                className="w-full p-2 text-sm"
              />
            </label>
            <label htmlFor="" className='"w-full flex items-center gap-1'>
              <span className="w-20 shrink-0 text-right text-sm text-stone-400">
                قیمت:
              </span>
              <Input
                defaultValue={product?.price}
                type="number"
                name="price"
                className="w-full p-2 text-sm"
              />
            </label>
            <label htmlFor="" className='"w-full flex items-center gap-1'>
              <span className="w-20 shrink-0 text-right text-sm text-stone-400">
                حجم:
              </span>
              <Input
                defaultValue={product?.mass}
                type="number"
                name="mass"
                className="w-full p-2 text-sm"
              />
            </label>
            <label htmlFor="" className='"w-full flex items-center gap-1'>
              <span className="w-20 shrink-0 text-right text-sm text-stone-400">
                کد محصول:
              </span>
              <Input
                defaultValue={product?.code}
                type="text"
                name="code"
                className="w-full p-2 text-sm"
              />
            </label>
            <label htmlFor="" className='"w-full flex items-center gap-1'>
              <span className="w-20 shrink-0 text-right text-sm text-stone-400">
                متن برند:
              </span>
              <Input
                defaultValue={product?.brandDescription}
                type="text"
                name="brandDescription"
                className="w-full p-2 text-sm"
              />
            </label>
            <label htmlFor="" className='"w-full flex items-center gap-1'>
              <span className="w-20 shrink-0 text-right text-sm text-stone-400">
                متن محصول:
              </span>
              <Input
                defaultValue={product?.description}
                type="text"
                name="description"
                className="w-full p-2 text-sm"
              />
            </label>
            <label htmlFor="" className="flex w-full items-center gap-1">
              <span className="w-20 shrink-0 text-right text-sm text-stone-400">
                دسته بندی:
              </span>
              <select
                name="category"
                className="w-full border px-1.5 py-2 text-sm outline-0"
              >
                <option value="">دسته بندی مورد نظر را انتخاب کنید</option>
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
              {editedProduct === product?.name && isUpdating ? (
                <AiOutlineLoading size={22} className="animate-spin" />
              ) : (
                'ویرایش'
              )}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AdminProducts;
