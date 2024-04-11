import { Link, useNavigate } from 'react-router-dom';
import Button from '../Button';

function ProductCard({ product, isLoading }) {
  const navigate = useNavigate();

  if (!product) return;
  const { image, name, brand, price } = product;

  const clickHandler = () => {
    navigate(`/product/${name.replaceAll(' ', '-')}`);
  };

  return (
    <div
      className={`${isLoading ? 'animate-pulse' : ''} flex flex-col items-center overflow-hidden rounded-md bg-white text-center shadow-lg dark:bg-stone-900 dark:text-stone-200`}
    >
      <div className="group relative overflow-hidden">
        <img
          src={image}
          className="w-full transition-all duration-500 group-hover:brightness-75"
          alt="new product"
        />
        <Button
          onClick={clickHandler}
          className="absolute -bottom-16 left-0 right-0 m-auto bg-stone-950 text-sm text-white group-hover:bottom-10 group-hover:block"
        >
          مشاهده محصول
        </Button>
      </div>
      <div className="flex w-full flex-1 flex-col justify-between gap-5 bg-pink-50 px-1 py-5 dark:bg-stone-800">
        <Link to={`/product/${name.replaceAll(' ', '-')}`}>
          <p className="font-vazirMedium h-8 text-sm hover:text-pink-400">
            {name}
          </p>
        </Link>
        <p
          style={{ direction: 'ltr' }}
          className="line-clamp-2 h-10 text-sm text-stone-700 dark:text-stone-500"
        >
          {brand}
        </p>
        <p className="font-vazirBold">
          <span className="font-vazirBold text-pink-600">
            {price.toLocaleString('Fa')}{' '}
          </span>
          تومان
        </p>
      </div>
    </div>
  );
}

export default ProductCard;
