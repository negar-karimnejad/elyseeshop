import React from "react";
import { Link } from "react-router-dom";

const NewProductsLink = ({ image, title, brand, price }) => {
  return (
    <Link
      to=""
      className="overflow-hidden flex flex-col items-center text-center rounded-md bg-white"
    >
      <img
        src={image}
        className="w-full object-contain hover:brightness-75 transition-all duration-500"
        alt="new product"
      />
      <div className="p-5 flex flex-col gap-5">
        <p className="text-sm hover:text-pink-400">{title}</p>
        <p>{brand}</p>
        <p className="font-yekanB">
          <span className="text-green-600 font-yekanB">{price} </span>
          تومان
        </p>
      </div>
    </Link>
  );
};

function NewProducts() {
  return (
    <div className="container p-5 gap-5 mt-5 rounded-md bg-pink-200 grid grid-cols-2 lg:grid-cols-6">
      <NewProductsLink
        image="./images/new-products/01.jpg"
        title="پلت سایه چشم Berry"
        brand="Sheglam"
        price="690,000"
      />
      <NewProductsLink
        image="./images/new-products/02.jpg"
        title="شامپو ضد مو خوره آگاوه"
        brand="Maui"
        price="385,000"
      />
      <NewProductsLink
        image="./images/new-products/03.jpg"
        title="تونر پاک کننده و مرطوب کننده شیرعسل"
        brand="Deep Sense"
        price="83,000"
      />
      <NewProductsLink
        image="./images/new-products/04.jpg"
        title="قطره موی اسیب دیده"
        brand="Lakmé"
        price="490,000"
      />
      <NewProductsLink
        image="./images/new-products/05.jpg"
        title="استیک رولی وزگیر مو"
        brand="TIGI"
        price="185,000"
      />
      <NewProductsLink
        image="./images/new-products/06.jpg"
        title="لیپ گلاس دایموند"
        brand="Golden rose"
        price="225,000"
      />
    </div>
  );
}

export default NewProducts;
