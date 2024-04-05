import { useQuery } from '@tanstack/react-query';
import { getSimilarProducts } from '../../services/apiProducts';

function useSimilarProducts(tag, id) {
  const {
    data: similarProducts,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['SimilarProducts'],
    queryFn: () => getSimilarProducts(tag, id),
  });
  return { similarProducts, isLoading, error };
}

export default useSimilarProducts;
