import { Link } from 'react-router-dom';
import Button from '../Button';

function ProductCard({ image, title, brand, price }) {
  return (
    <Link
      to=""
      className="flex flex-col items-center overflow-hidden rounded-md bg-white text-center dark:bg-stone-900 dark:text-stone-200 dark:shadow-2xl"
    >
      <div className="group relative overflow-hidden">
        <img
          src={image}
          className="h-[187px] w-full object-contain transition-all duration-500 group-hover:brightness-75"
          alt="new product"
        />
        <Button className="absolute -bottom-16 left-0 right-0 m-auto bg-stone-950 text-white group-hover:bottom-10 group-hover:block">
          مشاهده محصول
        </Button>
      </div>
      <div className="flex flex-1 flex-col justify-between gap-5 p-5">
        <p className="text-sm hover:text-pink-400">{title}</p>
        <p>{brand}</p>
        <p className="font-yekanB">
          <span className="font-yekanB text-pink-600">{price} </span>
          تومان
        </p>
      </div>
    </Link>
  );
}

export default ProductCard;
