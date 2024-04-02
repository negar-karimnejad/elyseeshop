import { BiMoon, BiSun } from "react-icons/bi";
import useDarkMode from "../hooks/useDarkMode";

function DarkMode() {
  const { theme, handleToggle } = useDarkMode();

  return (
    <button
      className="fixed bottom-5 left-11 z-50 dark:bg-pink-800/50 bg-stone-800/50 rounded-full p-2.5 text-white hover:text-yellow-200 transition-all hover:bg-stone-800 dark:hover:bg-pink-800"
      onClick={handleToggle}
    >
      <p className="hover:scale-110 transition-all">
        {theme === "dark" ? <BiMoon size={30} /> : <BiSun size={30} />}
      </p>
    </button>
  );
}

export default DarkMode;
