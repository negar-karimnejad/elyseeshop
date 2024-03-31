import React, { useState } from "react";
import { BiShoppingBag } from "react-icons/bi";
import { Link } from "react-router-dom";

function ShoppingCartIcon() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <button
      type="button"
      className="relative text-stone-300 mr-5 hover:text-stone-400 transition-all"
      onClick={() => setIsCartOpen((prev) => !prev)}
    >
      <BiShoppingBag size={28} />
      {isCartOpen && (
        <div
          className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-3 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="user-menu-button"
          tabindex="-1"
        >
          <Link
            to="/cart"
            className="block w-fit rounded-full mx-auto px-3 py-2 text-sm text-white bg-cyan-800"
            role="menuitem"
            tabindex="-1"
            id="user-menu-item-0"
          >
            مشاهده سبد خرید
          </Link>
        </div>
      )}
      <div className="absolute font-medium top-0 -right-2 bg-black rounded-full h-4 w-4 text-sm flex items-center justify-center ">
        3
      </div>
    </button>
  );
}

export default ShoppingCartIcon;
