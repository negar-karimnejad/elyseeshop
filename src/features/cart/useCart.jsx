import { useQuery } from '@tanstack/react-query';
import { getCart } from '../../services/apiCart';
import useUser from '../auth/useUser';

function useCart() {
  const { user } = useUser();

  const { data, isLoading, error } = useQuery({
    queryKey: ['cart'],
    queryFn: getCart,
  });
  const cart = data?.filter((product) => product.userId === user?.id);
  const totalQty = cart?.reduce((acc, item) => acc + item.quantity, 0);
  const totalPrice = cart?.reduce((acc, item) => {
    const itemPrice = item.item.price;
    const itemQty = item.quantity;
    return acc + itemPrice * itemQty;
  }, 0);

  return { cart, isLoading, error, totalQty, totalPrice };
}

export default useCart;
