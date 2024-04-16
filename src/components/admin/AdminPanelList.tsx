import { Link } from 'react-router-dom';

function AdminPanelList() {
  return (
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
        <button>خروج</button>
      </li>
    </ul>
  );
}

export default AdminPanelList;
