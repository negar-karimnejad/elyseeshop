import { useParams } from 'react-router-dom';
import { blogLinks } from '../data/data';

function SingleBlog() {
  const { id } = useParams();
  const blogTitle = id.replaceAll('-', ' ');
  const blog = blogLinks.find((blog) => blog.title === blogTitle);

  return (
    <div className="container my-20">
      <img
        src={blog?.image}
        className="mx-auto w-[600px] object-contain"
        alt=""
      />
      <h5 className="mb-5 mt-20 font-vazirBold text-xl text-stone-700 dark:text-stone-200">
        {blogTitle}
      </h5>
      <div
        dangerouslySetInnerHTML={{ __html: blog.content }}
        className="leading-10 text-stone-600 dark:text-stone-400"
      />
    </div>
  );
}

export default SingleBlog;
