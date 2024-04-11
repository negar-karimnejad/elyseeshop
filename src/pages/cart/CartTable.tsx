interface StyledDivProps {
  style: string;
  heading: string;
}

const StyledDiv = ({ style, heading }: StyledDivProps) => {
  return (
    <div
      className={`col-span-1 border border-white p-1 text-center font-vazirBold dark:border-stone-700 max-sm:text-sm ${style}`}
    >
      {heading}
    </div>
  );
};

function CartTable() {
  return (
    <div className="grid grid-cols-12 bg-pink-200 text-stone-700 dark:bg-stone-800 dark:text-stone-300">
      <StyledDiv style="max-md:hidden" heading="" />
      <StyledDiv
        heading="نام کالا"
        style="col-span-4 sm:col-span-6 md:col-span-5"
      />
      <StyledDiv heading="تعداد" style="max-sm:px-0 max-sm:text-[12px]" />
      <StyledDiv heading="قیمت واحد" style="col-span-2 max-sm:col-span-3" />
      <StyledDiv heading="مبلغ کل" style="col-span-2 max-sm:col-span-3" />
      <StyledDiv heading="" style="" />
    </div>
  );
}

export default CartTable;
