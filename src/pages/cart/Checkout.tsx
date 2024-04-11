import Button from '../../components/Button';

function Checkout() {
  const checkoutHandler = () => {
    // if user isn't login show this notif:
    // برای تکمیل سفارش لطفا وارد حساب کاربری خود شوید
  };

  return (
    <div className="mt-10 flex flex-col items-center justify-center gap-2 border-t pt-5">
      <p className="font-vazirMedium text-[15px] text-pink-700 dark:text-white">
        تکمیل سفارش
      </p>
      <Button
        disabled=""
        type="button"
        onClick={checkoutHandler}
        variant="dark"
        className="mt-4 w-72"
      >
        اتمام خرید
      </Button>
    </div>
  );
}

export default Checkout;
