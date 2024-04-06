import { useQuery } from '@tanstack/react-query';
import { getProduct } from '../../services/apiProducts';

function useProduct(id) {
  const { data, error, isLoading, refetch } = useQuery({
    queryKey: ['product'],
    queryFn: () => getProduct(id),
  });
  const product = data?.at(0);
  return { product, error, isLoading, refetch };
}

export default useProduct;
