import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import { updateProduct } from '../../services/apiProducts';

interface UpdateProductProps {
  id: number;
  name: string;
  brand: string;
  brandDescription: string;
  mass: number;
  price: number;
  category: string;
  code: string;
  description: string;
}

function useUpdateProduct() {
  const queryClient = useQueryClient();

  const { mutate: editProduct, isPending: isUpdating } = useMutation({
    mutationFn: (updatedProduct: UpdateProductProps) =>
      updateProduct(updatedProduct),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['products'] });
      toast.success('محصول با موفقیت ویرایش شد');
      queryClient.refetchQueries();
    },
    onError: (error) => toast.error(error.message),
  });
  return { editProduct, isUpdating };
}

export default useUpdateProduct;
