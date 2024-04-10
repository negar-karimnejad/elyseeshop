import { Link } from 'react-router-dom';
import { brands } from '../data/data';

function Brands() {
  return (
    <div
      className="bg-stone-200 dark:bg-stone-600"
      style={{ direction: 'ltr' }}
    >
      <div className="flex h-44 items-center justify-center bg-[url('/images/heading-bg.jpg')] font-vazirBold text-3xl text-stone-400">
        <p className="text-4xl">برندها</p>
      </div>
      <div className="container grid grid-cols-2 gap-x-5 gap-y-8 py-20 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
        {brands.map((brand, index) => (
          <div
            key={index}
            className="flex flex-col rounded-md bg-white p-4 leading-7 text-stone-700 shadow-lg dark:bg-stone-400 dark:text-white "
          >
            <p className="font-vazirBold">{brand.heading}</p>
            {brand.list.map((item, index) => (
              <Link
                key={index}
                to={`/products/${item}`}
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
