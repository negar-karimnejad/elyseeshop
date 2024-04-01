import { Link } from "react-router-dom";

function Articles() {
  return (
    <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 pt-5">
      <Link to="" className="rounded-md overflow-hidden">
        <img
          className="hover:scale-110 object-contain transition-all duration-700"
          src="./images/articles/01.jpg"
          alt=""
        />
      </Link>
      <Link to="" className="rounded-md overflow-hidden">
        <img
          className="hover:scale-110 object-contain transition-all duration-700"
          src="./images/articles/02.jpg"
          alt=""
        />
      </Link>
      <Link to="" className="rounded-md overflow-hidden">
        <img
          className="hover:scale-110 object-contain transition-all duration-700"
          src="./images/articles/03.jpg"
          alt=""
        />
      </Link>
      <Link to="" className="rounded-md overflow-hidden">
        <img
          className="hover:scale-110 object-contain transition-all duration-700"
          src="./images/articles/04.jpg"
          alt=""
        />
      </Link>
    </div>
  );
}

export default Articles;
