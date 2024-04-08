import Loader from '../../components/Loader';
import useUser from '../../features/auth/useUser';
import useCart from '../../features/cart/useCart';
import CartProducts from './CartProducts';
import CartTable from './CartTable';
import CartTotal from './CartTotal';
import Checkout from './Checkout';

function Cart() {
  const { cart, isLoading } = useCart();
  const { user } = useUser();
  if (isLoading) return <Loader />;

  return (
    <div className="min-h-72 dark:bg-stone-600">
      <h2 className="container w-fit border-b-2 border-b-stone-500 pt-10 text-center font-vazirBold text-2xl text-stone-600 dark:text-white">
        🛒 سبد خرید
      </h2>
      <div className="container pb-20 pt-10">
        {cart.length ? (
          <div>
            <CartTable />
            <div className="shadow">
              {cart.map((product) => (
                <CartProducts key={product.id} product={product} />
              ))}
            </div>
            <CartTotal />
            {user === null && <Checkout />}
          </div>
        ) : (
          <p className="text-center font-vazirBold text-xl text-pink-600 dark:text-pink-400">
            سبد خرید شما خالی است
          </p>
        )}
      </div>
    </div>
  );
}

export default Cart;
