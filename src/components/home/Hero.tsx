import { Link } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

interface HeroLinkProps {
  to: string;
  image: string;
}

const HeroLink = ({ to, image }: HeroLinkProps) => {
  return (
    <Link to={to}>
      <img loading="lazy" src={image} alt="brand" />
    </Link>
  );
};

function Hero() {
  return (
    <div>
      <Swiper
        preventInteractionOnTransition={true}
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        loop={true}
        navigation={true}
        modules={[Autoplay, Navigation]}
        className="heroSwiper hidden md:flex"
      >
        <SwiperSlide>
          <HeroLink to="/products/Cosrx" image="./images/hero/01.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <HeroLink to="/products/Sheglam" image="./images/hero/02.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <HeroLink to="/products/Simple" image="./images/hero/03.jpg" />
        </SwiperSlide>
      </Swiper>
      <div className="container flex flex-col gap-5 md:hidden">
        <HeroLink to="/products/Cosrx" image="./images/hero/01.jpg" />
        <HeroLink to="/products/Sheglam" image="./images/hero/02.jpg" />
        <HeroLink to="/products/Simple" image="./images/hero/03.jpg" />
      </div>
    </div>
  );
}

export default Hero;
