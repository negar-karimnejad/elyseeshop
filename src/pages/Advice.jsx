import React from "react";
import { Link } from "react-router-dom";

function Advice() {
  return (
    <div className="container my-14">
      <p className="text-stone-600 dark:text-stone-200 mb-10 font-yekanB">
        برای ثبت سوال لطفا وارد{" "}
        <Link title="لاگین" to="/login" className="text-pink-500 font-yekanB">
          حساب کاربری
        </Link>{" "}
        خود شوید
      </p>
      <div className="flex flex-col gap-10">
        <div className="bg-pink-50 border rounded-md p-3 dark:bg-stone-500">
          <p className="text-sm text-stone-600 dark:text-stone-200">
            1402-12-16 |{" "}
            <span className="font-yekanB text-base text-stone-700 dark:text-sky-50">
              سمیه
            </span>
          </p>
          <p className="my-3 dark:text-white">
            با سلام و وقت بخیر چگونه می توانم کارت باشگاه مشتریان دریافت نمایم؟
            این جمله در پروفایل من نوشته شده ممنون میشم پاسخ بدین تشکر "فاصله
            شما تا دریافت کارت باشگاه مشتریان: 1,000,000 تومان"
          </p>
          <div className="bg-white border rounded-md p-3 dark:bg-stone-300">
            <p className="font-yekanB text-pink-400">پاسخ مشاور</p>
            <p className="text-stone-600 mt-2">باسلام</p>
            <p className="text-stone-600 leading-8 dark:text-stone-800">
              برای عضویت در باشگاه مشتریان الیزه شاپ باید مجموع مبلغ خریدهای شما
              ابتدا به مبلغ سه میلیون تومان برسد که کارت آبی دریافت نمایید، برای
              ارتقاء به کارت نقره ای و دریافت تخفیف های بیشتر باید مجموع خریدتان
              به مبلغ هشت میلیون تومان برسد. باتشکر.
            </p>
          </div>
        </div>
        <div className="bg-pink-50 border rounded-md p-3 dark:bg-stone-500">
          <p className="text-sm text-stone-600 dark:text-stone-200">
            1402-12-16 |{" "}
            <span className="font-yekanB text-base text-stone-700 dark:text-sky-50">
              سمیه
            </span>
          </p>
          <p className="my-3 dark:text-white">
            با سلام و وقت بخیر چگونه می توانم کارت باشگاه مشتریان دریافت نمایم؟
            این جمله در پروفایل من نوشته شده ممنون میشم پاسخ بدین تشکر "فاصله
            شما تا دریافت کارت باشگاه مشتریان: 1,000,000 تومان"
          </p>
          <div className="bg-white border rounded-md p-3 dark:bg-stone-300">
            <p className="font-yekanB text-pink-400">پاسخ مشاور</p>
            <p className="text-stone-600 mt-2">باسلام</p>
            <p className="text-stone-600 leading-8 dark:text-stone-800">
              برای عضویت در باشگاه مشتریان الیزه شاپ باید مجموع مبلغ خریدهای شما
              ابتدا به مبلغ سه میلیون تومان برسد که کارت آبی دریافت نمایید، برای
              ارتقاء به کارت نقره ای و دریافت تخفیف های بیشتر باید مجموع خریدتان
              به مبلغ هشت میلیون تومان برسد. باتشکر.
            </p>
          </div>
        </div>
        <div className="bg-pink-50 border rounded-md p-3 dark:bg-stone-500">
          <p className="text-sm text-stone-600 dark:text-stone-200">
            1402-12-16 |{" "}
            <span className="font-yekanB text-base text-stone-700 dark:text-sky-50">
              سمیه
            </span>
          </p>
          <p className="my-3 dark:text-white">
            با سلام و وقت بخیر چگونه می توانم کارت باشگاه مشتریان دریافت نمایم؟
            این جمله در پروفایل من نوشته شده ممنون میشم پاسخ بدین تشکر "فاصله
            شما تا دریافت کارت باشگاه مشتریان: 1,000,000 تومان"
          </p>
          <div className="bg-white border rounded-md p-3 dark:bg-stone-300">
            <p className="font-yekanB text-pink-400">پاسخ مشاور</p>
            <p className="text-stone-600 mt-2">باسلام</p>
            <p className="text-stone-600 leading-8 dark:text-stone-800">
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
