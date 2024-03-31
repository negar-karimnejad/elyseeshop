import { useEffect, useState } from "react";
import Header from "../Header";
import Logo from "../Logo";
import MobileMenuIcon from "./MobileMenuIcon";
import MobileNavMenu from "./MobileNavMenu";
import NavLinks from "./NavLinks";
import SearchIcon from "./SearchIcon";
import ShoppingCartIcon from "./ShoppingCartIcon";
import UserIcon from "./UserIcon";

function Navbar() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };
  return (
    <nav
      className={`${scrollPosition ? "shadow" : ""} sticky top-0 z-40 left-0`}
    >
      <Header scrollPosition={scrollPosition} />
      <div className="bg-white">
        <div className="mx-auto sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center justify-between gap-4">
              <MobileMenuIcon toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />
              <ShoppingCartIcon />
              <span className="text-stone-300">|</span>
              <UserIcon />
              <span className="text-stone-300 lg:hidden">|</span>
              <SearchIcon />
            </div>
            <div className="flex items-center justify-center sm:items-stretch sm:justify-start">
              <NavLinks />
            </div>
            <Logo />
          </div>
        </div>
        {/* Dropdown menu, show/hide based on menu state. */}
        {isMenuOpen && <MobileNavMenu />}
      </div>
    </nav>
  );
}

export default Navbar;
