import React from "react";
import { Link } from "react-router-dom";

function NavMobileDropdownLink({ title, to }) {
  return (
    <li>
      <Link to={to} className="font-yekanB hover:text-pink-600 transition-all">
        {title}
      </Link>
    </li>
  );
}

export default NavMobileDropdownLink;
