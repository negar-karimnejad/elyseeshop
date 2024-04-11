import { useQuery } from '@tanstack/react-query';
import { getProducts } from '../../services/apiProducts';
import { ProductProps } from '../../types/ProductProps';

function useProducts() {
  const {
    data: products,
    error,
    isLoading,
  } = useQuery<ProductProps[]>({
    queryKey: ['products'],
    queryFn: getProducts,
  });
  return { products, error, isLoading };
}

export default useProducts;
