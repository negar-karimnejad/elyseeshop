import BannerLink from "./BannerLink";

function Banner({ quantity }) {
  return (
    <div
      className={`${
        quantity > 2 ? "lg:grid-cols-4" : ""
      } container grid grid-cols-1 md:grid-cols-2 gap-5 pt-5`}
    >
      {quantity === 4
        ? Array.from({ length: quantity }).map((item, index) => (
            <BannerLink
              key={index}
              image={`./images/banner/0${index + 1}.jpg`}
            />
          ))
        : Array.from({ length: quantity }).map((item, index) => (
            <BannerLink
              key={index}
              image={`./images/banner/0${index + 5}.jpg`}
            />
          ))}
    </div>
  );
}

export default Banner;
