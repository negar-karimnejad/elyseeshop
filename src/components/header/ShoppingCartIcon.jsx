import { useEffect, useRef, useState } from 'react';
import { BiShoppingBag } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';
import useCart from '../../features/cart/useCart';
import Button from '../Button';

function ShoppingCartIcon() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const cartRef = useRef(null);
  const navigate = useNavigate();

  const { totalQty } = useCart();

  useEffect(() => {
    function handleClickOutside(event) {
      if (cartRef.current && !cartRef.current.contains(event.target)) {
        setIsCartOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const clickHandler = () => {
    navigate('/cart');
    setIsCartOpen(false);
  };

  return (
    <div className="relative">
      <button
        type="button"
        className="relative mr-5 text-stone-300 transition-all hover:text-stone-400"
        onClick={() => setIsCartOpen((prev) => !prev)}
      >
        <BiShoppingBag size={28} />
        <div className="absolute -right-3 -top-1 flex h-6 w-6 items-center justify-center rounded-full bg-black pt-0.5 font-BKoodak text-lg dark:bg-pink-600 dark:text-white">
          {totalQty}
        </div>
      </button>
      {isCartOpen && (
        <div
          ref={cartRef}
          className="absolute right-0 top-8 z-10 mt-2 w-48 rounded-md bg-white py-3 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none dark:bg-stone-600"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="user-menu-button"
          tabindex="-1"
          onClick={(e) => e.stopPropagation()}
        >
          <Button className="mx-auto block" onClick={clickHandler}>
            مشاهده سبد خرید
          </Button>
        </div>
      )}
      {isCartOpen && (
        <div
          onClick={() => setIsCartOpen(false)}
          className="fixed inset-0 z-0"
        ></div>
      )}
    </div>
  );
}

export default ShoppingCartIcon;
