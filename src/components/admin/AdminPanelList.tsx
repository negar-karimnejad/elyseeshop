import { useState } from 'react';
import { AiOutlineLoading } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import useLogout from '../../features/auth/useLogout';
import Loader from '../Loader';

function AdminPanelList() {
  const { isPending, logout } = useLogout();
  const [activeitem, setActiveitem] = useState('main');

  const handleLogout = () => {
    try {
      logout();
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  if (isPending) return <Loader />;
  return (
    <ul className="my-5 flex flex-col">
      <li
        onClick={() => setActiveitem('main')}
        className={`${activeitem === 'main' ? 'bg-stone-800' : ''} p-5 text-white transition-all duration-200 hover:bg-stone-800`}
      >
        <Link to="/admin-panel">صفحه اصلی</Link>
      </li>
      <li
        onClick={() => setActiveitem('products')}
        className={`${activeitem === 'products' ? 'bg-stone-800' : ''} p-5 text-white transition-all duration-200 hover:bg-stone-800`}
      >
        <Link to="/admin-panel/products">محصولات</Link>
      </li>
      <li
        onClick={() => setActiveitem('articals')}
        className={`${activeitem === 'articals' ? 'bg-stone-800' : ''} p-5 text-white transition-all duration-200 hover:bg-stone-800`}
      >
        <Link to="/admin-panel/articals">مقالات</Link>
      </li>
      <li
        onClick={() => setActiveitem('logout')}
        className={`${activeitem === 'logout' ? 'bg-stone-800' : ''} p-5 text-white transition-all duration-200 hover:bg-stone-800`}
      >
        <button disabled={isPending} onClick={handleLogout}>
          {isPending ? (
            <div className="flex items-center justify-center gap-2">
              خروج
              <AiOutlineLoading size={22} className="animate-spin" />
            </div>
          ) : (
            'خروج'
          )}
        </button>
      </li>
    </ul>
  );
}

export default AdminPanelList;
