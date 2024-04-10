import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { navMobileMenu } from '../../data/data';
import NavMobileDropdownLink from './NavMobileDropdownLink';
import NavUl from './NavUl';

function MobileNavMenu({ toggleMenu }) {
  const navigate = useNavigate();
  const ref = useRef();
  return (
    <>
      <div className="fixed inset-0 z-0" onClick={()=>toggleMenu}></div>
      <div
        ref={ref}
        className="max-h-[500px] overflow-y-auto lg:hidden"
        // id="mobile-menu"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="bg-pink-100 dark:bg-stone-600 dark:text-stone-100">
          {navMobileMenu.map((menu) => (
            <NavUl title={menu.id} key={menu.id}>
              {menu.list.map((item) => (
                <NavMobileDropdownLink
                  title={item}
                  to={`/products/${item.replaceAll(' ', '-')}`}
                  onClick={toggleMenu}
                />
              ))}
            </NavUl>
          ))}

          <div
            onClick={() => navigate('brands')}
            className="block border-b border-dashed border-white px-7 py-2 text-stone-950 dark:text-stone-200"
          >
            برندها
          </div>
          <div
            onClick={() => navigate('blog')}
            className="block border-b border-dashed border-white px-7 py-2 text-stone-950 dark:text-stone-200"
          >
            وبلاگ
          </div>
          <div
            onClick={() => navigate('advice')}
            className="block border-b border-dashed border-white px-7 py-2 text-stone-950 dark:text-stone-200"
          >
            مشاوره رایگان
          </div>
        </div>
      </div>
    </>
  );
}

export default MobileNavMenu;
