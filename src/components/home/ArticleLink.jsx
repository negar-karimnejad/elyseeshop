import { Link } from "react-router-dom";

const ArticleLink = ({ image }) => {
  return (
    <Link to="" className="rounded-md overflow-hidden">
      <img
        className="hover:scale-110 object-contain transition-all duration-700"
        src={image}
        alt=""
      />
    </Link>
  );
};

export default ArticleLink;
