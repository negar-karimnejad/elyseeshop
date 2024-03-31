import { useEffect, useState } from "react";
import { BiSearch, BiShoppingBag, BiUser } from "react-icons/bi";
import { BsInstagram } from "react-icons/bs";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { Link } from "react-router-dom";
import Logo from "../Logo";
import NavLinks from "./NavLinks";

function Navbar() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState("");

  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`${scrollPosition ? "shadow" : ""} sticky top-0 z-40 left-0`}
    >
      <div
        className={`bg-stone-100 max-lg:hidden ${
          scrollPosition > 2 ? "hidden" : ""
        }`}
      >
        <div className="container text-stone-400 py-1.5 flex items-center justify-between">
          <div className="flex items-center gap-1">
            0123456789
            <FaPhoneAlt size={13} />
          </div>
          <form className="w-[500px]">
            <label className="bg-white flex rounded-5 px-4 py-1 items-center gap-3 border border-stone-300 rounded-full">
              <BiSearch />
              <input
                className="border-0 outline-none"
                type="text"
                placeholder="جستجو"
                aria-label="Search"
              />
            </label>
          </form>
          <Link
            to="https://www.instagram.com/"
            target="_blank"
            className="hover:text-red-600 transition-all"
          >
            <BsInstagram />
          </Link>
        </div>
      </div>

      <div className="bg-white">
        <div className="mx-auto sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center justify-between gap-4">
              <button
                type="button"
                className="text-stone-700 lg:hidden hover:text-stone-400"
                aria-controls="mobile-menu"
                onClick={() => setIsMenuOpen((prev) => !prev)}
              >
                <svg
                  className={`${
                    isMenuOpen ? "hidden" : "block"
                  } h-10 w-10 transition-all`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
                <svg
                  className={`${
                    isMenuOpen ? "block" : "hidden"
                  } h-10 w-10 transition-all`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
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
              <span className="text-stone-300">|</span>
              <button
                type="button"
                className="text-stone-300 hover:text-stone-400 transition-all"
              >
                <BiUser size={29} />
              </button>
              <span className="text-stone-300 lg:hidden">|</span>
              <button
                type="button"
                className="text-stone-300 lg:hidden hover:text-stone-400 transition-all"
              >
                <BiSearch size={28} />
              </button>
            </div>
            <div className="flex items-center justify-center sm:items-stretch sm:justify-start">
              <NavLinks />
            </div>

            <Logo />
          </div>
        </div>

        {isMenuOpen && (
          <div className="sm:hidden" id="mobile-menu">
            <div className="bg-red-100">
              <div className="relative font-medium border-b border-dashed border-white">
                <div
                  onClick={() =>
                    setActiveMenu((prev) =>
                      prev === "مراقبت-از-پوست" ? "" : "مراقبت-از-پوست"
                    )
                  }
                  className="p-3 flex items-end cursor-pointer"
                >
                  <MdOutlineKeyboardArrowLeft />
                  مراقبت از پوست
                </div>
                {activeMenu === "مراقبت-از-پوست" && (
                  <ul className="list-disc bottom-0 px-10 py-2 right-0 bg-white flex flex-col gap-3">
                    <li className="font-medium">
                      <Link to="" className="hover:text-red-700 transition-all">
                        مراقبت پوست
                      </Link>
                    </li>
                    <li className="font-medium">
                      <Link to="" className="hover:text-red-700 transition-all">
                        مراقبت از چشم
                      </Link>
                    </li>
                    <li className="font-medium">
                      <Link to="" className="hover:text-red-700 transition-all">
                        پاک کننده های صورت
                      </Link>
                    </li>
                    <li className="font-medium">
                      <Link to="" className="hover:text-red-700 transition-all">
                        ابزار جانبی پوست
                      </Link>
                    </li>
                  </ul>
                )}
              </div>
              <div className="relative font-medium border-b border-dashed border-white">
                <div
                  onClick={() =>
                    setActiveMenu((prev) =>
                      prev === "لوازم-آرایشی" ? "" : "لوازم-آرایشی"
                    )
                  }
                  className="p-3 flex items-end cursor-pointer"
                >
                  <MdOutlineKeyboardArrowLeft />
                  لوازم آرایشی
                </div>
                {activeMenu === "لوازم-آرایشی" && (
                  <ul className="list-disc bottom-0 px-10 py-2 right-0 bg-white flex flex-col gap-3">
                    <li className="font-medium">
                      <Link to="" className="hover:text-red-700 transition-all">
                        آرایش صورت
                      </Link>
                    </li>
                    <li className="font-medium">
                      <Link to="" className="hover:text-red-700 transition-all">
                        آرایش چشم
                      </Link>
                    </li>
                    <li className="font-medium">
                      <Link to="" className="hover:text-red-700 transition-all">
                        آرایش ابرو
                      </Link>
                    </li>
                    <li className="font-medium">
                      <Link to="" className="hover:text-red-700 transition-all">
                        آرایش لب
                      </Link>
                    </li>
                    <li className="font-medium">
                      <Link to="" className="hover:text-red-700 transition-all">
                        آرایش ناخن
                      </Link>
                    </li>
                    <li className="font-medium">
                      <Link to="" className="hover:text-red-700 transition-all">
                        ابزار آرایش
                      </Link>
                    </li>
                  </ul>
                )}
              </div>
              <div className="relative font-medium border-b border-dashed border-white">
                <div
                  onClick={() =>
                    setActiveMenu((prev) =>
                      prev === "مراقبت-از-مو" ? "" : "مراقبت-از-مو"
                    )
                  }
                  className="p-3 flex items-end cursor-pointer"
                >
                  <MdOutlineKeyboardArrowLeft />
                  مراقبت از مو
                </div>
                {activeMenu === "مراقبت-از-مو" && (
                  <ul className="list-disc bottom-0 px-10 py-2 right-0 bg-white flex flex-col gap-3">
                    <li className="font-medium">
                      <Link to="" className="hover:text-red-700 transition-all">
                        لوازم رنگ مو
                      </Link>
                    </li>
                    <li className="font-medium">
                      <Link to="" className="hover:text-red-700 transition-all">
                        بهداشت و مراقبت مو
                      </Link>
                    </li>
                    <li className="font-medium">
                      <Link to="" className="hover:text-red-700 transition-all">
                        حالت دهنده مو
                      </Link>
                    </li>
                  </ul>
                )}
              </div>
              <div className="relative font-medium border-b border-dashed border-white">
                <div
                  onClick={() =>
                    setActiveMenu((prev) =>
                      prev === "محصولات-بدن" ? "" : "محصولات-بدن"
                    )
                  }
                  className="p-3 flex items-end cursor-pointer"
                >
                  <MdOutlineKeyboardArrowLeft />
                  محصولات بدن
                </div>
                {activeMenu === "محصولات-بدن" && (
                  <ul className="list-disc bottom-0 px-10 py-2 right-0 bg-white flex flex-col gap-3">
                    <li className="font-medium">
                      <Link to="" className="hover:text-red-700 transition-all">
                        مراقبت از بدن
                      </Link>
                    </li>
                    <li className="font-medium">
                      <Link to="" className="hover:text-red-700 transition-all">
                        دئودورانت و ضد تعریق
                      </Link>
                    </li>
                    <li className="font-medium">
                      <Link to="" className="hover:text-red-700 transition-all">
                        اصلاح صورت و بدن
                      </Link>
                    </li>
                    <li className="font-medium">
                      <Link to="" className="hover:text-red-700 transition-all">
                        بهداشت شخصی
                      </Link>
                    </li>
                  </ul>
                )}
              </div>
              <div className="relative font-medium border-b border-dashed border-white">
                <div
                  onClick={() =>
                    setActiveMenu((prev) =>
                      prev === "عطر-و-ادکلن" ? "" : "عطر-و-ادکلن"
                    )
                  }
                  className="p-3 flex items-end cursor-pointer"
                >
                  <MdOutlineKeyboardArrowLeft />
                  عطر و ادکلن
                </div>
                {activeMenu === "عطر-و-ادکلن" && (
                  <ul className="list-disc bottom-0 px-10 py-2 right-0 bg-white flex flex-col gap-3">
                    <li className="font-medium">
                      <Link to="" className="hover:text-red-700 transition-all">
                        عطر و ادکلن
                      </Link>
                    </li>
                    <li className="font-medium">
                      <Link to="" className="hover:text-red-700 transition-all">
                        غلظت
                      </Link>
                    </li>
                    <li className="font-medium">
                      <Link to="" className="hover:text-red-700 transition-all">
                        نوع رایحه
                      </Link>
                    </li>
                  </ul>
                )}
              </div>

              <Link
                to=""
                className="block px-7 py-2 font-medium border-b border-dashed border-white"
              >
                برندها
              </Link>
              <Link
                to=""
                className="block px-7 py-2 font-medium border-b border-dashed border-white"
              >
                وبلاگ
              </Link>
              <Link
                to=""
                className="block px-7 py-2 font-medium border-b border-dashed border-white"
              >
                مشاوره رایگان
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
