import { Link } from 'react-router-dom';
import StyledProductsUl from '../components/StyledProductsUl';
import { ProductsPagebrands } from '../data/data';

const skinCare = [
  'مراقبت پوست',
  'مراقبت از چشم',
  'پاک کننده های صورت',
  'ابزار جانبی پوست',
];

function Products() {
  return (
    <div className="bg-stone-100 dark:bg-stone-600">
      <div className="flex h-36 items-center justify-center bg-[url('/images/heading-bg.jpg')] font-yekanB text-3xl text-stone-400">
        <p className="">هدینگ</p>
      </div>
      <div className="container grid gap-5 py-8 md:grid-cols-12">
        <div className="col-span-3 rounded-md bg-white p-5 pr-10 shadow-sm">
          <StyledProductsUl heading="مراقبت از پوست" list={skinCare} />
          <div className="my-16"></div>
          <StyledProductsUl heading="برند" list={ProductsPagebrands} />
        </div>
        <div className="col-span-9">
          <div className="flex items-center gap-2 text-lg">
            <h4 className="text-stone-700">مرتب سازی براساس:</h4>
            <Link
              to=""
              className="rounded-full border p-1 px-3 font-yekanB text-base text-stone-500 transition-all  hover:border-pink-300 hover:text-pink-300"
            >
              ارزان ترین
            </Link>
            <Link
              to=""
              className="rounded-full border p-1 px-3 font-yekanB text-base text-stone-500 transition-all  hover:border-pink-300 hover:text-pink-300"
            >
              گران ترین
            </Link>
            <Link
              to=""
              className="rounded-full border p-1 px-3 font-yekanB text-base text-stone-500 transition-all  hover:border-pink-300 hover:text-pink-300"
            >
              جدیدترین
            </Link>
          </div>
          <div>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
