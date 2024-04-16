import { AiOutlineLoading } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../Button';

function ProductCard({
  product,
  isLoading,
}: {
  product: {
    name: string;
    image: string|undefined;
    brand: string;
    price: number;
  };
  isLoading: boolean;
}) {
  const navigate = useNavigate();

  const clickHandler = () => {
    navigate(`/product/${product.name.replaceAll(' ', '-')}`);
  };

  if (isLoading)
    return (
      <div className="flex items-center justify-center overflow-hidden rounded-md bg-white shadow-lg dark:bg-stone-900 dark:text-stone-200">
        <AiOutlineLoading
          size={24}
          className="h-96 animate-spin text-pink-400"
        />
      </div>
    );

  return (
    <div className="flex flex-col items-center overflow-hidden rounded-md bg-white text-center shadow-lg dark:bg-stone-900 dark:text-stone-200">
      <div className="group relative overflow-hidden">
        <img
          loading="lazy"
          src={product.image}
          className="w-full transition-all duration-500 group-hover:brightness-75"
          alt="new product"
        />
        <Button
          type="button"
          onClick={clickHandler}
          className="absolute -bottom-16 left-0 right-0 m-auto bg-stone-950 text-sm text-white group-hover:bottom-10 group-hover:block"
        >
          مشاهده محصول
        </Button>
      </div>
      <div className="flex w-full flex-1 flex-col justify-between gap-5 bg-pink-50 px-1 py-5 dark:bg-stone-800">
        <Link to={`/product/${product.name.replaceAll(' ', '-')}`}>
          <p className="h-8 font-vazirMedium text-sm hover:text-pink-400">
            {product.name}
          </p>
        </Link>
        <p
          style={{ direction: 'ltr' }}
          className="line-clamp-2 h-10 text-sm text-stone-700 dark:text-stone-500"
        >
          {product.brand}
        </p>
        <p className="font-vazirBold">
          <span className="font-vazirBold text-pink-600">
            {product.price.toLocaleString('Fa')}{' '}
          </span>
          تومان
        </p>
      </div>
    </div>
  );
}

export default ProductCard;
