import { useQuery } from '@tanstack/react-query';
import { getArticles } from '../../services/apiArticles';
import { ArticlesProps } from '../../types/ArticleProps';

function useArticles() {
  const {
    data: articles,
    isLoading,
    error,
  } = useQuery<ArticlesProps[]>({
    queryKey: ['articles'],
    queryFn: getArticles,
  });
  return { articles, isLoading, error };
}

export default useArticles;
