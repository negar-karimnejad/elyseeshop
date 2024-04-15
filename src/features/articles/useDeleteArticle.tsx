import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import { deleteArticle } from '../../services/apiArticles';

function useDeleteArticle() {
  const queryClient = useQueryClient();

  const {
    mutate: removeArticle,
    isPending: isDeleting,
    error,
  } = useMutation({
    mutationFn: (id: number) => deleteArticle(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['articles'] });
      toast.success('مقاله جدید حذف شد');
      queryClient.refetchQueries({ queryKey: ['articles'] });
    },
    onError: (error) => toast.error(error.message),
  });
  return { removeArticle, isDeleting, error };
}

export default useDeleteArticle;
