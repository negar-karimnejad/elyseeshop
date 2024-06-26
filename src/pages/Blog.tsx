import { Link } from 'react-router-dom';
import Loader from '../components/Loader';
import useArticles from '../features/articles/useArticles';

function Blog() {
  const { articles, isLoading } = useArticles();

  if (isLoading) return <Loader />;

  return (
    <div className="container my-20 grid grid-cols-1 gap-5 gap-y-20 pt-5 md:grid-cols-3">
      {articles?.map((article) => (
        <Link
          key={article.id}
          to={`/blog/${article.title.replaceAll(' ', '-')}`}
        >
          <div className="overflow-hidden rounded-md">
            {article.image && typeof article.image === 'string' ? (
              <img
                loading="lazy"
                className="object-contain transition-all duration-700 hover:scale-110"
                src={article.image}
                alt={article.title}
                title={article.title}
              />
            ) : null}
          </div>
          <div className="pt-4 text-center font-vazirBold text-lg text-stone-700 transition-all hover:text-pink-500 dark:text-stone-300 dark:hover:text-stone-50">
            {article.title}
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Blog;
