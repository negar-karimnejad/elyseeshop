import { Link } from "react-router-dom";
import Banner from "../components/home/Banner";
import Hero from "../components/home/Hero";
import NewProducts from "../components/home/NewProducts";
import Articles from "../components/home/Articles";
import Brands from "../components/home/Brands";

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

export const NewProductsLink = ({ image, title, brand, price }) => {
  return (
    <Link
      to=""
      className="overflow-hidden flex flex-col items-center text-center rounded-md bg-white"
    >
      <div className="relative group overflow-hidden">
        <img
          src={image}
          className="w-full object-contain group-hover:brightness-75 transition-all duration-500"
          alt="new product"
        />
        <button className="absolute w-fit -bottom-16 right-0 left-0 m-auto bg-black text-white rounded-full py-2 px-6 transition-all duration-700 hover:bg-lime-600 group-hover:block group-hover:bottom-10">
          مشاهده محصول
        </button>
      </div>
      <div className="p-5 flex flex-col gap-5">
        <p className="text-sm hover:text-pink-400">{title}</p>
        <p>{brand}</p>
        <p className="font-yekanB">
          <span className="text-lime-600 font-yekanB">{price} </span>
          تومان
        </p>
      </div>
    </Link>
  );
};

function Homepage() {
  return (
    <>
      <Hero />
      <Banner>
        <BannerLink image="./images/banner/01.jpg" />
        <BannerLink image="./images/banner/02.jpg" />
        <BannerLink image="./images/banner/03.jpg" />
        <BannerLink image="./images/banner/04.jpg" />
      </Banner>
      <NewProducts>
        <NewProductsLink
          image="./images/new-products/01.jpg"
          title="پلت سایه چشم Berry"
          brand="Sheglam"
          price="690,000"
        />
        <NewProductsLink
          image="./images/new-products/02.jpg"
          title="شامپو ضد مو خوره آگاوه"
          brand="Maui"
          price="385,000"
        />
        <NewProductsLink
          image="./images/new-products/03.jpg"
          title="تونر پاک کننده و مرطوب کننده شیرعسل"
          brand="Deep Sense"
          price="83,000"
        />
        <NewProductsLink
          image="./images/new-products/04.jpg"
          title="قطره موی اسیب دیده"
          brand="Lakmé"
          price="490,000"
        />
        <NewProductsLink
          image="./images/new-products/05.jpg"
          title="استیک رولی وزگیر مو"
          brand="TIGI"
          price="185,000"
        />
        <NewProductsLink
          image="./images/new-products/06.jpg"
          title="لیپ گلاس دایموند"
          brand="Golden rose"
          price="225,000"
        />
      </NewProducts>
      <Banner>
        <BannerLink image="./images/banner/05.jpg" />
        <BannerLink image="./images/banner/06.jpg" />
      </Banner>
      <NewProducts>
        <NewProductsLink
          image="./images/new-products/07.jpg"
          title="شامپو ضد شوره موهای خشک یا چرب لیمو نعنا"
          brand="Babaria"
          price="465,000"
        />
        <NewProductsLink
          image="./images/new-products/08.jpg"
          title="کرم مرطوب کننده و آبرسان حاوی بتاگلوکان"
          brand="Iunik"
          price="890,000"
        />
        <NewProductsLink
          image="./images/new-products/09.jpg"
          title="تونر پاک کننده و مرطوب کننده شیرعسل"
          brand="Deep Sense"
          price="83,000"
        />
        <NewProductsLink
          image="./images/new-products/10.jpg"
          title="قطره موی اسیب دیده"
          brand="Lakmé"
          price="490,000"
        />
        <NewProductsLink
          image="./images/new-products/11.jpg"
          title="استیک رولی وزگیر مو"
          brand="TIGI"
          price="185,000"
        />
        <NewProductsLink
          image="./images/new-products/12.jpg"
          title="لیپ گلاس دایموند"
          brand="Golden rose"
          price="225,000"
        />
      </NewProducts>
      <Articles />
      <Brands />
      <NewProducts>
        <NewProductsLink
          image="./images/new-products/07.jpg"
          title="شامپو ضد شوره موهای خشک یا چرب لیمو نعنا"
          brand="Babaria"
          price="465,000"
        />
        <NewProductsLink
          image="./images/new-products/08.jpg"
          title="کرم مرطوب کننده و آبرسان حاوی بتاگلوکان"
          brand="Iunik"
          price="890,000"
        />
        <NewProductsLink
          image="./images/new-products/09.jpg"
          title="تونر پاک کننده و مرطوب کننده شیرعسل"
          brand="Deep Sense"
          price="83,000"
        />
        <NewProductsLink
          image="./images/new-products/10.jpg"
          title="قطره موی اسیب دیده"
          brand="Lakmé"
          price="490,000"
        />
        <NewProductsLink
          image="./images/new-products/11.jpg"
          title="استیک رولی وزگیر مو"
          brand="TIGI"
          price="185,000"
        />
        <NewProductsLink
          image="./images/new-products/12.jpg"
          title="لیپ گلاس دایموند"
          brand="Golden rose"
          price="225,000"
        />
      </NewProducts>
    </>
  );
}

export default Homepage;
