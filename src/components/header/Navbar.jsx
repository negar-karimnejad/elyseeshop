import { useState } from "react";
import Logo from "../Logo";
import MobileMenuIcon from "./MobileMenuIcon";
import MobileNavMenu from "./MobileNavMenu";
import NavLinks from "./NavLinks";
import SearchIcon from "./SearchIcon";
import ShoppingCartIcon from "./ShoppingCartIcon";
import UserIcon from "./UserIcon";
import Divider from "../Divider";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };
  return (
    <nav className="bg-white dark:bg-sky-900">
      <div className="mx-auto sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center justify-between gap-4">
            <MobileMenuIcon toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />
            <ShoppingCartIcon />
            <Divider className="border-r-2 h-5 border-stone-100" />
            <UserIcon />
            <Divider className="border-r-2 h-5 border-stone-100 lg:hidden" />
            <SearchIcon />
          </div>
          <NavLinks />
          <Logo />
        </div>
      </div>

      {/* Dropdown menu, show/hide based on menu state. */}
      {isMenuOpen && <MobileNavMenu />}
    </nav>
  );
}

export default Navbar;
