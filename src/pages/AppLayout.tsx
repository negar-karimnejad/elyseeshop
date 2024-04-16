import { Outlet } from 'react-router-dom';
import DarkMode from '../components/DarkMode';
import Loader from '../components/Loader';
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
import useProducts from '../features/products/useProducts';

function AppLayout() {
  const { isLoading } = useProducts();

  if (isLoading) return <Loader />;
  return (
    <div className="text-stone- bg-white dark:bg-stone-900">
      <Header />
      <Outlet />
      <Footer />
      <DarkMode />
    </div>
  );
}

export default AppLayout;
