import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import ProductCard from '../home/ProductCard';
import { ProductProps } from '../../types/ProductProps';

function SimilarProducts({
  similarProducts,
}: {
  similarProducts: ProductProps[];
}) {
  return (
    <div className="mt-20 bg-stone-200 pb-40 dark:bg-stone-600">
      <div className="container flex flex-col items-center">
        <p className="py-14 font-vazirBold text-lg text-stone-800 dark:text-stone-200">
          محصولات مشابه
        </p>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          centeredSlidesBounds={true}
          navigation={true}
          modules={[Navigation]}
          breakpoints={{
            350: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1100: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
          }}
          className="similarproduct"
        >
          {similarProducts?.map((product, index) => (
            <SwiperSlide key={index} className="rounded-md">
              <ProductCard product={product} isLoading={false} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default SimilarProducts;
