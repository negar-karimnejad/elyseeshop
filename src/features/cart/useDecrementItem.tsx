import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import { decrementQty } from '../../services/apiCart';

function useDecrementItem() {
  const queryClient = useQueryClient();

  const { mutate,isPending } = useMutation({
    mutationFn: (id:number) => decrementQty(id),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['cart'],
      });
      // queryClient.refetchQueries('cart');
      queryClient.refetchQueries({ queryKey: ['cart'] });
    },
    onError: (error) => toast.error(error.message),
  });

  return { mutate,isPending };
}

export default useDecrementItem;
