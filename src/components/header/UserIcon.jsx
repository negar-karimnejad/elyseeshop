import { useEffect, useRef, useState } from 'react';
import { BiUser } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import Swiper from 'swiper';

function UserIcon() {
  const [isShowUserModal, setIsShowUserModal] = useState(false);
  const userModalRef = useRef(null);
  const swiperRef = useRef(null);

  useEffect(() => {
    const swiper = new Swiper('.heroSwiper', {});

    swiperRef.current = swiper;

    return () => {
      swiper.destroy();
    };
  }, []);

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        userModalRef.current &&
        !userModalRef.current.contains(event.target)
      ) {
        setIsShowUserModal(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const swiper = swiperRef.current;

    function handleSlideClick() {
      setIsShowUserModal(false);
    }

    if (swiper) {
      swiper.on('click', handleSlideClick);
    }

    return () => {
      if (swiper) {
        swiper.off('click', handleSlideClick);
      }
    };
  }, []);

  return (
    <div className="relative">
      <button
        type="button"
        className="text-stone-300 transition-all hover:text-stone-400"
        onClick={() => setIsShowUserModal((prev) => !prev)}
      >
        <BiUser size={29} />
      </button>
      {isShowUserModal && (
        <div
          ref={userModalRef}
          className="absolute right-0 top-8 rounded-md border bg-white px-10 py-5 text-stone-500 shadow-lg dark:bg-stone-600"
        >
          <ul className="flex flex-col gap-3">
            <li>
              <Link
                to=""
                className="whitespace-nowrap transition-all hover:text-pink-400"
              >
                داشبورد
              </Link>
            </li>
            <li>
              <Link
                to=""
                className="whitespace-nowrap transition-all hover:text-pink-400"
              >
                سفارش ها
              </Link>
            </li>
            <li>
              <Link
                to=""
                className="whitespace-nowrap transition-all hover:text-pink-400"
              >
                مشخصات فردی
              </Link>
            </li>
            <li>
              <Link
                to=""
                className="whitespace-nowrap transition-all hover:text-pink-400"
              >
                مشاوره های شما
              </Link>
            </li>
            <li>
              <Link
                to=""
                className="whitespace-nowrap transition-all hover:text-pink-400"
              >
                خروج
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default UserIcon;
