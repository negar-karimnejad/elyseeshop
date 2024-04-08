import { useEffect, useState } from 'react';
import { RiArrowDropLeftLine } from 'react-icons/ri';
import { useLocation, useParams } from 'react-router-dom';
import ProductSorting from '../components/ProductSorting';
import StyledProductsUl from '../components/StyledProductsUl';
import ProductCard from '../components/home/ProductCard';
import { ProductsPagebrands, navMobileMenu } from '../data/data';
import useProducts from '../features/products/useProducts';

function Products() {
  const [openedHeading, setOpenedHeading] = useState(null);
  const [productList, setProductList] = useState([]);

  const { id } = useParams();
  const { products } = useProducts();
  const urlQuery = id.replaceAll('-', ' ');
  const location = useLocation();
  const pathname = location.pathname;
  const wildcard = pathname.split('/').slice(3).join('/');

  useEffect(() => {
    let filteredProducts = [];
    if (urlQuery === 'برند') {
      filteredProducts = products?.filter(
        (product) => product.brandName === wildcard,
      );
    } else {
      filteredProducts = products?.filter(
        (product) => product.category === urlQuery,
      );
    }
    setProductList(filteredProducts);
  }, [products, urlQuery, wildcard]);

  const { list, id: listId } = navMobileMenu.find(
    (item) => item.id === urlQuery || wildcard,
  );
  const ProductsFilterItems = [listId, 'برند'];

  const toggleExpansion = () => {
    setOpenedHeading(null);
  };

  return (
    <div className="bg-stone-100 dark:bg-stone-600">
      <div className="flex h-36 items-center justify-center bg-[url('/images/heading-bg.jpg')] font-vazirBold text-3xl text-stone-400">
        <p className="flex items-end text-3xl">
          <RiArrowDropLeftLine size={24} /> {listId}
        </p>
      </div>
      <div className="container grid grid-cols-1 gap-5 py-8 md:grid-cols-12">
        <div className="col-span-12 flex gap-y-16 rounded-md bg-white shadow-sm dark:bg-stone-500 max-md:justify-between md:col-span-5 md:flex-col md:p-5 lg:col-span-3">
          {ProductsFilterItems.map((filter, index) => (
            <StyledProductsUl
              key={index}
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
          <ProductSorting />

          <div className="mt-10 grid grid-cols-2 gap-5 lg:grid-cols-3 xl:grid-cols-4">
            {productList?.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
