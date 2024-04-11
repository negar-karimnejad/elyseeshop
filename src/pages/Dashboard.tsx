import { useState } from 'react';
import { FaCartPlus } from 'react-icons/fa';
import { IoIosChatbubbles } from 'react-icons/io';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import Loader from '../components/Loader';
import UpdateUserModal from '../components/UpdateUserModal';
import useUser from '../features/auth/useUser';

function Dashboard() {
  const [isShowUpdateModal, setIsShowUpdateModal] = useState(false);
  const { user } = useUser();

  const navigate = useNavigate();

  const closeModal = () => {
    setIsShowUpdateModal(false);
  };

  if (user === null) {
    navigate('/login');
    return <Loader title="در حال انتقال..." />;
  }

  return (
    <>
      <div className="bg-stone-100 py-20 dark:bg-stone-600">
        <div className="container grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <div className="flex h-64 flex-col justify-between rounded-md border bg-white p-5 dark:border-stone-500 dark:bg-stone-700 dark:text-white">
            <h3 className="font-vazirMedium">
              <span className="font-vazirBold text-lg text-pink-500">
                {user?.user_metadata?.username}
              </span>{' '}
              عزیز , خوش آمدید
            </h3>
            <Button
              type="submit"
              onClick={() => setIsShowUpdateModal(true)}
              className="rounded-md bg-sky-600 px-12 hover:bg-sky-700 dark:bg-stone-900 dark:hover:bg-stone-800"
            >
              ویرایش
            </Button>
          </div>
          <div className="h-64 rounded-md border bg-white p-5 dark:border-stone-500 dark:bg-stone-700 dark:text-white">
            <h3 className="font-vazirMedium">
              کارت باشگاه مشتریان هنوز صادر نشده است
            </h3>
            <div className="mx-auto mt-5 w-5/6">
              <div className="mb-3 w-full rounded-full border bg-stone-50 p-1 dark:border-stone-500 dark:bg-stone-600"></div>
              <p className="text-sm text-stone-400">
                فاصله شما تا دریافت کارت باشگاه مشتریان 1,000,000 تومان
              </p>
            </div>
          </div>
          <div className="flex h-64 flex-col gap-5">
            <Link
              to="/cart"
              className="flex flex-1 flex-col items-center justify-center rounded-md border bg-white p-5 text-stone-600 transition-all hover:text-pink-500 dark:border-stone-500 dark:bg-stone-700 dark:text-white dark:hover:text-pink-500"
            >
              <FaCartPlus size={30} />
              <p>مشاهده سبد خرید</p>
            </Link>
            <div className="transition-al flex flex-1 flex-col items-center justify-center rounded-md border bg-white p-5 text-stone-600 dark:border-stone-500 dark:bg-stone-700 dark:text-white">
              <IoIosChatbubbles size={35} />
              <div className="flex flex-1 gap-1 text-sm">
                <Link to="/advice" className="hover:text-pink-500">
                  مشاوره رایگان
                </Link>
                <span>|</span>
                <Link to="/myAdvice" className="hover:text-pink-500">
                  سوال های شما
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {isShowUpdateModal && <UpdateUserModal closeModal={closeModal} />}
    </>
  );
}

export default Dashboard;
