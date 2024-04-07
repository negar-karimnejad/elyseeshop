import { useMutation, useQueryClient } from '@tanstack/react-query';
import { addToCart } from '../../services/apiCart';
import { toast } from 'react-toastify';

function useCreateCartItem(reset) {
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: (newItem) => addToCart(newItem),
    onSuccess: () => {
      toast.success('محصول به سبد خرید اضافه شد');
      queryClient.invalidateQueries({
        queryKey: ['cart'],
      });
      reset();
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
  return { mutate, isPending };
}

export default useCreateCartItem;
