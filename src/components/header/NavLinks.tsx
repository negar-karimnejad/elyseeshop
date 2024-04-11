import { useState } from 'react';
import { Link } from 'react-router-dom';
import NavDropdownList from './NavDropdownList';

const linkStyles = 'h-5 hover:border-b border-stone-400';

const links = [
  'مراقبت از پوست',
  'لوازم آرایشی',
  'مراقبت از مو',
  'محصولات بدن',
  'عطر و ادکلن',
];

function NavLinks() {
  const [showDropdown, setShowDropdown] = useState('');

  return (
    <div className="hidden text-stone-600 dark:text-stone-100 lg:block">
      <div className="flex gap-6">
        {links.map((link) => (
          <div
            key={link}
            onMouseEnter={() => setShowDropdown(link)}
            onMouseLeave={() => setShowDropdown('')}
            className="relative h-5 border-stone-400 transition-all hover:border-b"
          >
            <Link
              to={`/products/${link.replaceAll(' ', '-')}`}
              aria-current="page"
            >
              {link}
            </Link>
            {showDropdown === link && <NavDropdownList id={link} />}
          </div>
        ))}
        <Link to="brands" className={linkStyles} aria-current="page">
          برندها
        </Link>
        <Link to="blog" className={linkStyles} aria-current="page">
          وبلاگ
        </Link>
        <Link to="advice" className={linkStyles} aria-current="page">
          مشاوره رایگان
        </Link>
      </div>
    </div>
  );
}

export default NavLinks;
