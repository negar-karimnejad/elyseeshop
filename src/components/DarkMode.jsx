import React from "react";
import useDarkMode from "../hooks/useDarkMode";
import { BiMoon, BiSun } from "react-icons/bi";

function DarkMode() {
  const { theme, handleToggle } = useDarkMode();

  return (
    <button
      className="fixed bottom-5 left-11 z-50 bg-stone-800/50 rounded-full p-2.5 text-white hover:text-yellow-400 transition-all hover:bg-stone-800/75 dark:bg-white"
      onClick={handleToggle}
    >
      <p className="hover:scale-110 transition-all">
        {theme === "dark" ? <BiMoon size={30} /> : <BiSun size={30} />}
      </p>
    </button>
  );
}

export default DarkMode;
