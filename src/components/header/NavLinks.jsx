import { useState } from "react";
import { Link } from "react-router-dom";
import NavDropdownList from "./NavDropdownList";

const linkStyles = "font-yekanB hover:border-b border-stone-400";

const links = [
  "مراقبت از پوست",
  "لوازم آرایشی",
  "مراقبت از مو",
  "محصولات بدن",
  "عطر و ادکلن",
];

function NavLinks() {
  const [showDropdown, setShowDropdown] = useState("");

  return (
    <div className="hidden lg:block text-stone-600">
      <div className="flex gap-6">
        {links.map((link) => (
          <div
            key={link}
            onMouseEnter={() => setShowDropdown(link)}
            onMouseLeave={() => setShowDropdown("")}
            className="transition-all hover:border-b border-stone-400 relative"
          >
            <Link to="" className="font-yekanB" aria-current="page">
              {link}
            </Link>
            {showDropdown === link && <NavDropdownList id={link} />}
          </div>
        ))}
        <Link to="" className={linkStyles} aria-current="page">
          برندها
        </Link>
        <Link to="" className={linkStyles} aria-current="page">
          وبلاگ
        </Link>
        <Link to="" className={linkStyles} aria-current="page">
          مشاوره رایگان
        </Link>
      </div>
    </div>
  );
}

export default NavLinks;
