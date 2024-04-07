function CartTable() {
  return (
    <div className="grid grid-cols-12 bg-pink-200 text-stone-700 dark:bg-stone-800 dark:text-stone-300">
      <div className="col-span-1 border border-white p-1 text-center font-vazirBold dark:border-stone-700 max-md:hidden"></div>
      <div className="col-span-4 border border-white p-1 text-center font-vazirBold dark:border-stone-700 max-sm:text-sm sm:col-span-6 md:col-span-5">
        نام کالا
      </div>
      <div className="col-span-1 border border-white p-1 text-center font-vazirBold dark:border-stone-700 max-sm:px-0 max-sm:text-[12px]">
        تعداد
      </div>
      <div className="col-span-2 border border-white p-1 text-center font-vazirBold dark:border-stone-700 max-sm:col-span-3 max-sm:text-sm">
        قیمت واحد
      </div>
      <div className="col-span-2 border border-white p-1 text-center font-vazirBold dark:border-stone-700 max-sm:col-span-3 max-sm:text-sm">
        مبلغ کل
      </div>
      <div className="col-span-1 border border-white p-1 text-center font-vazirBold dark:border-stone-700 max-sm:text-sm"></div>
    </div>
  );
}

export default CartTable;
