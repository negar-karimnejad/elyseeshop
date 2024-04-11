import { BiMoon, BiSun } from 'react-icons/bi';
import useDarkMode from '../hooks/useDarkMode';

function DarkMode() {
  const { theme, handleToggle } = useDarkMode();

  return (
    <button
      className="fixed bottom-5 left-11 z-50 rounded-full bg-stone-800/50 p-2.5 text-white transition-all hover:bg-stone-800 hover:text-yellow-200 dark:bg-pink-800/50 dark:hover:bg-pink-800"
      onClick={handleToggle}
    >
      <p className="transition-all hover:scale-110">
        {theme === 'dark' ? <BiMoon size={30} /> : <BiSun size={30} />}
      </p>
    </button>
  );
}

export default DarkMode;
