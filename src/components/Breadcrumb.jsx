import React from 'react';
import { Link } from 'react-router-dom';

function Breadcrumb({ links }) {
  return (
    <nav className="container pt-5" aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center">
        <li className="inline-flex items-center">
          <Link
            to="/"
            className="inline-flex items-center text-stone-500 hover:text-pink-600 dark:text-stone-200 dark:text-stone-400 dark:hover:text-pink-600"
          >
            خانه
          </Link>
        </li>
        {links.map((link) => (
          <li key={link.id} className="whitespace-nowrap">
            <div className="flex items-center whitespace-nowrap">
              <svg
                className="mx-1 h-3 w-3 text-stone-300 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 9 4-4-4-4"
                />
              </svg>
              {link.id === links.length ? (
                <div className="ms-1 text-stone-400 dark:text-stone-400 md:ms-2">
                  {link.title}
                </div>
              ) : (
                <Link
                  to=""
                  className="ms-1 text-stone-500 hover:text-pink-600 dark:text-stone-200 dark:text-stone-400 dark:hover:text-pink-600 md:ms-2"
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
