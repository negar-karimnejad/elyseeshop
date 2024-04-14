import { useQuery } from '@tanstack/react-query';
import { getProduct } from '../../services/apiProducts';

function useProduct(id: string | undefined) {
  const { data, error, isLoading, refetch, isFetching, isFetched } = useQuery({
    queryKey: ['product'],
    queryFn: () => getProduct(id),
  });
  const product = data?.at(0);
  return { product, error, isLoading, refetch, isFetching, isFetched };
}

export default useProduct;
