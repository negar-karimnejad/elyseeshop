import { RefObject, useRef } from 'react';
import { Link } from 'react-router-dom';
import { navMobileMenu } from '../../data/data';
import NavMobileDropdownLink from './NavMobileDropdownLink';
import NavUl from './NavUl';

interface MobileNavMenuProps {
  toggleMenu: () => void;
}
function MobileNavMenu({ toggleMenu }: MobileNavMenuProps) {
  const ref: RefObject<HTMLDivElement> = useRef(null);
  
  return (
    <>
      <div className="fixed inset-0 z-0" onClick={toggleMenu}></div>
      <div
        ref={ref}
        className="z-50 max-h-[500px] overflow-y-auto lg:hidden"
        id="mobile-menu"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative bg-pink-100 dark:bg-stone-600 dark:text-stone-100">
          {navMobileMenu.map((menu) => (
            <NavUl title={menu.id} key={menu.id}>
              {menu.list.map((item, index) => (
                <NavMobileDropdownLink
                  title={item}
                  to={`/products/${item.replaceAll(' ', '-')}`}
                  onClick={toggleMenu}
                  key={index}
                />
              ))}
            </NavUl>
          ))}

          <Link
            to="brands"
            onClick={toggleMenu}
            className="block border-b border-dashed border-white px-7 py-2 text-stone-950 dark:text-stone-200"
          >
            برندها
          </Link>
          <Link
            to="blog"
            onClick={toggleMenu}
            className="block border-b border-dashed border-white px-7 py-2 text-stone-950 dark:text-stone-200"
          >
            وبلاگ
          </Link>
          <Link
            to="advice"
            onClick={toggleMenu}
            className="block border-b border-dashed border-white px-7 py-2 text-stone-950 dark:text-stone-200"
          >
            مشاوره رایگان
          </Link>
        </div>
      </div>
    </>
  );
}

export default MobileNavMenu;
