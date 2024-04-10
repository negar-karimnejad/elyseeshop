import { Link } from 'react-router-dom';

function MyAdvice() {
  return (
    <div className="container min-h-72 py-10">
      <Link to="/advice" className="font-vazirBold text-sky-500">
        :: ارسال سوال جدید
      </Link>
      <p className="mt-10 font-vazirBold text-stone-800 dark:text-white">
        فهرست سوال های شما
      </p>
    </div>
  );
}

export default MyAdvice;
