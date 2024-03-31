import { useEffect, useState } from "react";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { Link } from "react-router-dom";
import Header from "../Header";
import Logo from "../Logo";
import NavDropdownLink from "./NavDropdownLink";
import NavLinks from "./NavLinks";
import SearchIcon from "./SearchIcon";
import ShoppingCartIcon from "./ShoppingCartIcon";
import UserIcon from "./UserIcon";

function Navbar() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState("");

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
      <Header scrollPosition={scrollPosition} />
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
                    <NavDropdownLink title="مراقبت پوست" to="" />
                    <NavDropdownLink title="مراقبت از چشم" to="" />
                    <NavDropdownLink title="پاک کننده های صورت" to="" />
                    <NavDropdownLink title="ابزار جانبی پوست" to="" />
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
                    <NavDropdownLink title="آرایش صورت" to="" />
                    <NavDropdownLink title="آرایش چشم" to="" />
                    <NavDropdownLink title="آرایش ابرو" to="" />
                    <NavDropdownLink title="آرایش لب" to="" />
                    <NavDropdownLink title="آرایش ناخن" to="" />
                    <NavDropdownLink title="ابزار آرایش" to="" />
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
                    <NavDropdownLink title="مراقبت از بدن" to="" />
                    <NavDropdownLink title="دئودورانت و ضد تعریق" to="" />
                    <NavDropdownLink title="اصلاح صورت و بدن" to="" />
                    <NavDropdownLink title="بهداشت شخصی" to="" />
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
                    <NavDropdownLink title="عطر و ادکلن" to="" />
                    <NavDropdownLink title="غلظت" to="" />
                    <NavDropdownLink title="نوع رایحه" to="" />
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
