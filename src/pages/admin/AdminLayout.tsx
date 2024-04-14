import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import Loader from '../../components/Loader';
import AdminHeader from '../../components/admin/AdminHeader';
import AdminSidebar from '../../components/admin/AdminSidebar';
import useUser from '../../features/auth/useUser';
import DarkMode from '../../components/DarkMode';
function AdminLayout() {
  const { user, isLoading } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoading && user?.user_metadata.role !== 'admin') {
      navigate('/dashboard');
    }
  }, [isLoading, navigate, user?.user_metadata.role]);

  if (user?.user_metadata.role !== 'admin') {
    return <Loader title="در حال انتقال ..." />;
  }
  return (
    <>
      <AdminHeader />
      <div className="grid grid-cols-12">
        <AdminSidebar />
        <Outlet />
        <DarkMode />
      </div>
    </>
  );
}

export default AdminLayout;
