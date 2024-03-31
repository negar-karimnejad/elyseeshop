import React from "react";
import { Link } from "react-router-dom";
import NavUl from "./NavUl";
import NavDropdownLink from "./NavMobileDropdownLink";

function NavLinks() {
  return (
    <div className="hidden lg:block">
      <div className="flex gap-6 text-sm">
        <div className="relative">
          <Link to="" className="font-yekanB" aria-current="page">
            مراقبت از پوست
          </Link>
          <NavDropdownLink />
          <ul>
            <li>
              <Link
                to=""
                className="font-yekanB hover:text-red-700 transition-all"
              >
                مراقبت پوست
              </Link>
            </li>
          </ul>
        </div>
        <Link to="" className="font-yekanB" aria-current="page">
          لوازم آرایشی
        </Link>
        <Link to="" className="font-yekanB" aria-current="page">
          مراقبت از مو
        </Link>
        <Link to="" className="font-yekanB" aria-current="page">
          محصولات بدن
        </Link>
        <Link to="" className="font-yekanB" aria-current="page">
          عطر و ادکلن
        </Link>
        <Link to="" className="font-yekanB" aria-current="page">
          برندها
        </Link>
        <Link to="" className="font-yekanB" aria-current="page">
          وبلاگ
        </Link>
        <Link to="" className="font-yekanB" aria-current="page">
          مشاوره رایگان
        </Link>
      </div>
    </div>
  );
}

export default NavLinks;
