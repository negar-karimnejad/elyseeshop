import { useQuery } from '@tanstack/react-query';
import { getProduct } from '../../services/apiProducts';

function useProduct(id) {
  const {
    data: product,
    error,
    isLoading,
  } = useQuery({
    queryKey: ['product'],
    queryFn: () => getProduct(id),
  });
  return { product, error, isLoading };
}

export default useProduct;
