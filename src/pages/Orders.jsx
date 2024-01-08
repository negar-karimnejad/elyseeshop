function Orders() {
  return (
    <div className="container my-16">
      <h5 className="mb-2 text-center font-yekanB text-lg text-stone-700 dark:text-white">
        فهرست سفارشات
      </h5>
      <div className="grid grid-cols-12 bg-pink-400 text-stone-100 dark:bg-stone-500">
        <div className="col-span-1 border p-1 text-center font-yekanB">
          ردیف
        </div>
        <div className="col-span-2 border p-1 text-center font-yekanB">
          شماره سفارش
        </div>
        <div className="col-span-2 border p-1 text-center font-yekanB">
          تاریخ
        </div>
        <div className="col-span-3 border p-1 text-center font-yekanB">
          مبلغ کل
        </div>
        <div className="col-span-2 border p-1 text-center font-yekanB">
          وضعیت
        </div>
        <div className="col-span-2 border p-1 text-center font-yekanB">
          مشاهده فاکتور
        </div>
      </div>
    </div>
  );
}

export default Orders;
