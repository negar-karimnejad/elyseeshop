import { useState } from "react";
import { Link } from "react-router-dom";
import NavDropdownList from "./NavDropdownList";

function NavLinks() {
  const [showDropdown, setShowDropdown] = useState("");

  return (
    <div className="hidden lg:block text-stone-600">
      <div className="flex gap-6">
        <div
          onMouseEnter={() => setShowDropdown("مراقبت از پوست")}
          onMouseLeave={() => setShowDropdown("")}
          className="transition-all hover:border-b border-stone-400 relative"
        >
          <Link to="" className="font-yekanB" aria-current="page">
            مراقبت از پوست
          </Link>
          {showDropdown === "مراقبت از پوست" && (
            <NavDropdownList id="مراقبت از پوست" />
          )}
        </div>
        <div
          onMouseEnter={() => setShowDropdown("لوازم آرایشی")}
          onMouseLeave={() => setShowDropdown("")}
          className="transition-all hover:border-b border-stone-400 relative"
        >
          <Link to="" className="font-yekanB" aria-current="page">
            لوازم آرایشی
          </Link>
          {showDropdown === "لوازم آرایشی" && (
            <NavDropdownList id="لوازم آرایشی" />
          )}
        </div>
        <div
          onMouseEnter={() => setShowDropdown("مراقبت از مو")}
          onMouseLeave={() => setShowDropdown("")}
          className="transition-all hover:border-b border-stone-400 relative"
        >
          <Link to="" className="font-yekanB" aria-current="page">
            مراقبت از مو
          </Link>
          {showDropdown === "مراقبت از مو" && (
            <NavDropdownList id="مراقبت از مو" />
          )}
        </div>
        <div
          onMouseEnter={() => setShowDropdown("محصولات بدن")}
          onMouseLeave={() => setShowDropdown("")}
          className="transition-all hover:border-b border-stone-400 relative"
        >
          <Link to="" className="font-yekanB" aria-current="page">
            محصولات بدن
          </Link>
          {showDropdown === "محصولات بدن" && (
            <NavDropdownList id="محصولات بدن" />
          )}
        </div>
        <div
          onMouseEnter={() => setShowDropdown("عطر و ادکلن")}
          onMouseLeave={() => setShowDropdown("")}
          className="transition-all hover:border-b border-stone-400 relative"
        >
          <Link to="" className="font-yekanB" aria-current="page">
            عطر و ادکلن
          </Link>
          {showDropdown === "عطر و ادکلن" && (
            <NavDropdownList id="عطر و ادکلن" />
          )}
        </div>
        <Link
          to=""
          className="font-yekanB hover:border-b border-stone-400"
          aria-current="page"
        >
          برندها
        </Link>
        <Link
          to=""
          className="font-yekanB hover:border-b border-stone-400"
          aria-current="page"
        >
          وبلاگ
        </Link>
        <Link
          to=""
          className="font-yekanB hover:border-b border-stone-400"
          aria-current="page"
        >
          مشاوره رایگان
        </Link>
      </div>
    </div>
  );
}

export default NavLinks;
