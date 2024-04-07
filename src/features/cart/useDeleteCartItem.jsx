import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteFromCart } from '../../services/apiCart';

function useDeleteCartItem() {
  const queryClient = useQueryClient();

  const { isLoading, mutate } = useMutation({
    mutationFn: (id) => deleteFromCart(id),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: 'cart',
      });
    },
    // onError:(error)=>toast.error(err.message),
  });
  return { isLoading, mutate };
}

export default useDeleteCartItem;
