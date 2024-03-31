import { Link } from "react-router-dom";

const BannerLink = ({ image }) => {
  return (
    <Link to="" className="rounded-md overflow-hidden">
      <img
        src={image}
        className="hover:scale-110 object-contain transition-all duration-700"
        alt="Banner image"
      />
    </Link>
  );
};

function Banner() {
  return (
    <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 pt-5">
      <BannerLink image="./images/banner/01.jpg" />
      <BannerLink image="./images/banner/02.jpg" />
      <BannerLink image="./images/banner/03.jpg" />
      <BannerLink image="./images/banner/04.jpg" />
    </div>
  );
}

export default Banner;
