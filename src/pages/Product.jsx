import React, { useState } from "react";
import Breadcrumb from "../components/Breadcrumb";
import { Link } from "react-router-dom";
import { IoIosPricetag } from "react-icons/io";

function Product() {
  const [quantity, setQuantity] = useState(1);
  return (
    <div className="container pt-5">
      <Breadcrumb
        links={[
          { id: 1, title: "محصولات بدن" },
          { id: 2, title: "ضد تعریق و دئودورانت" },
          { id: 3, title: "اسپری و بادی اسپلش" },
          { id: 4, title: "بادی اسپلش زنانه مدل باکارات رژ بلک مارین وودلایک" },
        ]}
      />
      <div className="grid grid-cols-1 lg:grid-cols-2 pt-5">
        <img src="../images/new-products/07.jpg" alt="product" />
        <div className="flex flex-col">
          <p className="text-2xl">
            کرم مرطوب کننده حاوی اوره 20 درصد درمالیفت | 40 میل
          </p>
          <p className="text-[13px] text-stone-400 pt-3">
            Dermalift Dermalift Eczolift Urea 20% For Very Dry And Delicate Skin
            40 ml
          </p>
          <Link to="" className="w-20 h-20 mt-5">
            <img
              className="w-20 h-20 border-2 border-pink-600 p-1"
              src="../images/new-products/07.jpg"
              alt=""
              title="40 میل"
            />
          </Link>
          <p className="text-sm">40 میل</p>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col gap-5 pt-14"
          >
            <label className="font-yekanB" htmlFor="">
              تعداد
              <input
                className="border p-2 outline-none mr-4"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                type="number"
                name=""
                id=""
              />
            </label>
            <div className="flex items-center text-lg">
              <span className="bg-stone-200 p-3 text-stone-300">
                <IoIosPricetag size={28} />
              </span>
              <p className="bg-stone-100 p-3 w-48">
                <span className="ml-3 text-lime-600 font-yekanB">195,000</span>
                تومان
              </p>
            </div>
            <div className="w-60">
              <button
                type="submit"
                disabled
                className="text cursor-pointer w-full rounded-sm transition-all hover:bg-lime-400 bg-lime-600 font-yekanB text-white p-3"
              >
                افزودن به سبد خرید
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Product;
