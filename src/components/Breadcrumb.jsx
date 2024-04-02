import React from "react";
import { Link } from "react-router-dom";

function Breadcrumb({ links }) {
  return (
    <nav className="container pt-5" aria-label="Breadcrumb">
      <ol className="flex items-center flex-wrap">
        <li className="inline-flex items-center">
          <Link
            to="/"
            className="inline-flex items-center text-stone-500 dark:text-stone-200 hover:text-pink-600 dark:text-stone-400 dark:hover:text-pink-600"
          >
            خانه
          </Link>
        </li>
        {links.map((link) => (
          <li key={link.id} className="whitespace-nowrap">
            <div className="flex items-center whitespace-nowrap">
              <svg
                className="rtl:rotate-180 w-3 h-3 text-stone-300 mx-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 9 4-4-4-4"
                />
              </svg>
              {link.id === links.length ? (
                <div className="ms-1 text-stone-400 md:ms-2 dark:text-stone-400">
                  {link.title}
                </div>
              ) : (
                <Link
                  to=""
                  className="ms-1 text-stone-500 dark:text-stone-200 hover:text-pink-600 md:ms-2 dark:text-stone-400 dark:hover:text-pink-600"
                >
                  {link.title}
                </Link>
              )}
            </div>
          </li>
        ))}
      </ol>
    </nav>
  );
}

export default Breadcrumb;
