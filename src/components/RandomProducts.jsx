import useProducts from '../features/products/useProducts';
import Loader from './Loader';
import NewProducts from './home/NewProducts';
import ProductCard from './home/ProductCard';

function RandomProducts({ startIndex, endIndex }) {
  const { products, error, isLoading } = useProducts();
  const chunkedProducts = products?.sort(() => Math.random() - 0.5);

  if (error) return <div>{error}</div>;
  if (isLoading) return <Loader />;

  return (
    <NewProducts>
      {chunkedProducts?.slice(startIndex, endIndex).map((product) => (
        <ProductCard isLoading={isLoading} key={product.id} product={product} />
      ))}
    </NewProducts>
  );
}

export default RandomProducts;
