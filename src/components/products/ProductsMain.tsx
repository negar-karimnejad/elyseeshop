import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useProducts from '../../features/products/useProducts';
import { ProductProps } from '../../types/ProductProps';
import ProductCard from '../home/ProductCard';
import ProductSorting from './ProductSorting';

function ProductsMain() {
  const [productList, setProductList] = useState<ProductProps[]>([]);
  const { products } = useProducts();

  const { id } = useParams();
  const urlQuery = id?.replaceAll('-', ' ');

  const sortChangeHandler = (sort: string) => {
    let filteredProducts: ProductProps[] = [];

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
    let filteredProducts: ProductProps[] = [];

    if (products) {
      const query = urlQuery ?? ''; // Use empty string as default value if urlQuery is undefined
      filteredProducts = products.filter((product) => {
        if (product.category === query) {
          return product.category === query;
        }
        return (
          product.brandName.includes(query) ||
          product.name.includes(query) ||
          product.tag.find((item) => item.includes(id || ''))
        );
      });
    }
    setProductList(filteredProducts);
  }, [id, products, urlQuery]);

  return (
    <div className="col-span-12 mb-5 md:col-span-7 lg:col-span-9">
      <ProductSorting sortChangeHandler={sortChangeHandler} />
      <div className="mt-10 grid grid-cols-2 gap-5 lg:grid-cols-3 xl:grid-cols-4">
        {productList?.length ? (
          productList?.map((product, index) => (
            <ProductCard key={index} product={product} isLoading={false} />
          ))
        ) : (
          <p className="text-stone-600">هیچ محصولی یافت نشد</p>
        )}
      </div>
    </div>
  );
}

export default ProductsMain;
