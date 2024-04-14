import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import { updateProduct } from '../../services/apiProducts';
import { UpdateProductProps } from '../../types/ProductProps';

function useUpdateProduct() {
  const queryClient = useQueryClient();

  const { mutate: editProduct, isPending: isUpdating } = useMutation({
    mutationFn: (updatedProduct: UpdateProductProps) =>
      updateProduct(updatedProduct),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['products'] });
      toast.success('محصول با موفقیت ویرایش شد');
      queryClient.refetchQueries({ queryKey: ['products'] });
    },
    onError: (error) => toast.error(error.message),
  });
  return { editProduct, isUpdating };
}

export default useUpdateProduct;
