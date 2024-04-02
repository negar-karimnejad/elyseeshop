import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link className="dark:bg-stone-50" to="/">
      <img
        src="../../public/images/light-logo.png"
        className="w-14 h-14"
        alt="logo"
      />
    </Link>
  );
}

export default Logo;
