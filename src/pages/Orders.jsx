function Orders() {
  return (
    <div className="container my-16">
      <h5 className="font-vazirBold mb-2 text-center text-lg text-stone-700 dark:text-white">
        فهرست سفارشات
      </h5>
      <div className="grid grid-cols-12 bg-pink-400 text-stone-100 dark:bg-stone-500">
        <div className="font-vazirBold col-span-1 border p-1 text-center">
          ردیف
        </div>
        <div className="font-vazirBold col-span-2 border p-1 text-center">
          شماره سفارش
        </div>
        <div className="font-vazirBold col-span-2 border p-1 text-center">
          تاریخ
        </div>
        <div className="font-vazirBold col-span-3 border p-1 text-center">
          مبلغ کل
        </div>
        <div className="font-vazirBold col-span-2 border p-1 text-center">
          وضعیت
        </div>
        <div className="font-vazirBold col-span-2 border p-1 text-center">
          مشاهده فاکتور
        </div>
      </div>
    </div>
  );
}

export default Orders;
