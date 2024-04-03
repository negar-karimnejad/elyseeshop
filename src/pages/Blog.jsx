import React from "react";
import { Link } from "react-router-dom";
const blog = [
  {
    id: 1,
    title: "۹ اشتباه رایج در مراقبت از پوست",
    image: "./images/blog/1.jpg",
  },
  {
    id: 2,
    title: "وقتی با آرایش می‌خوابید چه اتفاقی می‌افتد؟",
    image: "./images/blog/2.jpg",
  },
  {
    id: 3,
    title: "انواع پوست و ویژگی‌های آن‌ها",
    image: "./images/blog/3.jpg",
  },
];
function Blog() {
  return (
    <div className="my-20 container grid grid-cols-1 md:grid-cols-3 gap-5 pt-5">
      {blog.map((item) => (
        <Link to="">
          <div className="rounded-md overflow-hidden">
            <img
              className="hover:scale-110 object-contain transition-all duration-700"
              src={item.image}
              alt={item.title}
            />
          </div>
          <div className="text-center pt-4 text-stone-800 hover:text-pink-500 transition-all dark:text-stone-300 dark:hover:text-stone-50">
            {item.title}
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Blog;
