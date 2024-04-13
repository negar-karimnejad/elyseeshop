import { Link } from 'react-router-dom';

function AdminSidebar() {
  return (
    <div className="bg-stone-600 max-md:hidden md:col-span-3 lg:col-span-2">
      <ul className="my-5 flex flex-col">
        <li className="p-5 text-white transition-all duration-200 hover:bg-stone-800">
          <Link to="/admin-panel">صفحه اصلی</Link>
        </li>
        <li className="p-5 text-white transition-all duration-200 hover:bg-stone-800">
          <Link to="/admin-panel/products">محصولات</Link>
        </li>
        <li className="p-5 text-white transition-all duration-200 hover:bg-stone-800">
          <Link to="/admin-panel/articals">مقالات</Link>
        </li>
        <li className="p-5 text-white transition-all duration-200 hover:bg-stone-800">
          <Link to="/admin-panel/users">کاربران</Link>
        </li>
        <li className="p-5 text-white transition-all duration-200 hover:bg-stone-800">
          <button>خروج</button>
        </li>
      </ul>
    </div>
  );
}

export default AdminSidebar;
