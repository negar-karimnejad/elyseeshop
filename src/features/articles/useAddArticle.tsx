import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import { addArticle } from '../../services/apiArticles';
import { ArticleProps } from '../../types/ProductProps';

function useAddArticle() {
  const queryClient = useQueryClient();

  const {
    mutate: createArticle,
    isPending: isAdding,
    error,
  } = useMutation({
    mutationFn: (newArticle: ArticleProps) => addArticle(newArticle),
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
