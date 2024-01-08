import { Link } from 'react-router-dom';

function MyAdvice() {
  return (
    <div className="container my-14">
      <Link to="/advice" className="font-yekanB text-sky-500">
        :: ارسال سوال جدید
      </Link>
      <p className="mt-10 font-yekanB text-stone-800 dark:text-white">فهرست سوال های شما</p>
    </div>
  );
}

export default MyAdvice;
