import { Link } from 'react-router-dom';
import { blogLinks } from '../data/data';

function Blog() {
  return (
    <div className="container my-20 grid grid-cols-1 gap-5 gap-y-20 pt-5 md:grid-cols-3">
      {blogLinks.map((item, index) => (
        <Link key={index} to={`/blog/${item.title.replaceAll(' ', '-')}`}>
          <div className="overflow-hidden rounded-md">
            <img
              className="object-contain transition-all duration-700 hover:scale-110"
              src={item.image}
              alt={item.title}
              title={item.title}
            />
          </div>
          <div className="pt-4 text-center font-vazirBold text-lg text-stone-700 transition-all hover:text-pink-500 dark:text-stone-300 dark:hover:text-stone-50">
            {item.title}
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Blog;
