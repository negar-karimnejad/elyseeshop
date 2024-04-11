import React from 'react';
import { BiSearch } from 'react-icons/bi';

function SearchIcon({ toggleSearchModal }) {
  return (
    <button
      type="button"
      onClick={toggleSearchModal}
      className="text-stone-300 transition-all hover:text-stone-400 lg:hidden"
    >
      <BiSearch size={28} />
    </button>
  );
}

export default SearchIcon;
