import { useState } from 'react';
import { IoClose } from 'react-icons/io5';
import { SlMenu } from 'react-icons/sl';
import AdminNavbar from './AdminNavbar';
import AdminPanelList from './AdminPanelList';

function AdminHeader() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  return (
    <div className="max-md:sticky top-0 z-50 grid h-20 grid-cols-12">
      <div className="col-span-3 flex items-center justify-between border-b bg-stone-600 max-md:col-span-12 lg:col-span-2">
        <h2 className="p-4 text-3xl font-bold tracking-widest text-pink-500">
          الیزه
        </h2>
        <div
          onClick={() => setIsOpenMenu((prev) => !prev)}
          className="relative cursor-pointer p-4 text-3xl text-white transition-all md:hidden"
        >
          {!isOpenMenu ? <SlMenu size={24} /> : <IoClose size={24} />}

          <div
            className={`fixed top-[69px] z-50 w-56 bg-stone-700 text-center transition-all duration-1000 ${isOpenMenu ? 'translate-x-[157px]' : '-translate-x-14'}`}
          >
            <AdminPanelList />
          </div>
        </div>
      </div>
      <AdminNavbar />
    </div>
  );
}

export default AdminHeader;
