import { FaShoppingCart } from 'react-icons/fa';
import { GiPayMoney, GiReceiveMoney } from 'react-icons/gi';

function AdminPanel() {
  return (
    <div className="bg-stone-100 px-10 max-md:col-span-12 md:col-span-9 lg:col-span-10">
      <h2 className="my-5 text-xl">
        خوش آمدید, <span className="text-xl text-pink-500">نگار عزیز</span>
      </h2>
      <div className="grid grid-cols-12 gap-x-5 gap-y-10">
        <div className="relative col-span-4 rounded-md bg-white p-4 shadow-md max-sm:col-span-12">
          <div className="mt-5 flex h-14 gap-5">
            <span>$1,290</span>
            <span className="text-green-500">8.5%</span>
          </div>
          <span className="text-stone-400">درآمد در یک ماه گذشته</span>
          <div className="absolute -top-5 left-3 flex h-14 w-14 items-center justify-center rounded-sm bg-pink-400 text-white shadow-md">
            <GiReceiveMoney size={28} />
          </div>
        </div>
        <div className="relative col-span-4 rounded-md bg-white p-4 shadow-md max-sm:col-span-12">
          <div className="mt-5 flex h-14 gap-5">
            <span>$4,360</span>
            <span className="text-green-500">8.5%</span>
          </div>
          <span className="text-stone-400">فروش در یک ماه گذشته</span>
          <div className="absolute -top-5 left-3 flex h-14 w-14 items-center justify-center rounded-sm bg-pink-400 text-white shadow-md">
            <FaShoppingCart size={20} />
          </div>
        </div>
        <div className="relative col-span-4 rounded-md bg-white p-4 shadow-md max-sm:col-span-12">
          <div className="mt-5 flex h-14 gap-5">
            <span>$2,270</span>
            <span className="text-green-500">8.5%</span>
          </div>
          <span className="text-stone-400">هزینه در یک ماه گذشته</span>
          <div className="absolute -top-5 left-3 flex h-14 w-14 items-center justify-center rounded-sm bg-pink-400 text-white shadow-md">
            <GiPayMoney size={28} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminPanel;
