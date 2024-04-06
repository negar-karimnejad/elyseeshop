import { useState } from 'react';
import { RiArrowDropLeftLine } from 'react-icons/ri';
import { Link, useParams } from 'react-router-dom';
import StyledProductsUl from '../components/StyledProductsUl';
import ProductCard from '../components/home/ProductCard';
import { ProductsPagebrands, navMobileMenu } from '../data/data';
import NotFound from './NotFound';

const ProductsSorting = ['ارزان ترین', 'گران ترین', 'جدید ترین'];

function Products() {
  const [openedHeading, setOpenedHeading] = useState(null);
  const { id } = useParams();

  const toggleExpansion = () => {
    setOpenedHeading(null);
  };

  const { list, id: listId } = navMobileMenu.find(
    (item) => item.id === id.replaceAll('-', ' '),
  );
  const ProductsFilterItems = [listId, 'برند'];

  if (!list) return <NotFound />;
  return (
    <div className="bg-stone-100 dark:bg-stone-600">
      <div className="font-vazirBold flex h-36 items-center justify-center bg-[url('/images/heading-bg.jpg')] text-3xl text-stone-400">
        <p className="flex items-end text-3xl">
          <RiArrowDropLeftLine size={24} /> {listId}
        </p>
      </div>
      <div className="container grid grid-cols-1 gap-5 py-8 md:grid-cols-12">
        <div className="col-span-12 flex gap-y-16 rounded-md bg-white shadow-sm dark:bg-stone-500 max-md:justify-between md:col-span-5 md:flex-col md:p-5 lg:col-span-3">
          {ProductsFilterItems.map((filter) => (
            <StyledProductsUl
              key={filter}
              toggleExpansion={toggleExpansion}
              onClick={() =>
                setOpenedHeading((prev) => (prev === filter ? '' : filter))
              }
              openedHeading={openedHeading}
              heading={filter}
              list={filter === 'برند' ? ProductsPagebrands : list}
            />
          ))}
        </div>

        <div className="col-span-12 md:col-span-7 lg:col-span-9">
          <div className="flex items-center gap-2 text-lg">
            <h4 className="text-stone-700 dark:text-stone-100">
              مرتب سازی براساس:
            </h4>
            {ProductsSorting.map((sort) => (
              <Link
                key={sort}
                to={`/products/${sort.replaceAll(' ', '-')}`}
                className="font-vazirBold rounded-full border border-stone-300 p-1 px-3 text-base text-stone-500 transition-all hover:border-pink-300 hover:text-pink-400  dark:text-stone-300 dark:hover:text-pink-500"
              >
                {sort}
              </Link>
            ))}
          </div>

          <div className="mt-10 grid grid-cols-2 gap-5 lg:grid-cols-3 xl:grid-cols-4">
            <ProductCard
              image="/images/new-products/01.jpg"
              title="پلت سایه چشم Berry"
              brand="Sheglam"
              price="690,000"
            />
            <ProductCard
              image="/images/new-products/01.jpg"
              title="پلت سایه چشم Berry"
              brand="Sheglam"
              price="690,000"
            />
            <ProductCard
              image="/images/new-products/01.jpg"
              title="پلت سایه چشم Berry"
              brand="Sheglam"
              price="690,000"
            />
            <ProductCard
              image="/images/new-products/01.jpg"
              title="پلت سایه چشم Berry"
              brand="Sheglam"
              price="690,000"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
