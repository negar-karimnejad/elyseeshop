import { Link } from "react-router-dom";

function NewProductsLink({ image, title, brand, price }) {
  return (
    <Link
      to=""
      className="overflow-hidden flex flex-col items-center text-center rounded-md bg-white dark:bg-sky-950 dark:shadow-2xl dark:text-stone-200"
    >
      <div className="relative group overflow-hidden">
        <img
          src={image}
          className="w-full object-contain group-hover:brightness-75 transition-all duration-500 dark:brightness-75"
          alt="new product"
        />
        <button className="absolute w-fit -bottom-16 right-0 left-0 m-auto bg-black text-white rounded-full py-2 px-6 transition-all duration-700 hover:bg-lime-600 group-hover:block group-hover:bottom-10">
          مشاهده محصول
        </button>
      </div>
      <div className="p-5 flex flex-col gap-5">
        <p className="text-sm hover:text-sky-400">{title}</p>
        <p>{brand}</p>
        <p className="font-yekanB">
          <span className="text-lime-500 font-yekanB">{price} </span>
          تومان
        </p>
      </div>
    </Link>
  );
}

export default NewProductsLink;