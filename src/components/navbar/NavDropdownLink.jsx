import React from "react";
import { Link } from "react-router-dom";

function NavDropdownLink({ title, to }) {
  return (
    <li className="font-medium">
      <Link to={to} className="hover:text-red-700 transition-all">
        {title}
      </Link>
    </li>
  );
}

export default NavDropdownLink;
