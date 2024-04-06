import { useState } from 'react';
import { BiUser } from 'react-icons/bi';
import { Link } from 'react-router-dom';

const userList = [
  { id: 1, to: '', title: 'داشبورد' },
  { id: 2, to: '/orders', title: ' سفارش ها' },
  { id: 3, to: '', title: ' مشخصات فردی' },
  { id: 4, to: '', title: ' مشاوره های شما' },
  { id: 5, to: '', title: 'خروج' },
];

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
              {userList.map((item) => (
                <li key={item.id} onClick={() => setIsShowUserModal(false)}>
                  <Link
                    to={item.to}
                    className="whitespace-nowrap transition-all hover:text-pink-500"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default UserIcon;
