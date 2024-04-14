import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import { deleteProduct } from '../../services/apiProducts';

function useDeleteProduct() {
  const queryClient = useQueryClient();
  const { mutate: removeProduct, isPending:isDeleting } = useMutation({
    mutationFn: (id: number) => deleteProduct(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['products'] });
      toast.success('محصول حذف شد');
      queryClient.refetchQueries({ queryKey: ['products'] });
    },
    onError: (error) => toast.error(error.message),
  });

  return { removeProduct, isDeleting };
}

export default useDeleteProduct;
