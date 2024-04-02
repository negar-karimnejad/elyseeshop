import { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { FaPhoneAlt } from "react-icons/fa";
import Instagram from "../Instagram";

function TopNav({ scrollPosition }) {
  const [query, setQuery] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div
      className={`bg-stone-100 max-lg:hidden dark:bg-sky-950 ${
        scrollPosition > 2 ? "hidden" : ""
      }`}
    >
      <div className="container text-stone-400 dark:text-stone-200 py-1.5 flex items-center justify-between">
        <div className="flex items-center gap-1">
          0123456789
          <FaPhoneAlt size={13} />
        </div>
        <form className="w-[500px]" onSubmit={submitHandler}>
          <label className="bg-white dark:bg-sky-950 flex rounded-5 px-4 py-1 items-center gap-3 border border-stone-300 rounded-full">
            <button
              type="submit"
              className="hover:text-pink-500 dark:hover:text-white cursor-pointer"
            >
              <BiSearch size={17} />
            </button>
            <input
              className="placeholder:dark:text-stone-200 border-0 outline-none bg-white dark:bg-sky-950"
              type="text"
              placeholder="جستجو"
              aria-label="Search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              required
            />
          </label>
        </form>
        <Instagram />
      </div>
    </div>
  );
}

export default TopNav;
