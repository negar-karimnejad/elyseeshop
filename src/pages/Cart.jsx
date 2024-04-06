import { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import Input from '../components/Input';
import { BiTrash } from 'react-icons/bi';

function Cart() {
  const [quantity, setQuantity] = useState(1);

  const cart = true;

  const checkoutHandler = () => {
    // if user isn't login show this notif:
    // برای تکمیل سفارش لطفا وارد حساب کاربری خود شوید
  };

  return (
    <div className="dark:bg-stone-600">
      <h2 className="font-vazirBold container w-fit border-b-2 border-b-stone-500 pt-10 text-center text-2xl text-stone-600 dark:text-white">
        🛒 سبد خرید
      </h2>
      <div className="container pb-20 pt-10">
        {cart ? (
          <div>
            <div className="grid grid-cols-12 bg-pink-200 text-stone-700 dark:bg-stone-800 dark:text-stone-300">
              <div className="font-vazirBold col-span-1 border border-white p-1 text-center dark:border-stone-700 max-md:hidden"></div>
              <div className="font-vazirBold col-span-4 border border-white p-1 text-center dark:border-stone-700 max-sm:text-sm sm:col-span-6 md:col-span-5">
                نام کالا
              </div>
              <div className="font-vazirBold col-span-1 border border-white p-1 text-center dark:border-stone-700 max-sm:px-0 max-sm:text-[12px]">
                تعداد
              </div>
              <div className="font-vazirBold col-span-2 border border-white p-1 text-center dark:border-stone-700 max-sm:col-span-3 max-sm:text-sm">
                قیمت واحد
              </div>
              <div className="font-vazirBold col-span-2 border border-white p-1 text-center dark:border-stone-700 max-sm:col-span-3 max-sm:text-sm">
                مبلغ کل
              </div>
              <div className="font-vazirBold col-span-1 border border-white p-1 text-center dark:border-stone-700 max-sm:text-sm"></div>
            </div>

            {/* Cart Products */}
            <div className="grid grid-cols-12 items-center bg-stone-200 text-stone-700 transition-all hover:bg-stone-200 dark:bg-stone-700 dark:text-white dark:hover:bg-stone-700">
              <div className="flex items-center justify-center border border-r border-white py-3 dark:border-stone-500/50 max-md:hidden">
                <img className="w-16" src="/images/products/1.jpg" alt="" />
              </div>
              <div className="col-span-4 flex h-full items-center border border-r border-white p-2 text-center dark:border-stone-500/50 sm:col-span-6 md:col-span-5">
                <Link
                  to=""
                  className="font-vazirMedium transition-all hover:text-pink-500 max-sm:text-sm"
                >
                  سرم رتینول خالص 0.5 ضد چروک و جوانساز
                </Link>
              </div>
              <div className="col-span-1 flex h-full items-center justify-center border border-r border-white p-1 text-center dark:border-stone-500/50">
                <Input
                  className="w-full py-1 text-center md:w-1/2"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  type="number"
                />
              </div>
              <div className="col-span-2 flex h-full items-center justify-center border border-r border-white p-1 text-center dark:border-stone-500/50 max-sm:col-span-3">
                <p className="font-vazirMedium max-sm:text-sm">1,180,000</p>
              </div>
              <div className="col-span-2 flex h-full items-center justify-center border border-r border-white p-1 text-center dark:border-stone-500/50 max-sm:col-span-3">
                <p className="font-vazirMedium max-sm:text-sm">1,180,000</p>
              </div>
              <div className="col-span-1 flex h-full items-center justify-center border border-r border-white p-1 py-7 text-center dark:border-stone-500/50">
                <button className="font-vazirBold my-1 text-4xl text-red-500 hover:text-red-600">
                  <BiTrash size={20} />
                </button>{' '}
              </div>
            </div>
            <div className="grid grid-cols-12 items-center bg-stone-100 text-stone-700 transition-all hover:bg-stone-200 dark:bg-stone-500/50 dark:text-white dark:hover:bg-stone-700">
              <div className="flex items-center justify-center border border-r border-white py-3 dark:border-stone-500/50 max-md:hidden">
                <img className="w-16" src="/images/products/1.jpg" alt="" />
              </div>
              <div className="col-span-4 flex h-full items-center border border-r border-white p-2 text-center dark:border-stone-500/50 sm:col-span-6 md:col-span-5">
                <Link
                  to=""
                  className="font-vazirMedium transition-all hover:text-pink-500 max-sm:text-sm"
                >
                  سرم رتینول خالص 0.5 ضد چروک و جوانساز
                </Link>
              </div>
              <div className="col-span-1 flex h-full items-center justify-center border border-r border-white p-1 text-center dark:border-stone-500/50">
                <Input
                  className="w-full py-1 text-center md:w-1/2"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  type="number"
                />
              </div>
              <div className="col-span-2 flex h-full items-center justify-center border border-r border-white p-1 text-center dark:border-stone-500/50 max-sm:col-span-3">
                <p className="font-vazirMedium max-sm:text-sm">1,180,000</p>
              </div>
              <div className="col-span-2 flex h-full items-center justify-center border border-r border-white p-1 text-center dark:border-stone-500/50 max-sm:col-span-3">
                <p className="font-vazirMedium max-sm:text-sm">1,180,000</p>
              </div>
              <div className="col-span-1 flex h-full items-center justify-center border border-r border-white p-1 py-7 text-center dark:border-stone-500/50">
                <button className="font-vazirBold my-1 text-4xl text-red-500 hover:text-red-600">
                  <BiTrash size={20} />
                </button>{' '}
              </div>
            </div>

            <div className="flex w-full justify-between gap-y-10 pt-10 max-md:flex-col max-md:items-center">
              <div>
                <form action="" className="flex items-center gap-3">
                  <label htmlFor="offCode" className="dark:text-white">
                    کد تخفیف:
                  </label>
                  <Input className="px-2 py-1" id="offCode" />
                  <Button variant="gray" className="px-8">
                    ثبت
                  </Button>
                </form>
              </div>
              <div className="flex w-96 items-center gap-5 text-xl">
                <div className="flex w-full flex-col gap-1 divide-y-2 divide-white bg-pink-700 text-white dark:divide-stone-600 dark:bg-stone-800">
                  <p className="p-1">تعداد</p>
                  <p className="p-1">تخفیف</p>
                  <p className="p-1">هزینه ارسال</p>
                  <p className="p-1">مبلغ قابل پرداخت</p>
                </div>
                <div className="flex w-full flex-col gap-1 divide-y-2 divide-white bg-stone-100 text-center text-stone-700 dark:divide-stone-600 dark:bg-stone-500 dark:text-white">
                  <p className="font-vazirBold p-1">
                    {(2).toLocaleString('Fa')}
                  </p>
                  <p className="font-vazirBold p-1">
                    {(0).toLocaleString('Fa')} تومان
                  </p>
                  <p className="font-vazirBold p-1">
                    {(0).toLocaleString('Fa')} تومان
                  </p>
                  <p className="font-vazirBold p-1">
                    <span className="font-vazirBold text-xl text-pink-600 dark:text-stone-800">
                      {(1725000).toLocaleString('Fa')}
                    </span>{' '}
                    تومان
                  </p>
                </div>
              </div>
            </div>

            {/* Checkout */}
            <div className="flex mt-10 flex-col items-center justify-center gap-2 border-t pt-5">
              <p className="font-vazirMedium mb-5 text-[15px] text-pink-700 dark:text-white">
                برای تکمیل سفارش خود لطفا وارد سیستم شوید
              </p>
              <Link
                className="w-64 rounded-md bg-stone-200 py-1 text-center text-stone-500 transition-all hover:text-pink-600 dark:bg-stone-500 dark:text-stone-200 dark:hover:text-pink-400"
                to="/login"
              >
                ورود به حساب شخصی
              </Link>
              <Link
                className="w-64 rounded-md bg-stone-200 py-1 text-center text-stone-500 transition-all hover:text-pink-600 dark:bg-stone-500 dark:text-stone-200 dark:hover:text-pink-400"
                to="/register"
              >
                ثبت نام کاربر جدید
              </Link>
              <Button onClick={checkoutHandler} variant="dark" className="mt-4">
                اتمام خرید
              </Button>
            </div>
          </div>
        ) : (
          <p className="font-vazirBold text-pink-600">سبد خرید شما خالی است</p>
        )}
      </div>
    </div>
  );
}

export default Cart;
