import { useEffect, useState } from 'react';
import { AiOutlineLoading } from 'react-icons/ai';
import { useParams } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/navigation';
import Breadcrumb from '../components/Breadcrumb';
import Loader from '../components/Loader';
import ProductCartForm from '../components/product/ProductCartForm';
import SimilarProducts from '../components/product/SimilarProducts';
import useProduct from '../features/products/useProduct';
import useProducts from '../features/products/useProducts';
import { ProductProps } from '../types/ProductProps';

function Product() {
  const [showProductDetails, setShowProductDetails] = useState(true);
  const [showProductFeatures, setShowProductFeatures] = useState(true);
  const [showProductBrand, setShowProductBrand] = useState(true);
  const [similarProducts, setSimilarProducts] = useState<ProductProps[]>([]);

  const { id } = useParams();

  const { products } = useProducts();
  const { product, error, refetch, isFetching, isLoading } = useProduct(
    id?.replaceAll('-', ' '),
  );

  useEffect(() => {
    const filteredProducts = products?.filter((item) =>
      item?.tag.includes(product?.tag[0]),
    );
    const selectedProducts = filteredProducts?.filter(
      (item) => item.id !== product.id,
    );
    if (selectedProducts) {
      setSimilarProducts(selectedProducts);
    }

    refetch();
    window.scrollTo(0, 0);
  }, [product, products, refetch, id]);

  if (error) return;
  if (isLoading) return <Loader />;

  const {
    name,
    image,
    mass,
    code,
    brand,
    brandDescription,
    brandImage,
    description,
    features,
    tag,
  } = product;
  return (
    <div className="pt-5">
      <div className="container">
        <Breadcrumb links={tag} productName={name} />
        <div className="grid grid-cols-1 gap-y-5 pt-5 lg:grid-cols-2">
          <div className="flex justify-center">
            {isFetching ? (
              <AiOutlineLoading
                size={24}
                className="mx-auto mt-32 animate-spin text-pink-400"
              />
            ) : (
              <img
                loading="lazy"
                src={image}
                alt="product"
                className="h-fit max-w-md"
              />
            )}
          </div>
          <div className="flex flex-col border-r pr-3">
            <p className="text-2xl text-stone-700 dark:text-stone-200">
              {name} | <span className="font-BKoodak">{mass}</span> میل
            </p>
            <p className="pt-3 text-[13px] text-stone-400">{brand}</p>
            <div className="mt-5 h-20 w-20 border-2 border-pink-600 p-1">
              {isFetching ? (
                <AiOutlineLoading
                  size={24}
                  className="m-auto mt-5 animate-spin text-pink-400"
                />
              ) : (
                <img loading="lazy" src={image} alt={name} title={name} />
              )}
            </div>
            <p className="font-BKoodak text-sm dark:text-stone-300">{`${mass} میل`}</p>
            <ProductCartForm product={product} />
            <div className="my-10 flex items-center justify-between">
              <p className="text-sm text-stone-400">کد کالا: {code}</p>
              <img
                loading="lazy"
                className="w-32"
                src={brandImage}
                alt={name}
                title={name}
              />
            </div>
            <hr />
            <div className="cursor-pointer border-b py-2">
              <div
                onClick={() => setShowProductDetails((prev) => !prev)}
                className="group flex items-center justify-between "
              >
                <p className="font-vazirBold text-stone-800 transition-all group-hover:text-pink-600 dark:text-stone-300">
                  درباره محصول
                </p>
                <button className="font-vazirBold text-xl transition-all group-hover:text-pink-600 dark:text-stone-300">
                  {showProductDetails ? '-' : '+'}
                </button>
              </div>
              <div
                className={`${
                  showProductDetails
                    ? 'mt-5 max-h-[1000px]'
                    : 'max-h-0 overflow-hidden'
                } leading-9 text-stone-500 transition-all duration-500 dark:text-stone-400`}
              >
                {description}
              </div>
            </div>
            <div className="cursor-pointer border-b py-2">
              <div
                onClick={() => setShowProductFeatures((prev) => !prev)}
                className="group flex items-center justify-between"
              >
                <p className="font-vazirBold text-stone-800 transition-all group-hover:text-pink-600 dark:text-stone-300">
                  ویژگی ها و مشخصات
                </p>
                <button className="font-vazirBold text-xl transition-all group-hover:text-pink-600 dark:text-stone-300">
                  {showProductFeatures ? '-' : '+'}
                </button>
              </div>
              <div
                className={`${
                  showProductFeatures
                    ? 'mt-5 max-h-[1000px]'
                    : 'max-h-0 overflow-hidden'
                } leading-9 text-stone-500 transition-all duration-500 dark:text-stone-400`}
              >
                <ul className="list-disc pr-8 leading-7">
                  {features.map((feature: string, index: number) => (
                    <li key={index}>{feature} </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="cursor-pointer border-b py-2">
              <div
                onClick={() => setShowProductBrand((prev) => !prev)}
                className="group flex items-center justify-between"
              >
                <p className="font-vazirBold text-stone-800 transition-all group-hover:text-pink-600 dark:text-stone-300">
                  درباره برند
                </p>
                <button className="font-vazirBold text-xl transition-all group-hover:text-pink-600 dark:text-stone-300">
                  {showProductBrand ? '-' : '+'}
                </button>
              </div>
              <div
                className={`${
                  showProductBrand
                    ? 'mt-5 max-h-[1000px]'
                    : 'max-h-0 overflow-hidden'
                } leading-9 text-stone-500 transition-all duration-500 dark:text-stone-400`}
              >
                {brandDescription}
              </div>
            </div>
          </div>
        </div>
      </div>
      <SimilarProducts similarProducts={similarProducts} />
    </div>
  );
}

export default Product;
