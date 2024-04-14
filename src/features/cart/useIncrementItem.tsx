import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import { incrementQty } from '../../services/apiCart';

function useIncrementItem() {
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: (id: number) => incrementQty(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['cart'] });
      queryClient.refetchQueries({ queryKey: ['cart'] });
    },
    onError: (error) => toast.error(error.message),
  });

  return { mutate, isPending };
}

export default useIncrementItem;
