import { useState } from 'react';
import { CgProfile } from 'react-icons/cg';
import Input from '../Input';

function AdminNavbar() {
  const [search, setSearch] = useState('');
  return (
    <div className="col-span-9 bg-stone-100 max-md:hidden lg:col-span-10">
      <div className="flex items-center justify-between border-b border-stone-400 px-10 py-5">
        <h2 className="font-vazirBold text-xl text-stone-700">پنل مدیریت</h2>
        <div className="flex items-center gap-2">
          <form action="">
            <Input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              type="text"
              className="p-1"
              id="search"
              placeholder="جستجو"
            />
          </form>
          <CgProfile size={27} className="text-stone-500" />
        </div>
      </div>
    </div>
  );
}

export default AdminNavbar;
