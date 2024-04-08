import { useEffect, useRef, useState } from 'react';
import { BiShoppingBag } from 'react-icons/bi';
import { Link, useNavigate } from 'react-router-dom';
import useCart from '../../features/cart/useCart';
import Button from '../Button';

function ShoppingCartIcon() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const cartRef = useRef(null);
  const navigate = useNavigate();

  const { totalQty, cart } = useCart();

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
          className={`${cart.length ? 'w-80' : 'w-52'} absolute right-0 top-10 z-10 rounded-md bg-white p-3 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none dark:bg-stone-600`}
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="user-menu-button"
          tabindex="-1"
          onClick={(e) => e.stopPropagation()}
        >
          {cart.map((product) => (
            <Link
              to={`/product/${product.item.name.replaceAll(' ', '-')}`}
              key={product.id}
              className="my-5 flex border-b dark:border-b-stone-700 dark:text-white"
            >
              <img
                src={product.item.image}
                className="h-20 w-20 border object-contain"
                alt={product.item.name}
              />
              <div className="mr-5 flex flex-col gap-2">
                <p className="transition-all hover:text-pink-500">
                  {product.item.name}
                </p>
                <p>تعداد: {product.quantity}</p>
              </div>
            </Link>
          ))}
          <Button className="block" onClick={clickHandler}>
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
