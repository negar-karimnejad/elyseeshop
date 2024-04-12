import useProducts from '../../features/products/useProducts';
import Loader from '../Loader';
import NewProducts from '../home/NewProducts';
import ProductCard from '../home/ProductCard';

interface RandomProductsProps {
  startIndex: number;
  endIndex: number;
}

function RandomProducts({ startIndex, endIndex }: RandomProductsProps) {
  const { products, isLoading, isFetching } = useProducts();
  const chunkedProducts = products?.sort(() => Math.random() - 0.5);

  if (isLoading) return <Loader title="" />;

  return (
    <NewProducts>
      {chunkedProducts
        ?.slice(startIndex, endIndex)
        .map((product) => (
          <ProductCard
            isLoading={isFetching}
            key={product.id}
            product={product}
          />
        ))}
    </NewProducts>
  );
}

export default RandomProducts;
