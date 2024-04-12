import { Link } from 'react-router-dom';

interface ArticleLinkProps {
  link: {
    title: string;
    image: string;
  };
}

const ArticleLink = ({ link }: ArticleLinkProps) => {
  return (
    <Link to={`/products/${link.title}`} className="overflow-hidden rounded-md">
      <img
        loading="lazy"
        className="object-contain transition-all duration-700 hover:scale-110"
        src={link.image}
        alt={link.image}
      />
    </Link>
  );
};

export default ArticleLink;
