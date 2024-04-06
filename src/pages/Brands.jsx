import { Link } from 'react-router-dom';
import { brands } from '../data/data';

function Brands() {
  return (
    <div
      className="bg-stone-200 dark:bg-stone-600"
      style={{ direction: 'ltr' }}
    >
      <div className="font-vazirBold flex h-44 items-center justify-center bg-[url('/images/heading-bg.jpg')] text-3xl text-stone-400">
        <p className="">برندها</p>
      </div>
      <div className="container grid grid-cols-2 gap-x-5 gap-y-8 py-20 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
        {brands.map((brand) => (
          <div
            key={brand.heading}
            className="flex flex-col rounded-md bg-white p-4 leading-7 text-stone-700 shadow-lg dark:bg-stone-400 dark:text-white "
          >
            <p className="font-vazirBold">{brand.heading}</p>
            {brand.list.map((item) => (
              <Link
                key={item}
                to=""
                className="transition-all hover:text-pink-300"
              >
                {item}
              </Link>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Brands;
