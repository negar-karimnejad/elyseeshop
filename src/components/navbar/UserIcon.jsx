import React from "react";
import { BiUser } from "react-icons/bi";

function UserIcon() {
  return (
    <button
      type="button"
      className="text-stone-300 hover:text-stone-400 transition-all"
    >
      <BiUser size={29} />
    </button>
  );
}

export default UserIcon;
