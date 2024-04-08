import BannerLink from './BannerLink';

const bannerDate = [
  { id: 1, image: './images/banner/01.jpg', to: '/products/بادی-اسپلش' },
  { id: 2, image: './images/banner/02.jpg', to: 'https://www.instagram.com/' },
  { id: 3, image: './images/banner/03.jpg', to: '/products/iunik' },
  { id: 4, image: './images/banner/04.jpg', to: '/products/شامپو' },
  { id: 5, image: './images/banner/05.jpg', to: '/products/Garnier' },
  { id: 6, image: './images/banner/06.jpg', to: '/products/Dove' },
];
function Banner({ quantity }) {
  return (
    <div
      className={`${
        quantity > 2 ? 'lg:grid-cols-4' : ''
      } container grid grid-cols-1 gap-5 pt-5 md:grid-cols-2`}
    >
      {quantity === 4
        ? bannerDate
            .slice(0, 4)
            .map((item) => <BannerLink key={item.id} item={item} />)
        : bannerDate
            .slice(4, 6)
            .map((item) => (
              <BannerLink key={item.id} item={item} style="md:h-96 md:w-full" />
            ))}
    </div>
  );
}

export default Banner;
