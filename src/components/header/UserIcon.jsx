import { useState } from 'react';
import { BiUser } from 'react-icons/bi';
import { Link } from 'react-router-dom';

function UserIcon() {
  const [isShowUserModal, setIsShowUserModal] = useState(false);

  return (
    <div className="relative">
      <button
        type="button"
        className="text-stone-300 transition-all hover:text-stone-400"
        onClick={() => setIsShowUserModal((prev) => !prev)}
      >
        <BiUser size={29} />
      </button>
      {isShowUserModal && (
        <div
          onClick={() => setIsShowUserModal(false)}
          className="fixed right-0 top-0 h-screen w-full items-start justify-end p-10"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="userIcon absolute rounded-md border bg-white px-10 py-5 text-stone-500 shadow-lg dark:border-0 dark:bg-stone-600 dark:text-white"
          >
            <ul className="flex flex-col gap-3">
              <li>
                <Link
                  to=""
                  className="whitespace-nowrap transition-all hover:text-pink-500"
                >
                  داشبورد
                </Link>
              </li>
              <li>
                <Link
                  to=""
                  className="whitespace-nowrap transition-all hover:text-pink-500"
                >
                  سفارش ها
                </Link>
              </li>
              <li>
                <Link
                  to=""
                  className="whitespace-nowrap transition-all hover:text-pink-500"
                >
                  مشخصات فردی
                </Link>
              </li>
              <li>
                <Link
                  to=""
                  className="whitespace-nowrap transition-all hover:text-pink-500"
                >
                  مشاوره های شما
                </Link>
              </li>
              <li>
                <Link
                  to=""
                  className="whitespace-nowrap transition-all hover:text-pink-400"
                >
                  خروج
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default UserIcon;
