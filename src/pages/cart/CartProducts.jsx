import { useState } from 'react';
import { BiTrash } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import Input from '../../components/Input';

function CartProducts() {
  const [quantity, setQuantity] = useState(1);

  return (
    <div>
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
          <button className="my-1 font-vazirBold text-4xl text-red-500 hover:text-red-600">
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
          <button className="my-1 font-vazirBold text-4xl text-red-500 hover:text-red-600">
            <BiTrash size={20} />
          </button>{' '}
        </div>
      </div>
    </div>
  );
}

export default CartProducts;
