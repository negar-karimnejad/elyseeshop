import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { RiArrowDropLeftLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';

function StyledProductsUl({
  toggleExpansion,
  heading,
  list,
  openedHeading,
  onClick,
}) {
  return (
    <div className="text-stone-500 dark:text-white max-md:relative max-md:w-full">
      <h4
        onClick={onClick}
        className="flex cursor-pointer items-center justify-between gap-2 border-b py-1 pr-3 font-yekanB text-stone-700 dark:text-white max-md:border max-md:px-4 md:relative md:mb-3"
      >
        <MdOutlineKeyboardArrowDown
          className={`md:hidden ${openedHeading === heading ? 'rotate-180 transform' : ''}`}
        />
        <RiArrowDropLeftLine
          className={`${heading !== 'برند' ? 'block' : 'hidden'} absolute -right-3 max-md:hidden`}
        />
        {heading}
      </h4>
      <ul className="hidden list-disc flex-col gap-y-2 pr-3 md:flex">
        {list.map((item) => (
          <li key={item}>
            <Link
              className={`transition-all hover:text-pink-400 ${
                heading === 'برند' ? 'text-sm ' : 'font-yekanB'
              }`}
              to={`/products/${item?.replaceAll(' ', '-')}`}
            >
              {item}
            </Link>
          </li>
        ))}
      </ul>

      {openedHeading === heading && (
        <div className="absolute right-0 z-40 flex h-52 w-full flex-col overflow-y-auto border bg-white p-2 px-5 text-left shadow-lg dark:bg-stone-500 md:hidden">
          {list.map((item) => (
            <Link
              key={item}
              onClick={toggleExpansion}
              className={`p-1 transition-all hover:bg-pink-400 hover:text-white ${
                heading === 'برند' ? 'text-sm ' : 'font-yekanB'
              }`}
              to={`/products/${item.replaceAll(' ', '-')}`}
            >
              {item}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default StyledProductsUl;
