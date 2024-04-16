import { useParams } from 'react-router-dom';

import useArticle from '../features/articles/useArticle';

function SingleBlog() {
  const { id } = useParams();
  const articleTitle = id ? id.replaceAll('-', ' ') : '';

  const { article } = useArticle(articleTitle);

  return (
    <div className="container my-20">
      {article && (
        <>
          {article.image && typeof article.image === 'string' ? (
            <img
              loading="lazy"
              src={article && article?.image}
              className="mx-auto w-[600px] object-contain"
              alt={article.title}
            />
          ) : null}
          <h5 className="mb-5 mt-20 font-vazirBold text-xl text-stone-700 dark:text-stone-200">
            {article.title}
          </h5>
          {article.content && (
            <div
              dangerouslySetInnerHTML={{ __html: article.content }}
              className="leading-10 text-stone-600 dark:text-stone-400"
            />
          )}
        </>
      )}
    </div>
  );
}
export default SingleBlog;
