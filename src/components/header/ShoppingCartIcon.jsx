import { useRef, useState } from "react";
import { BiShoppingBag } from "react-icons/bi";
import { Link } from "react-router-dom";

function ShoppingCartIcon() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const cartRef = useRef(null);

  return (
    <div className="relative">
      {isCartOpen && (
        <div
          onClick={() => setIsCartOpen(false)}
          className="fixed inset-0 z-0"
        ></div>
      )}
      <button
        type="button"
        className="relative text-stone-300 mr-5 hover:text-stone-400 transition-all"
        onClick={() => setIsCartOpen((prev) => !prev)}
      >
        <BiShoppingBag size={28} />
        <div className="absolute font-medium -top-1 -right-3 bg-black dark:bg-pink-600 dark:text-white rounded-full h-5 w-5 text-sm flex items-center justify-center">
          3
        </div>
      </button>
      {isCartOpen && (
        <div
          ref={cartRef}
          className="absolute dark:bg-stone-600 right-0 top-8 z-10 mt-2 w-48 rounded-md bg-white py-3 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="user-menu-button"
          tabindex="-1"
          onClick={(e) => e.stopPropagation()}
        >
          <Link
            to="/cart"
            className="block w-fit rounded-full mx-auto px-3 py-2 text-sm text-white bg-pink-600 hover:bg-pink-500 transition-all"
            role="menuitem"
            tabindex="-1"
            id="user-menu-item-0"
          >
            مشاهده سبد خرید
          </Link>
        </div>
      )}
    </div>
  );
}

export default ShoppingCartIcon;
