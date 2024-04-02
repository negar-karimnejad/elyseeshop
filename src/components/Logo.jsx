import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link className="navbar-brand" to="/">
      <img
        src="../../public/images/dark-logo.png"
        className="w-14 h-14 bg-pink-950 rounded-full dark:bg-transparent"
        alt=""
      />
    </Link>
  );
}

export default Logo;
