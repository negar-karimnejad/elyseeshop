import { useState } from 'react';
import { BiUser } from 'react-icons/bi';
import { Link, useNavigate } from 'react-router-dom';
import useLogout from '../../features/auth/useLogout';
import useUser from '../../features/auth/useUser';

const userList = [
  { id: 1, to: '/dashboard', title: 'داشبورد' },
  { id: 2, to: '/orders', title: ' سفارش ها' },
  { id: 4, to: '/myAdvice', title: ' مشاوره های شما' },
];

function UserIcon() {
  const navigate = useNavigate();
  const [isShowUserModal, setIsShowUserModal] = useState(false);
  const { user } = useUser();
  const { isPending, logout } = useLogout();

  const clickHandler = () => {
    if (user !== null) {
      setIsShowUserModal((prev) => !prev);
    } else {
      navigate('/login');
    }
  };

  const handleLogout = () => {
    try {
      logout();
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  return (
    <div className="relative">
      <button
        type="button"
        className={`transition-all ${user?.id ? 'text-blue-300 hover:text-blue-400' : 'text-stone-300 hover:text-stone-400'} `}
        onClick={clickHandler}
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
              {user?.user_metadata.role === 'admin' && (
                <li onClick={() => setIsShowUserModal(false)}>
                  <Link
                    to="admin-panel"
                    className="whitespace-nowrap transition-all hover:text-pink-500"
                  >
                    پنل مدیریت
                  </Link>
                </li>
              )}
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
              <li onClick={() => setIsShowUserModal(false)}>
                <button
                  disabled={isPending}
                  onClick={handleLogout}
                  className="flex items-center gap-5 whitespace-nowrap transition-all hover:text-pink-500"
                >
                  خروج
                </button>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default UserIcon;
