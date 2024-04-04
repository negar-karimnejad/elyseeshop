import React from 'react';
import { Link } from 'react-router-dom';

function StyledProductsUl({ heading, list }) {
  return (
    <ul className="flex list-disc flex-col gap-y-2 text-stone-500">
      <h4 className="mb-3 border-b py-1 font-yekanB text-stone-700">
        {heading}
      </h4>
      {list.map((item) => (
        <li key={item}>
          <Link
            className={`transition-all hover:text-pink-400 ${
              heading === 'برند' ? 'text-sm ' : 'font-yekanB'
            }`}
            to=""
          >
            {item}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default StyledProductsUl;
