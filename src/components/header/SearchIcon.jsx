import React from "react";
import { BiSearch } from "react-icons/bi";

function SearchIcon() {
  return (
    <button
      type="button"
      className="text-stone-300 lg:hidden hover:text-stone-400 transition-all"
    >
      <BiSearch size={28} />
    </button>
  );
}

export default SearchIcon;
