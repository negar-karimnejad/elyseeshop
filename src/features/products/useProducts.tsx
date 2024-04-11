import { useQuery } from '@tanstack/react-query';
import { getProducts } from '../../services/apiProducts';
import { ProductProps } from '../../types/ProductProps';

interface ProductsProps {
  products: ProductProps[] | null;
  isLoading: boolean;
  error: string | null;
}

function useProducts() {
  const {
    data: products,
    error,
    isLoading,
  } = useQuery<ProductsProps[]>({
    queryKey: ['products'],
    queryFn: getProducts,
  });
  return { products, error, isLoading };
}

export default useProducts;
