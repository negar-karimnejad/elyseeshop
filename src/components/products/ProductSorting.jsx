import { useState } from 'react';
import { Link } from 'react-router-dom';
const ProductsSorting = ['ارزان ترین', 'گران ترین', 'جدید ترین'];

function ProductSorting({ sortChangeHandler }) {
  const [productSort, setProductSort] = useState('');

  return (
    <div className="flex items-center gap-2 text-lg">
      <h4 className="text-stone-700 dark:text-stone-100">مرتب سازی براساس:</h4>
      {ProductsSorting.map((sort, index) => (
        <Link
          key={index}
          to={`${sort.replaceAll(' ', '-')}`}
          className={`rounded-full border p-1 px-3 font-vazirBold text-base  transition-all hover:border-pink-300 hover:text-pink-400   dark:hover:text-pink-500 ${productSort === sort ? 'border-pink-500 text-pink-500' : 'border-stone-300 text-stone-500 dark:text-stone-300'}`}
          onClick={() => {
            sortChangeHandler(sort);
            setProductSort(sort);
          }}
        >
          {sort}
        </Link>
      ))}
    </div>
  );
}

export default ProductSorting;
