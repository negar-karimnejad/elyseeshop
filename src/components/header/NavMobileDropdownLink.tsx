import React from 'react';
import { Link } from 'react-router-dom';

function NavMobileDropdownLink({ title, to, onClick }) {
  return (
    <li onClick={onClick}>
      <Link
        to={to}
        className="font-vazirBold transition-all hover:text-pink-600"
      >
        {title}
      </Link>
    </li>
  );
}

export default NavMobileDropdownLink;
