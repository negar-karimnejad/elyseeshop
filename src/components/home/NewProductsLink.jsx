import { Link } from "react-router-dom";
import Button from "../Button";

function NewProductsLink({ image, title, brand, price }) {
  return (
    <Link
      to=""
      className="overflow-hidden flex flex-col items-center text-center rounded-md bg-white dark:bg-stone-900 dark:shadow-2xl dark:text-stone-200"
    >
      <div className="relative group overflow-hidden">
        <img
          src={image}
          className="w-full h-[187px] object-contain group-hover:brightness-75 transition-all duration-500"
          alt="new product"
        />
        <Button className="absolute -bottom-16 right-0 left-0 m-auto bg-stone-950 text-white group-hover:block group-hover:bottom-10">
          مشاهده محصول
        </Button>
      </div>
      <div className="p-5 flex flex-col gap-5 justify-between flex-1">
        <p className="text-sm hover:text-pink-400">{title}</p>
        <p>{brand}</p>
        <p className="font-yekanB">
          <span className="text-pink-600 font-yekanB">{price} </span>
          تومان
        </p>
      </div>
    </Link>
  );
}

export default NewProductsLink;
