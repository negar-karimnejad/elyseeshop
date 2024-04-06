import React from 'react';

function CustomerClub() {
  return (
    <div className="container my-16">
      <h5 className="font-vazirBold my-5 text-xl text-stone-500 dark:text-stone-300">
        کارت آبی
      </h5>
      <p className="font-vazirMedium leading-9 text-stone-400 dark:text-stone-400">
        شما با اولین خرید بالای 3.000.000 تومان کارت اشتراک نقره ای دریافت می
        کنید.
        <br />
        با کارت نقره ای الیزه 2% از مبلغ خرید شما به عنوان اعتبار هدیه برای
        خریدهای بعدی به حساب کارت عضویت شما واریز خواهد شد.
        <br />
        اگر مجموع خرید شما به مبلغ 8.000.000 تومان رسیده باشد عضویت شما به نقره
        ای ارتقا خواهد یافت و برای شما کارت جدید صادر می شود.
      </p>
      <h5 className="font-vazirBold my-5 text-xl text-stone-500 dark:text-stone-300">
        کارت نقره ای
      </h5>
      <p className="font-vazirMedium leading-9 text-stone-400 dark:text-stone-400">
        %4 از مبلغ خرید شما به عنوان اعتبار هدیه برای خریدهای بعدی به حساب کارت
        عضویت شما واریز خواهد شد.
        <br />
        اگر مجموع خرید شما به مبلغ 20.000.000 تومان رسیده باشد عضویت شما به
        طلایی ارتقا خواهد یافت و برای شما کارت جدید صادر می شود. <br />
      </p>
      <h5 className="font-vazirBold my-5 text-xl text-stone-500 dark:text-stone-300">
        کارت طلایی
      </h5>
      <p className="font-vazirMedium leading-9 text-stone-400 dark:text-stone-400">
        با کارت طلایی الیزه 6% از مبلغ خرید شما به عنوان اعتبار هدیه برای
        خریدهای بعدی به حساب کارت عضویت شما واریز خواهد شد
      </p>
    </div>
  );
}

export default CustomerClub;
