import { useQuery } from '@tanstack/react-query';
import { getArticle } from '../../services/apiArticles';
import { ArticleProps } from '../../types/ProductProps';

function useArticle(id: number) {
  const { data, isLoading, error, refetch } = useQuery<ArticleProps[]>({
    queryKey: ['articles'],
    queryFn: () => getArticle(id),
  });
  const article = data?.at(0);
  return { article, isLoading, error, refetch };
}

export default useArticle;
