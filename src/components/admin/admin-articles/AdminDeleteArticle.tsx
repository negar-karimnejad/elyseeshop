import { useState } from 'react';
import { AiOutlineLoading } from 'react-icons/ai';
import { toast } from 'react-toastify';
import useDeleteArticle from '../../../features/articles/useDeleteArticle';
import Button from '../../Button';

interface AdminDeleteArticleProps {
  id: number;
}

function AdminDeleteArticle({ id }: AdminDeleteArticleProps) {
  const [deletedArticle, setDeletedArticle] = useState<number>(0);
  const { removeArticle, isDeleting } = useDeleteArticle();

  const deleteHandler = () => {
    setDeletedArticle(id);

    toast(
      () => (
        <div
          className="flex items-center justify-between"
          style={{ direction: 'rtl' }}
        >
          <span>حذف مقاله:</span>
          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                removeArticle(id);
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
      className="rounded-md bg-red-600 hover:bg-red-700 max-sm:px-2"
    >
      {deletedArticle === id && isDeleting ? (
        <AiOutlineLoading size={22} className="animate-spin" />
      ) : (
        'حذف'
      )}
    </Button>
  );
}

export default AdminDeleteArticle;
