import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useProducts from '../../features/products/useProducts';
import ProductSorting from './ProductSorting';
import ProductCard from '../home/ProductCard';

function ProductsMain() {
  const [productList, setProductList] = useState([]);
  const { products } = useProducts();

  const { id } = useParams();
  const urlQuery = id.replaceAll('-', ' ');

  const sortChangeHandler = (sort) => {
    let filteredProducts = [];
    if (sort === 'ارزان ترین') {
      filteredProducts = productList.slice().sort((a, b) => a.price - b.price);
    } else if (sort === 'گران ترین') {
      filteredProducts = productList.slice().sort((a, b) => b.price - a.price);
    } else if (sort === 'جدید ترین') {
      filteredProducts = productList.slice().sort((a, b) => a.id - b.id);
    }
    setProductList(filteredProducts);
  };

  useEffect(() => {
    let filteredProducts = [];
    filteredProducts = products?.filter(
      (product) => product.category === urlQuery,
    );
    setProductList(filteredProducts);
  }, [products, urlQuery]);

  return (
    <div className="col-span-12 md:col-span-7 lg:col-span-9">
      <ProductSorting sortChangeHandler={sortChangeHandler} />
      <div className="mt-10 grid grid-cols-2 gap-5 lg:grid-cols-3 xl:grid-cols-4">
        {productList?.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default ProductsMain;
