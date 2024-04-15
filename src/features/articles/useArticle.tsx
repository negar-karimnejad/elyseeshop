import { useQuery } from '@tanstack/react-query';
import { getArticle } from '../../services/apiArticles';
import { ArticleProps } from '../../types/ArticleProps';

function useArticle(title: string) {
  const { data, isLoading, error, refetch } = useQuery<ArticleProps[]>({
    queryKey: ['articles'],
    queryFn: () => getArticle(title),
  });
  const article = data?.at(0);
  return { article, isLoading, error, refetch };
}

export default useArticle;
