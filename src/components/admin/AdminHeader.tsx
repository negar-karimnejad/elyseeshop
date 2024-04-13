import { IoClose } from 'react-icons/io5';
import { SlMenu } from 'react-icons/sl';
import AdminNavbar from './AdminNavbar';

function AdminHeader() {
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-3 flex items-center justify-between border-b bg-stone-600 max-md:col-span-12 lg:col-span-2">
        <h2 className="p-4 text-3xl font-bold tracking-widest text-pink-500">
          الیزه
        </h2>
        <div className="p-4 text-3xl text-white">
          <SlMenu size={24}/>
          <IoClose size={24}/>
        </div>
      </div>
      <AdminNavbar />
    </div>
  );
}

export default AdminHeader;
