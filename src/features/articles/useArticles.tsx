import { useQuery } from '@tanstack/react-query';
import { getArticles } from '../../services/apiArticles';
import { ArticleProps } from '../../types/ArticleProps';

function useArticles() {
  const {
    data: articles,
    isLoading,
    error,
  } = useQuery<ArticleProps[]>({
    queryKey: ['articles'],
    queryFn: getArticles,
  });
  return { articles, isLoading, error };
}

export default useArticles;
