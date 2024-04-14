import AdminPanelList from './AdminPanelList';

function AdminSidebar() {
  return (
    <div className="sticky top-20 flex h-[537px] flex-col justify-between bg-stone-600 max-md:hidden md:col-span-3 lg:col-span-2">
      <AdminPanelList />
      <img
        src="/images/dark-logo.png"
        alt=""
        className="ml-10 object-cover opacity-20"
      />
    </div>
  );
}

export default AdminSidebar;
