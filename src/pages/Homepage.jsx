import Articles from "../components/home/Articles";
import Banner from "../components/home/Banner";
import Brands from "../components/home/Brands";
import Hero from "../components/home/Hero";
import NewProducts from "../components/home/NewProducts";
import NewProductsLink from "../components/home/NewProductsLink";

function Homepage() {
  return (
    <>
      <Hero />
      <Banner quantity={4} />
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
      <Banner quantity={2} />
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
