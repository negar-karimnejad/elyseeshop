import { Link } from 'react-router-dom';
import Button from '../../components/Button';

const CheckoutLink = ({ children, to }) => {
  return (
    <Link
      className="w-64 rounded-md bg-stone-200 py-1 text-center text-stone-500 transition-all hover:text-pink-600 dark:bg-stone-500 dark:text-stone-200 dark:hover:text-pink-400"
      to={to}
    >
      {children}
    </Link>
  );
};
function Checkout() {
  const checkoutHandler = () => {
    // if user isn't login show this notif:
    // برای تکمیل سفارش لطفا وارد حساب کاربری خود شوید
  };

  return (
    <div className="mt-10 flex flex-col items-center justify-center gap-2 border-t pt-5">
      <p className="mb-5 font-vazirMedium text-[15px] text-pink-700 dark:text-white">
        برای تکمیل سفارش خود لطفا وارد سیستم شوید
      </p>
      <CheckoutLink to="/login">ورود به حساب شخصی</CheckoutLink>
      <CheckoutLink to="/register">ثبت نام کاربر جدید</CheckoutLink>
      <Button onClick={checkoutHandler} variant="dark" className="mt-4">
        اتمام خرید
      </Button>
    </div>
  );
}

export default Checkout;
