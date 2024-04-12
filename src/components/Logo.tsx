import { Link } from 'react-router-dom';

function Logo() {
  return (
    <Link className="dark:bg-stone-50" to="/">
      <img
        loading="lazy"
        src="/images/light-logo.png"
        className="h-14 w-14"
        alt="logo"
      />
    </Link>
  );
}

export default Logo;
