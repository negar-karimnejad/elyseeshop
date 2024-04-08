import { Link } from 'react-router-dom';

function BannerLink({ item, style }) {
  return (
    <Link to={item?.to} className="overflow-hidden rounded-md">
      <img
        src={item?.image}
        className={`object-cover transition-all duration-700 hover:scale-110 ${style ? style : ''} `}
        alt="Banner image"
      />
    </Link>
  );
}

export default BannerLink;
