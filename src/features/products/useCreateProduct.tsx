import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createNewProduct } from '../../services/apiProducts';
import { toast } from 'react-toastify';

interface NewProductProps {
  name: string;
  brand: string;
  brandImage: string;
  brandDescription: string;
  image: string;
  features: string[];
  tag: string[];
  mass: number;
  price: number;
  category: string;
  code: string;
  description: string;
}

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
