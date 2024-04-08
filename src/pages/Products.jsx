import ProductsSidebar from '../components/products/ProductsSidebar';
import ProductsHeader from './ProductsHeader';
import ProductsMain from '../components/products/ProductsMain';

function Products() {
  return (
    <div className="bg-stone-100 dark:bg-stone-600">
      <ProductsHeader />
      <div className="container grid grid-cols-1 gap-5 py-8 md:grid-cols-12">
        <ProductsSidebar />
        <ProductsMain />
      </div>
    </div>
  );
}

export default Products;
