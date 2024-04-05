import { Outlet } from 'react-router-dom';
import DarkMode from '../components/DarkMode';
import Footer from '../components/Footer';
import Header from '../components/header/Header';
import useCabins from '../features/products/useCabins';

function AppLayout() {
  const { error, isLoading, products } = useCabins();
  console.log(products);
  console.log(error);
  console.log(isLoading);
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
