import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link className="navbar-brand" to="/">
      <img src="./images/logo.png" className="w-16 h-16" alt="" />
    </Link>
  );
}

export default Logo;
