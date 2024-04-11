import { BsInstagram } from 'react-icons/bs';
import { Link } from 'react-router-dom';

function Instagram() {
  return (
    <Link
      to="https://www.instagram.com/"
      target="_blank"
      className="text-stone-500 transition-all hover:text-pink-600 dark:text-stone-300 dark:hover:text-white"
    >
      <BsInstagram />
    </Link>
  );
}

export default Instagram;
