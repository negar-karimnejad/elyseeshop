import { Link } from 'react-router-dom';

interface BannerLinkProps {
  item: {
    to: string;
    image: string;
  };
  style: string;
}

function BannerLink({ item, style }: BannerLinkProps) {
  return (
    <Link to={item?.to} className="overflow-hidden rounded-md">
      <img
        loading="lazy"
        src={item?.image}
        className={`object-cover transition-all duration-700 hover:scale-110 ${style ? style : ''} `}
        alt="Banner image"
      />
    </Link>
  );
}

export default BannerLink;
