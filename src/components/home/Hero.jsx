import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

function Hero() {
  return (
    <div>
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
        className="max-md:hidden heroSwiper"
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
      <div className="container flex flex-col gap-5 md:hidden">
        <img src="./images/hero/01.jpg" className="rounded-md" alt="" />
        <img src="./images/hero/02.jpg" className="rounded-md" alt="" />
        <img src="./images/hero/03.jpg" className="rounded-md" alt="" />
      </div>
    </div>
  );
}

export default Hero;
