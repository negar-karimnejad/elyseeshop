import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import { addArticle } from '../../services/apiArticles';

function useAddArticle() {
  const queryClient = useQueryClient();

  const {
    mutate: createArticle,
    isPending: isAdding,
    error,
  } = useMutation({
    mutationFn: addArticle,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['articles'] });
      toast.success('مقاله جدید اضافه شد');
      queryClient.refetchQueries({ queryKey: ['articles'] });
    },
    onError: (error) => toast.error(error.message),
  });
  return { createArticle, isAdding, error };
}

export default useAddArticle;
