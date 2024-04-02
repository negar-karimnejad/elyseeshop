import { Link } from "react-router-dom";

function BannerLink({ image }) {
  return (
    <Link to="" className="rounded-md overflow-hidden">
      <img
        src={image}
        className="hover:scale-110 object-contain transition-all duration-700"
        alt="Banner image"
      />
    </Link>
  );
}

export default BannerLink;
