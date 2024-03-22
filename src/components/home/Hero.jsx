import { Link } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const HeroLink = ({ to, image }) => {
  return (
    <Link to={to}>
      <img src={image} alt="" />
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
          <HeroLink to="/products/cosrx" image="./images/hero/01.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <HeroLink to="/products/sheglam" image="./images/hero/02.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <HeroLink to="/products/simple" image="./images/hero/03.jpg" />
        </SwiperSlide>
      </Swiper>
      <div className="container flex flex-col gap-5 md:hidden">
        <HeroLink to="/products/cosrx" image="./images/hero/01.jpg" />
        <HeroLink to="/products/sheglam" image="./images/hero/02.jpg" />
        <HeroLink to="/products/simple" image="./images/hero/03.jpg" />
      </div>
    </div>
  );
}

export default Hero;
