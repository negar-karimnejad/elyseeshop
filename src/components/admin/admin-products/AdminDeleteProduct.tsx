import { useState } from 'react';
import useDeleteProduct from '../../../features/products/useDeleteProduct';
import Button from '../../Button';
import { toast } from 'react-toastify';
import { AiOutlineLoading } from 'react-icons/ai';

interface AdminDeleteProductProps {
  id: number;
}

function AdminDeleteProduct({ id }: AdminDeleteProductProps) {
  const [deletedProduct, setDeletedProduct] = useState<number>(0);
  const { isDeleting, removeProduct } = useDeleteProduct();

  const deleteHandler = () => {
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
    <Button
      onClick={deleteHandler}
      type="button"
      className="rounded-md bg-red-600 hover:bg-red-700 max-sm:px-4"
    >
      {deletedProduct === id && isDeleting ? (
        <AiOutlineLoading size={22} className="animate-spin" />
      ) : (
        'حذف'
      )}
    </Button>
  );
}

export default AdminDeleteProduct;
