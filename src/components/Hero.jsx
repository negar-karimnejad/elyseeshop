import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

function Hero() {
  return (
    <>
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        loop={true}
        navigation={true}
        modules={[Autoplay, Navigation]}
      >
        <SwiperSlide>
          <img src="./images/hero/01.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./images/hero/02.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./images/hero/03.jpg" alt="" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default Hero;
