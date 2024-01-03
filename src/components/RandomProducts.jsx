import React from 'react';
import useCabins from '../features/products/useCabins';
import NewProducts from './home/NewProducts';
import ProductCard from './home/ProductCard';

function RandomProducts({startIndex,endIndex}) {
    const { products, error, isLoading } = useCabins();

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;
  
    const chunkedProducts = products.sort(() => Math.random() - 0.5);
  
  return (
    <NewProducts>
      {chunkedProducts.slice(startIndex, endIndex).map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </NewProducts>
  );
}

export default RandomProducts;
