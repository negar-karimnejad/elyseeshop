import { useQuery } from '@tanstack/react-query';
import { getProducts } from '../../services/apiProducts';

function useProducts() {
  const {
    data: products,
    error,
    isLoading,
  } = useQuery({
    queryKey: ['products'],
    queryFn: getProducts,
  });
  return { products, error, isLoading };
}

export default useProducts;
