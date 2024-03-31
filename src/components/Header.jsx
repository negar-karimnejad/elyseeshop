import React from "react";
import { BiSearch } from "react-icons/bi";
import { BsInstagram } from "react-icons/bs";
import { FaPhoneAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

function Header({ scrollPosition }) {
  return (
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
  );
}

export default Header;
