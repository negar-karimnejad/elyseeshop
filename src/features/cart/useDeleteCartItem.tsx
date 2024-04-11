import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteFromCart } from '../../services/apiCart';
import { toast } from 'react-toastify';

function useDeleteCartItem() {
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: (id) => deleteFromCart(id),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: 'cart',
      });
      queryClient.refetchQueries('cart');
    },
    onError: (error) => toast.error(error.message),
  });
  return { isPending, mutate };
}

export default useDeleteCartItem;
