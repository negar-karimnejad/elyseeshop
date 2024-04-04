import { useState } from 'react';
import { IoIosPricetag } from 'react-icons/io';
import { Link } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Breadcrumb from '../components/Breadcrumb';
import Button from '../components/Button';
import Input from '../components/Input';
import ProductCard from '../components/home/ProductCard';

function Product() {
  const [quantity, setQuantity] = useState(1);
  const [showProductDetails, setShowProductDetails] = useState(true);
  const [showProductFeatures, setShowProductFeatures] = useState(true);
  const [showProductBrand, setShowProductBrand] = useState(true);

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
            <img src="../images/new-products/07.jpg" alt="product" />
          </div>
          <div className="flex flex-col border-r pr-3">
            <p className="text-2xl text-stone-700 dark:text-stone-200">
              کرم مرطوب کننده حاوی اوره 20 درصد درمالیفت | 40 میل
            </p>
            <p className="pt-3 text-[13px] text-stone-400">
              Dermalift Dermalift Eczolift Urea 20% For Very Dry And Delicate
              Skin 40 ml
            </p>
            <Link to="" className="mt-5 h-20 w-20">
              <img
                className="h-20 w-20 border-2 border-pink-600 p-1"
                src="../images/new-products/07.jpg"
                alt=""
                title="40 میل"
              />
            </Link>
            <p className="text-sm dark:text-stone-300">40 میل</p>
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
                    195,000
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
              <p className="text-sm text-stone-400">کد کالا: 5030-3418</p>
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
                اگر پوست چربی دارید نباید برای جلوگیری از چرب تر شدن پوست،
                استفاده از کرم آبرسان را قطع کنید. بلکه باید از محصول مناسب پوست
                چرب مانند ژل کرم مرطوب کننده اسکین وان استفاده نمایید. این
                آبرسان به فرم ژل کرم می باشدکه جذب بسیار بالایی دارد و بافتی
                بسیار سبک که باعث ایجاد احساس چربی و یا سنگینی روی پوست نمی
                گردد. آبرسان هیال اسکین وان، رطوبت رسانی بسیار قوی می باشد که
                پوست را به طور کامل و طولانی مدت آبرسانی کرده و مانع از خشک شدن
                پوست می گردد. این محصول کنترل کننده ترشح چربی در پوست می باشد و
                می توان اینطور بیان کرد که تعادل میان چربی و رطوبت پوست را حفظ
                می کند و مانع از برق افتادن پوست صورت می گردد. آبرسان هیال اسکین
                وان منافذ پوست را جمع کرده و برای افرادی که پوست چرب و یا مختلط
                دارند گزینه ای بسیار مناسب است. این ژل کرم آبرسان، غیر کومدون زا
                می باشد و ترکیبات گیاهی موجود در آن به تقویت پوست و تغذیه بهتر
                آن کمک می نماید. آبرسان هیال اسکین وان حاوی هیالورونیک اسید می
                باشد که علاوه بر آبرسانی به پوست، به افزایش استحکام پوست کمک
                کرده و مانع از پیری زود رس پوست می گردد. ترکیبات ژل کرم مرطوب
                کننده اسکین وان آب، پی ای جی-۸ استئارات، ستئاریل اتیل هگزانوات،
                گلیسیریل استئارات، استئاریل هپتانوات، ستیل الکل، بوتیل استئارات،
                اولیو گلیسرایدز، استئاریل کاپریلات، ستیل پالمیتات، سوربیتان
                سسکواولئات، استئاریک اسید، توکوفرول، پتاسیم هیدروکسید،
                ستو-استئاریل الکل، پلی اکریل آمید، سی ۱۴-۱۳ ایزو پارافین،
                لورت-۷، کراس پلیمر دایمتیکون/وینیل دایمتیکون، پروپیلن گلایکول،
                نگهدارنده بر پایه فنوکسی اتانول، متیل پارابن، پروپیل پارابن،
                بوتیل پارابن، تریپل آرگونین، عصاره قارچ، بوتیلن گلایکول،
                هیالورونیک اسید، اسانس تری اتانول آمین، زینک پی سی ای. روش
                استفاده از ژل کرم مرطوب کننده اسکین وان مقداری از ژل کرم را روی
                پوست تمیز صورت و گردن خود قرار داده و به آرامی ماساژ دهید تا جذب
                پوست گردد. از این ژل کرم حداقل باید دو مرتبه در طول شبانه روز
                استفاده نمایید.
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
                  <li>
                    برطرف کننده پوسته ریزی و حالت فلسی در پوست‌های بسیار خشک
                  </li>
                  <li>کمک به رفع میخچه، ضخیم شدگی و ترک خوردگی کف پا</li>
                  <li>
                    رفع زبری، تیرگی و پینه دست، آرنج، زانو، پاشنه و قوزک پا
                  </li>
                  <li>نرم کننده و مرطوب کننده عمیق پوست</li>
                  <li>فاقد رنگ، اسانس، پارابن و اتانول</li>
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
                جی-۸ استئارات، ستئاریل اتیل هگزانوات، گلیسیریل استئارات،
                استئاریل هپتانوات، ستیل الکل، بوتیل استئارات، اولیو گلیسرایدز،
                استئاریل کاپریلات، ستیل پالمیتات، سوربیتان سسکواولئات، استئاریک
                اسید، توکوفرول، پتاسیم هیدروکید، ستو-استئاریل الکل، پلی اکریل
                آمید، سی ۱۴-۱۳ ایزو پارافین، لورت-۷، کراس پلیمر دایمتیکون/وینیل
                دایمتیکون، پروپیلن گلایکول، نگهدارنده بر پایه فنوکسی اتانول،
                متیل پارابن، پروپیل پارابن، بوتیل پارابن، تریپل آرگونین، عصاره
                قارچ، بوتیلن گلایکول، هیالورونیک اسید، اسانس تری اتانول آمین،
                زینک پی سی ای. روش استفاده از ژل کرم مرطوب کننده اسکین وان
                مقداری از ژل کرم را روی پوست تمیز صورت و گردن خود قرار داده و به
                آرامی ماساژ دهید تا جذب پوست گردد. از این ژل کرم حداقل باید دو
                مرت
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
