import { toast } from 'react-toastify';
import Button from '../../components/Button';
import Input from '../../components/Input';
import useCart from '../../features/cart/useCart';
import { useState } from 'react';

interface StyledDivProps {
  title: string;
  value: number;
}

const StyledDiv = ({ title, value }: StyledDivProps) => {
  return (
    <div className="flex gap-3 bg-white dark:bg-stone-600">
      <p className="w-full bg-pink-700 p-1 dark:bg-stone-800">{title}</p>
      <p className="w-full bg-stone-200 p-1 text-center font-vazirBold text-stone-700 dark:bg-stone-500 dark:text-white">
        {title === 'مبلغ قابل پرداخت' ? (
          <>
            <span className="font-vazirBold text-xl text-pink-600 dark:text-stone-800">
              {value.toLocaleString('Fa')}
            </span>{' '}
            تومان
          </>
        ) : (
          <>
            {value.toLocaleString('Fa')} {title === 'تعداد' ? '' : 'تومان'}{' '}
          </>
        )}
      </p>
    </div>
  );
};

function CartTotal() {
  const [code, setCode] = useState('');
  const { totalPrice, totalQty } = useCart();

  return (
    <div className="flex w-full justify-between gap-y-10 pt-10 max-md:flex-col max-md:items-center">
      <div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            toast.error('کد وارد شده صحیح نمی باشد');
          }}
          className="flex items-center gap-3"
        >
          <label htmlFor="offCode" className="dark:text-white">
            کد تخفیف:
          </label>
          <Input
            onChange={(e) => setCode(e.target.value)}
            type="text"
            value={code}
            className="px-2 py-1"
            id="offCode"
          />
          <Button
            onClick={() => {}}
            type="submit"
            variant="gray"
            className="px-8"
          >
            ثبت
          </Button>
        </form>
      </div>
      <div className="flex w-96 items-center gap-5 text-xl">
        <div className="flex w-full flex-col divide-y-4 divide-white text-white dark:divide-stone-600">
          <StyledDiv title="تعداد" value={totalQty} />
          <StyledDiv title="تخفیف" value={0} />
          <StyledDiv title="هزینه ارسال" value={0} />
          <StyledDiv title="مبلغ قابل پرداخت" value={totalPrice} />
        </div>
      </div>
    </div>
  );
}

export default CartTotal;
