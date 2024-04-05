import { useState } from 'react';
import { IoIosPricetag } from 'react-icons/io';
import { Link, useParams } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Breadcrumb from '../components/Breadcrumb';
import Button from '../components/Button';
import Input from '../components/Input';
import Loader from '../components/Loader';
import ProductCard from '../components/home/ProductCard';
import useProduct from '../features/products/useProduct';
import useSimilarProducts from '../features/products/useSimilarProducts';

function Product() {
  const [quantity, setQuantity] = useState(1);
  const [showProductDetails, setShowProductDetails] = useState(true);
  const [showProductFeatures, setShowProductFeatures] = useState(true);
  const [showProductBrand, setShowProductBrand] = useState(true);

  const { id } = useParams();
  const { product, error, isLoading } = useProduct(id);

  const {
    name,
    image,
    mass,
    price,
    code,
    brand,
    brandDescription,
    brandImage,
    category,
    description,
    features,
    tag,
  } = product[0];

  const { similarProducts } = useSimilarProducts(tag);
  console.log(similarProducts);

  if (error) return;
  if (isLoading) return <Loader />;
  
  return (
    <div className="pt-5">
      <div className="container">
        <Breadcrumb
          links={[
            { id: 1, title: 'محصولات بدن' },
            { id: 2, title: 'ضد تعریق و دئودورانت' },
            { id: 3, title: 'اسپری و بادی اسپلش' },
            {
              id: 4,
              title: 'بادی اسپلش زنانه مدل باکارات رژ بلک مارین وودلایک',
            },
          ]}
        />
        <div className="grid grid-cols-1 gap-y-5 pt-5 lg:grid-cols-2">
          <div>
            <img src={image} alt="product" />
          </div>
          <div className="flex flex-col border-r pr-3">
            <p className="text-2xl text-stone-700 dark:text-stone-200">
              {name} | {mass} میل
            </p>
            <p className="pt-3 text-[13px] text-stone-400">{brand}</p>
            <Link to="" className="mt-5 h-20 w-20">
              <img
                className="h-20 w-20 border-2 border-pink-600 p-1"
                src={image}
                alt=""
                title={name}
              />
            </Link>
            <p className="text-sm dark:text-stone-300">{`${mass} میل`}</p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex flex-col gap-5 pt-14"
            >
              <label className="font-yekanB dark:text-stone-100" htmlFor="">
                تعداد
                <Input
                  className="mr-4 p-2"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  type="number"
                />
              </label>
              <div className="flex items-center text-lg">
                <span className="bg-stone-200 p-3 text-stone-300">
                  <IoIosPricetag size={28} />
                </span>
                <p className="w-48 bg-stone-100 p-3">
                  <span className="ml-3 font-yekanB text-pink-600">
                    {price.toLocaleString()}
                  </span>
                  تومان
                </p>
              </div>
              <div className="w-60">
                <Button
                  type="submit"
                  disabled
                  className="w-full cursor-pointer rounded-sm font-yekanB"
                >
                  افزودن به سبد خرید
                </Button>
              </div>
            </form>
            <div className="my-10 flex items-center justify-between">
              <p className="text-sm text-stone-400">کد کالا: {code}</p>
              <p className="font-yekanB text-2xl text-stone-800 dark:text-stone-200">
                Dermalift
              </p>
            </div>
            <hr />
            <div className="cursor-pointer border-b py-2">
              <div
                onClick={() => setShowProductDetails((prev) => !prev)}
                className="group flex items-center justify-between "
              >
                <p className="font-yekanB text-stone-800 transition-all group-hover:text-pink-600 dark:text-stone-300">
                  درباره محصول
                </p>
                <button className="font-yekanB text-xl transition-all group-hover:text-pink-600 dark:text-stone-300">
                  {showProductDetails ? '-' : '+'}
                </button>
              </div>
              <div
                className={`${
                  showProductDetails
                    ? 'mt-5 max-h-[1000px]'
                    : 'max-h-0 overflow-hidden'
                } leading-9 text-stone-500 transition-all duration-500 dark:text-stone-400`}
              >
                {description}
              </div>
            </div>
            <div className="cursor-pointer border-b py-2">
              <div
                onClick={() => setShowProductFeatures((prev) => !prev)}
                className="group flex items-center justify-between"
              >
                <p className="font-yekanB text-stone-800 transition-all group-hover:text-pink-600 dark:text-stone-300">
                  ویژگی ها و مشخصات
                </p>
                <button className="font-yekanB text-xl transition-all group-hover:text-pink-600 dark:text-stone-300">
                  {showProductFeatures ? '-' : '+'}
                </button>
              </div>
              <div
                className={`${
                  showProductFeatures
                    ? 'mt-5 max-h-[1000px]'
                    : 'max-h-0 overflow-hidden'
                } leading-9 text-stone-500 transition-all duration-500 dark:text-stone-400`}
              >
                <ul className="list-disc pr-8 leading-7">
                  {features.map((feature, index) => (
                    <li key={index}>{feature} </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="cursor-pointer border-b py-2">
              <div
                onClick={() => setShowProductBrand((prev) => !prev)}
                className="group flex items-center justify-between"
              >
                <p className="font-yekanB text-stone-800 transition-all group-hover:text-pink-600 dark:text-stone-300">
                  درباره برند
                </p>
                <button className="font-yekanB text-xl transition-all group-hover:text-pink-600 dark:text-stone-300">
                  {showProductBrand ? '-' : '+'}
                </button>
              </div>
              <div
                className={`${
                  showProductBrand
                    ? 'mt-5 max-h-[1000px]'
                    : 'max-h-0 overflow-hidden'
                } leading-9 text-stone-500 transition-all duration-500 dark:text-stone-400`}
              >
                {brandDescription}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-20 bg-stone-200 pb-40 dark:bg-stone-600">
        <div className="container flex flex-col items-center">
          <p className="py-14 font-yekanB text-lg text-stone-800 dark:text-stone-200">
            محصولات مشابه
          </p>
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            loop={true}
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
              996: {
                slidesPerView: 4,
                spaceBetween: 40,
              },
              1100: {
                slidesPerView: 5,
                spaceBetween: 40,
              },
            }}
            className="similarproduct"
          >
            <SwiperSlide className="rounded-md">
              <ProductCard
                image="../images/new-products/07.jpg"
                title="شامپو ضد شوره موهای خشک یا چرب لیمو نعنا"
                brand="Babaria"
                price="465,000"
              />
            </SwiperSlide>
            <SwiperSlide className="rounded-md">
              <ProductCard
                image="../images/new-products/07.jpg"
                title="شامپو ضد شوره موهای خشک یا چرب لیمو نعنا"
                brand="Babaria"
                price="465,000"
              />
            </SwiperSlide>
            <SwiperSlide className="rounded-md">
              <ProductCard
                image="../images/new-products/07.jpg"
                title="شامپو ضد شوره موهای خشک یا چرب لیمو نعنا"
                brand="Babaria"
                price="465,000"
              />
            </SwiperSlide>
            <SwiperSlide className="rounded-md">
              <ProductCard
                image="../images/new-products/07.jpg"
                title="شامپو ضد شوره موهای خشک یا چرب لیمو نعنا"
                brand="Babaria"
                price="465,000"
              />
            </SwiperSlide>
            <SwiperSlide className="rounded-md">
              <ProductCard
                image="../images/new-products/07.jpg"
                title="شامپو ضد شوره موهای خشک یا چرب لیمو نعنا"
                brand="Babaria"
                price="465,000"
              />
            </SwiperSlide>
            <SwiperSlide className="rounded-md">
              <ProductCard
                image="../images/new-products/07.jpg"
                title="شامپو ضد شوره موهای خشک یا چرب لیمو نعنا"
                brand="Babaria"
                price="465,000"
              />
            </SwiperSlide>
            <SwiperSlide className="rounded-md">
              <ProductCard
                image="../images/new-products/07.jpg"
                title="شامپو ضد شوره موهای خشک یا چرب لیمو نعنا"
                brand="Babaria"
                price="465,000"
              />
            </SwiperSlide>
            <SwiperSlide className="rounded-md">
              <ProductCard
                image="../images/new-products/07.jpg"
                title="شامپو ضد شوره موهای خشک یا چرب لیمو نعنا"
                brand="Babaria"
                price="465,000"
              />
            </SwiperSlide>
            <SwiperSlide className="rounded-md">
              <ProductCard
                image="../images/new-products/07.jpg"
                title="شامپو ضد شوره موهای خشک یا چرب لیمو نعنا"
                brand="Babaria"
                price="465,000"
              />
            </SwiperSlide>
            <SwiperSlide className="rounded-md">
              <ProductCard
                image="../images/new-products/07.jpg"
                title="شامپو ضد شوره موهای خشک یا چرب لیمو نعنا"
                brand="Babaria"
                price="465,000"
              />
            </SwiperSlide>
            <SwiperSlide className="rounded-md">
              <ProductCard
                image="../images/new-products/07.jpg"
                title="شامپو ضد شوره موهای خشک یا چرب لیمو نعنا"
                brand="Babaria"
                price="465,000"
              />
            </SwiperSlide>
            <SwiperSlide className="rounded-md">
              <ProductCard
                image="../images/new-products/07.jpg"
                title="شامپو ضد شوره موهای خشک یا چرب لیمو نعنا"
                brand="Babaria"
                price="465,000"
              />
            </SwiperSlide>
            <SwiperSlide className="rounded-md">
              <ProductCard
                image="../images/new-products/07.jpg"
                title="شامپو ضد شوره موهای خشک یا چرب لیمو نعنا"
                brand="Babaria"
                price="465,000"
              />
            </SwiperSlide>
            <SwiperSlide className="rounded-md">
              <ProductCard
                image="../images/new-products/07.jpg"
                title="شامپو ضد شوره موهای خشک یا چرب لیمو نعنا"
                brand="Babaria"
                price="465,000"
              />
            </SwiperSlide>
            <SwiperSlide className="rounded-md">
              <ProductCard
                image="../images/new-products/07.jpg"
                title="شامپو ضد شوره موهای خشک یا چرب لیمو نعنا"
                brand="Babaria"
                price="465,000"
              />
            </SwiperSlide>
            <SwiperSlide className="rounded-md">
              <ProductCard
                image="../images/new-products/07.jpg"
                title="شامپو ضد شوره موهای خشک یا چرب لیمو نعنا"
                brand="Babaria"
                price="465,000"
              />
            </SwiperSlide>
            <SwiperSlide className="rounded-md">
              <ProductCard
                image="../images/new-products/07.jpg"
                title="شامپو ضد شوره موهای خشک یا چرب لیمو نعنا"
                brand="Babaria"
                price="465,000"
              />
            </SwiperSlide>
            <SwiperSlide className="rounded-md">
              <ProductCard
                image="../images/new-products/07.jpg"
                title="شامپو ضد شوره موهای خشک یا چرب لیمو نعنا"
                brand="Babaria"
                price="465,000"
              />
            </SwiperSlide>
            <SwiperSlide className="rounded-md">
              <ProductCard
                image="../images/new-products/07.jpg"
                title="شامپو ضد شوره موهای خشک یا چرب لیمو نعنا"
                brand="Babaria"
                price="465,000"
              />
            </SwiperSlide>
            <SwiperSlide className="rounded-md">
              <ProductCard
                image="../images/new-products/07.jpg"
                title="شامپو ضد شوره موهای خشک یا چرب لیمو نعنا"
                brand="Babaria"
                price="465,000"
              />
            </SwiperSlide>
            <SwiperSlide className="rounded-md">
              <ProductCard
                image="../images/new-products/07.jpg"
                title="شامپو ضد شوره موهای خشک یا چرب لیمو نعنا"
                brand="Babaria"
                price="465,000"
              />
            </SwiperSlide>
            <SwiperSlide className="rounded-md">
              <ProductCard
                image="../images/new-products/07.jpg"
                title="شامپو ضد شوره موهای خشک یا چرب لیمو نعنا"
                brand="Babaria"
                price="465,000"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default Product;
