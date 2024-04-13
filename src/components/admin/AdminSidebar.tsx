import AdminPanelList from './AdminPanelList';

function AdminSidebar() {
  return (
    <div className="bg-stone-600 max-md:hidden md:col-span-3 lg:col-span-2">
      <AdminPanelList />
    </div>
  );
}

export default AdminSidebar;
