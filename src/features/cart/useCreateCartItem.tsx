import { useMutation, useQueryClient } from '@tanstack/react-query';
import { addToCart } from '../../services/apiCart';
import { toast } from 'react-toastify';

interface NewItemProps {
  userId: string;
  productId: number;
  quantity: number;
  item: object;
}

function useCreateCartItem() {
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: (newItem: NewItemProps) => addToCart(newItem),
    onSuccess: () => {
      toast.success('محصول به سبد خرید اضافه شد');
      queryClient.invalidateQueries({
        queryKey: ['cart'],
      });
      queryClient.refetchQueries({ queryKey: ['cart'] });
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
  return { mutate, isPending };
}

export default useCreateCartItem;
