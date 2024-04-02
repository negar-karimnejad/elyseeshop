
function MobileMenuIcon({ isMenuOpen, toggleMenu }) {
  return (
    <button
      type="button"
      className="text-stone-700 lg:hidden hover:text-stone-400"
      aria-controls="mobile-menu"
      onClick={toggleMenu}
    >
      <svg
        className={`${
          isMenuOpen ? "hidden" : "block"
        } h-10 w-10 transition-all`}
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
        />
      </svg>
      <svg
        className={`${
          isMenuOpen ? "block" : "hidden"
        } h-10 w-10 transition-all`}
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </button>
  );
}

export default MobileMenuIcon;
