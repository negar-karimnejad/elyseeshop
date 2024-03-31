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
      className={`bg-stone-100 max-lg:hidden ${
        scrollPosition > 2 ? "hidden" : ""
      }`}
    >
      <div className="container text-stone-400 py-1.5 flex items-center justify-between">
        <div className="flex items-center gap-1">
          0123456789
          <FaPhoneAlt size={13} />
        </div>
        <form className="w-[500px]" onSubmit={submitHandler}>
          <label className="bg-white flex rounded-5 px-4 py-1 items-center gap-3 border border-stone-300 rounded-full">
            <BiSearch />
            <input
              className="border-0 outline-none"
              type="text"
              placeholder="جستجو"
              aria-label="Search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </label>
        </form>
        <Instagram />
      </div>
    </div>
  );
}

export default TopNav;
