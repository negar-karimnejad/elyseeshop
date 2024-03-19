import { useState } from 'react';
import Divider from '../Divider';
import Logo from '../Logo';
import MobileMenuIcon from './MobileMenuIcon';
import MobileNavMenu from './MobileNavMenu';
import NavLinks from './NavLinks';
import SearchIcon from './SearchIcon';
import ShoppingCartIcon from './ShoppingCartIcon';
import UserIcon from './UserIcon';
import SearchModal from '../SearchModal';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeSearchModal = () => {
    setIsSearchModalOpen(false);
  };

  return (
    <>
      <nav className="bg-white dark:bg-stone-700">
        <div className="container">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center justify-between gap-4">
              <MobileMenuIcon toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />
              <ShoppingCartIcon />
              <Divider className="h-5 border-r-2 border-stone-100" />
              <UserIcon />
              <Divider className="h-5 border-r-2 border-stone-100 lg:hidden" />
              <SearchIcon
                toggleSearchModal={() => setIsSearchModalOpen(true)}
              />
            </div>
            <NavLinks />
            <Logo />
          </div>
        </div>

        {/* Dropdown menu, show/hide based on menu state. */}
        {isMenuOpen && <MobileNavMenu toggleMenu={toggleMenu} />}
      </nav>
      {isSearchModalOpen && <SearchModal closeSearchModal={closeSearchModal} />}
    </>
  );
}

export default Navbar;
