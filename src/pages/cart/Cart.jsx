import CartProducts from './CartProducts';
import CartTable from './CartTable';
import CartTotal from './CartTotal';
import Checkout from './Checkout';

function Cart() {
  const cart = true;

  return (
    <div className="dark:bg-stone-600">
      <h2 className="container w-fit border-b-2 border-b-stone-500 pt-10 text-center font-vazirBold text-2xl text-stone-600 dark:text-white">
        🛒 سبد خرید
      </h2>
      <div className="container pb-20 pt-10">
        {cart ? (
          <div>
            <CartTable />
            <CartProducts />
            <CartTotal />
            <Checkout />
          </div>
        ) : (
          <p className="font-vazirBold text-pink-600">سبد خرید شما خالی است</p>
        )}
      </div>
    </div>
  );
}

export default Cart;
