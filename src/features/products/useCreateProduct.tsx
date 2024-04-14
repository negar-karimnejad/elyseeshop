import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createNewProduct } from '../../services/apiProducts';
import { toast } from 'react-toastify';
import { NewProductProps } from '../../types/ProductProps';

function useCreateProduct() {
  const queryClient = useQueryClient();

  const {
    mutate: addProduct,
    error,
    isPending,
  } = useMutation({
    mutationFn: (newProduct: NewProductProps) => createNewProduct(newProduct),
    onSuccess: () => {
      toast.success('محصول جدید اضافه شد');
      queryClient.invalidateQueries({
        queryKey: ['products'],
      });
      queryClient.refetchQueries({ queryKey: ['products'] });
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
  return { addProduct, error, isPending };
}

export default useCreateProduct;
