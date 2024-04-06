import { useState } from 'react';
import Input from '../components/Input';

function Cart() {
  const [quantity, setQuantity] = useState(1);

  const cart = true;
  return (
    <div className="container py-20">
      {cart ? (
        <div>
          <div className="grid grid-cols-12 bg-pink-200 text-stone-700 dark:bg-stone-700">
            <div className="font-vazirBold col-span-1 border border-white p-1 text-center"></div>
            <div className="font-vazirBold max-sm col-span-4 border border-white p-1 text-center">
              نام کالا
            </div>
            <div className="font-vazirBold col-span-1 border border-white p-1 text-center">
              تعداد
            </div>
            <div className="font-vazirBold col-span-2 border border-white p-1 text-center">
              قیمت واحد
            </div>
            <div className="font-vazirBold max-sm col-span-2 border border-white p-1 text-center">
              تخفیف %
            </div>
            <div className="font-vazirBold col-span-2 border border-white p-1 text-center">
              مبلغ کل
            </div>
          </div>
          <div className="grid grid-cols-12 bg-stone-100 items-center">
            <div className="font-vazirBold col-span-1 p-1 text-center">
              {' '}
              <img className="w-20" src="/images/products/1.jpg" alt="" />
            </div>
            <div className="font-vazirBold max-sm col-span-4 p-1 text-center">
              <p>سرم رتینول خالص 0.5 ضد چروک و جوانساز / 20 میل Cosrx</p>
            </div>
            <div className="font-vazirBold col-span-1 p-1 text-center">
              <Input
                className="mr-4 w-full p-2"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                type="number"
              />
            </div>
            <div className="font-vazirBold col-span-2 p-1 text-center">
              <p>1,180,000</p>
            </div>
            <div className="font-vazirBold max-sm col-span-2 p-1 text-center">
              <p>%180</p>
            </div>
            <div className="font-vazirBold col-span-2 p-1 text-center">
              <p>1,180,000</p>
            </div>
          </div>
          <div className="grid grid-cols-12 bg-stone-100 items-center">
            <div className="font-vazirBold col-span-1 p-1 text-center">
              {' '}
              <img className="w-20" src="/images/products/1.jpg" alt="" />
            </div>
            <div className="font-vazirBold max-sm col-span-4 p-1 text-center">
              <p>سرم رتینول خالص 0.5 ضد چروک و جوانساز / 20 میل Cosrx</p>
            </div>
            <div className="font-vazirBold col-span-1 p-1 text-center">
              <Input
                className="mr-4 w-full p-2"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                type="number"
              />
            </div>
            <div className="font-vazirBold col-span-2 p-1 text-center">
              <p>1,180,000</p>
            </div>
            <div className="font-vazirBold max-sm col-span-2 p-1 text-center">
              <p>%180</p>
            </div>
            <div className="font-vazirBold col-span-2 p-1 text-center">
              <p>1,180,000</p>
            </div>
          </div>
        </div>
      ) : (
        <p className="font-vazirBold text-pink-600">سبد خرید شما خالی است</p>
      )}
    </div>
  );
}

export default Cart;
