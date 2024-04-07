import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteFromCart } from '../../services/apiCart';

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
    // onError:(error)=>toast.error(err.message),
  });
  return { isPending, mutate };
}

export default useDeleteCartItem;
