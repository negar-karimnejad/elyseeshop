import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { navMobileMenu } from '../../data/data';
import NavMobileDropdownLink from './NavMobileDropdownLink';
import NavUl from './NavUl';

const linkStyles =
  'block px-7 font-vazirBold py-2 border-b border-dashed border-white';

function MobileNavMenu({ toggleMenu }) {
  const ref = useRef();
  return (
    <>
      <div className="fixed inset-0 z-0" onClick={toggleMenu}></div>
      <div
        ref={ref}
        className="lg:hidden"
        id="mobile-menu"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="bg-pink-100 dark:bg-stone-600 dark:text-stone-100">
          {navMobileMenu.map((menu) => (
            <NavUl title={menu.id} key={menu.id}>
              {menu.list.map((item) => (
                <NavMobileDropdownLink title={item} to="" />
              ))}
            </NavUl>
          ))}
          <Link to="" className={linkStyles}>
            برندها
          </Link>
          <Link to="" className={linkStyles}>
            وبلاگ
          </Link>
          <Link to="" className={linkStyles}>
            مشاوره رایگان
          </Link>
        </div>
      </div>
    </>
  );
}

export default MobileNavMenu;
