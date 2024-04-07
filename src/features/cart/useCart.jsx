import { useQuery } from '@tanstack/react-query';
import { getCart } from '../../services/apiCart';

function useCart() {
  const {
    data: cart,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['cart'],
    queryFn: getCart,
  });
  const totalQty = cart.reduce((total, curr) => {
    console.log(curr);
  }, 0);

  return { cart, totalQty, isLoading, error };
}

export default useCart;
