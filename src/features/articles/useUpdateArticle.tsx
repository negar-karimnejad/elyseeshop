import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import { updateArticle } from '../../services/apiArticles';
import { ArticleProps } from '../../types/ProductProps';

function useUpdateArticle() {
  const queryClient = useQueryClient();

  const { mutate: editArticle, isPending: isUpdating } = useMutation({
    mutationFn: (updatedArticle: ArticleProps) => updateArticle(updatedArticle),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['articles'] });
      toast.success('مقاله با موفقیت ویرایش شد');
      queryClient.refetchQueries({ queryKey: ['articles'] });
    },
    onError: (error) => toast.error(error.message),
  });
  return { editArticle, isUpdating };
}

export default useUpdateArticle;
