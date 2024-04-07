import React from 'react';
import Input from '../../components/Input';
import Button from '../../components/Button';

function CartTotal() {
  return (
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
          <p className="p-1 font-vazirBold">{(2).toLocaleString('Fa')}</p>
          <p className="p-1 font-vazirBold">{(0).toLocaleString('Fa')} تومان</p>
          <p className="p-1 font-vazirBold">{(0).toLocaleString('Fa')} تومان</p>
          <p className="p-1 font-vazirBold">
            <span className="font-vazirBold text-xl text-pink-600 dark:text-stone-800">
              {(1725000).toLocaleString('Fa')}
            </span>{' '}
            تومان
          </p>
        </div>
      </div>
    </div>
  );
}

export default CartTotal;
