import { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';

function Advice() {
  const [message, setMessage] = useState('');
  const user = true;

  const submitHandler = (e) => {
    e.preventDefault();
    setMessage('');
  };

  return (
    <div className="container my-14">
      {user ? (
        <form
          onSubmit={submitHandler}
          className="mb-5 flex w-1/2 flex-col gap-3 rounded-md border bg-sky-100 p-3 dark:bg-stone-500"
        >
          <label className="font-yekanB text-stone-600 dark:text-stone-200">
            لطفا سوال خود را وارد کنید
          </label>
          <textarea
            className="rounded-md border p-2 outline-none dark:bg-stone-300"
            cols="30"
            rows="3"
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          <Button
            type="submit"
            className="rounded-md bg-sky-600 px-12 hover:bg-sky-700 dark:bg-black dark:hover:bg-sky-700"
          >
            ارسال
          </Button>
        </form>
      ) : (
        <p className="mb-10 font-yekanB text-stone-600 dark:text-stone-200">
          برای ثبت سوال لطفا وارد{' '}
          <Link title="لاگین" to="/login" className="font-yekanB text-pink-500">
            حساب کاربری
          </Link>{' '}
          خود شوید
        </p>
      )}
      <div className="flex flex-col gap-10">
        <div className="rounded-md border bg-pink-50 p-3 dark:bg-stone-500">
          <p className="text-sm text-stone-600 dark:text-stone-200">
            1402-12-16 |{' '}
            <span className="font-yekanB text-base text-stone-700 dark:text-sky-50">
              سمیه
            </span>
          </p>
          <p className="my-3 dark:text-white">
            با سلام و وقت بخیر چگونه می توانم کارت باشگاه مشتریان دریافت نمایم؟
            این جمله در پروفایل من نوشته شده ممنون میشم پاسخ بدین تشکر "فاصله
            شما تا دریافت کارت باشگاه مشتریان: 1,000,000 تومان"
          </p>
          <div className="rounded-md border bg-white p-3 dark:bg-stone-300">
            <p className="font-yekanB text-pink-400">پاسخ مشاور</p>
            <p className="mt-2 text-stone-600">باسلام</p>
            <p className="leading-8 text-stone-600 dark:text-stone-800">
              برای عضویت در باشگاه مشتریان الیزه شاپ باید مجموع مبلغ خریدهای شما
              ابتدا به مبلغ سه میلیون تومان برسد که کارت آبی دریافت نمایید، برای
              ارتقاء به کارت نقره ای و دریافت تخفیف های بیشتر باید مجموع خریدتان
              به مبلغ هشت میلیون تومان برسد. باتشکر.
            </p>
          </div>
        </div>
        <div className="rounded-md border bg-pink-50 p-3 dark:bg-stone-500">
          <p className="text-sm text-stone-600 dark:text-stone-200">
            1402-12-16 |{' '}
            <span className="font-yekanB text-base text-stone-700 dark:text-sky-50">
              سمیه
            </span>
          </p>
          <p className="my-3 dark:text-white">
            با سلام و وقت بخیر چگونه می توانم کارت باشگاه مشتریان دریافت نمایم؟
            این جمله در پروفایل من نوشته شده ممنون میشم پاسخ بدین تشکر "فاصله
            شما تا دریافت کارت باشگاه مشتریان: 1,000,000 تومان"
          </p>
          <div className="rounded-md border bg-white p-3 dark:bg-stone-300">
            <p className="font-yekanB text-pink-400">پاسخ مشاور</p>
            <p className="mt-2 text-stone-600">باسلام</p>
            <p className="leading-8 text-stone-600 dark:text-stone-800">
              برای عضویت در باشگاه مشتریان الیزه شاپ باید مجموع مبلغ خریدهای شما
              ابتدا به مبلغ سه میلیون تومان برسد که کارت آبی دریافت نمایید، برای
              ارتقاء به کارت نقره ای و دریافت تخفیف های بیشتر باید مجموع خریدتان
              به مبلغ هشت میلیون تومان برسد. باتشکر.
            </p>
          </div>
        </div>
        <div className="rounded-md border bg-pink-50 p-3 dark:bg-stone-500">
          <p className="text-sm text-stone-600 dark:text-stone-200">
            1402-12-16 |{' '}
            <span className="font-yekanB text-base text-stone-700 dark:text-sky-50">
              سمیه
            </span>
          </p>
          <p className="my-3 dark:text-white">
            با سلام و وقت بخیر چگونه می توانم کارت باشگاه مشتریان دریافت نمایم؟
            این جمله در پروفایل من نوشته شده ممنون میشم پاسخ بدین تشکر "فاصله
            شما تا دریافت کارت باشگاه مشتریان: 1,000,000 تومان"
          </p>
          <div className="rounded-md border bg-white p-3 dark:bg-stone-300">
            <p className="font-yekanB text-pink-400">پاسخ مشاور</p>
            <p className="mt-2 text-stone-600">باسلام</p>
            <p className="leading-8 text-stone-600 dark:text-stone-800">
              برای عضویت در باشگاه مشتریان الیزه شاپ باید مجموع مبلغ خریدهای شما
              ابتدا به مبلغ سه میلیون تومان برسد که کارت آبی دریافت نمایید، برای
              ارتقاء به کارت نقره ای و دریافت تخفیف های بیشتر باید مجموع خریدتان
              به مبلغ هشت میلیون تومان برسد. باتشکر.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Advice;
