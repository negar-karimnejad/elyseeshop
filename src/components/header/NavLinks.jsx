import React from "react";
import { Link } from "react-router-dom";

function NavLinks() {
  return (
    <div className="hidden lg:block">
      <div className="flex gap-6">
        <Link to="" className="text-sm font-medium" aria-current="page">
          مراقبت از پوست
        </Link>
        <Link to="" className="text-sm font-medium" aria-current="page">
          لوازم آرایشی
        </Link>
        <Link to="" className="text-sm font-medium" aria-current="page">
          مراقبت از مو
        </Link>
        <Link to="" className="text-sm font-medium" aria-current="page">
          محصولات بدن
        </Link>
        <Link to="" className="text-sm font-medium" aria-current="page">
          عطر و ادکلن
        </Link>
        <Link to="" className="text-sm font-medium" aria-current="page">
          برندها
        </Link>
        <Link to="" className="text-sm font-medium" aria-current="page">
          وبلاگ
        </Link>
        <Link to="" className="text-sm font-medium" aria-current="page">
          مشاوره رایگان
        </Link>
      </div>
    </div>
  );
}

export default NavLinks;
