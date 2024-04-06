const style = 'font-vazirBold col-span-2 border p-1 text-center';

function Orders() {
  return (
    <div className="dark:bg-stone-600">
      <div className="container py-16 max-md:text-sm">
        <h5 className="font-vazirBold mb-4 text-center text-lg text-stone-700 dark:text-white">
          فهرست سفارشات
        </h5>
        <div className="grid grid-cols-12 bg-pink-400 text-stone-100 dark:bg-stone-700">
          <div className="font-vazirBold col-span-1 border p-1 text-center max-sm:col-span-2">
            ردیف
          </div>
          <div className={style}>شماره سفارش</div>
          <div className={style}>تاریخ</div>
          <div className="font-vazirBold  col-span-3 border p-1 text-center max-sm:col-span-2">
            مبلغ کل
          </div>
          <div className={style}>وضعیت</div>
          <div className={style}>مشاهده فاکتور</div>
        </div>
      </div>
    </div>
  );
}

export default Orders;
