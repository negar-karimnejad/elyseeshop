import { Link } from 'react-router-dom';

const ArticleLink = ({ link }) => {
  return (
    <Link to={`/products/${link.title}`} className="overflow-hidden rounded-md">
      <img
        className="object-contain transition-all duration-700 hover:scale-110"
        src={link.image}
        alt={link.image}
      />
    </Link>
  );
};

export default ArticleLink;
