import Articles from '../components/home/Articles';
import Banner from '../components/home/Banner';
import Brands from '../components/home/Brands';
import Hero from '../components/home/Hero';
import RandomProducts from '../components/products/RandomProducts';

function Homepage() {
  return (
    <div className="pb-14">
      <Hero />
      <Banner quantity={4} />
      <RandomProducts startIndex={0} endIndex={6} />
      <Banner quantity={2} />
      <RandomProducts startIndex={6} endIndex={12} />
      <Articles />
      <Brands />
      <RandomProducts startIndex={12} endIndex={18} />
    </div>
  );
}

export default Homepage;
