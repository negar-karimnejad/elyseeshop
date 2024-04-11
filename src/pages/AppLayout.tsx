import { Outlet } from 'react-router-dom';
import DarkMode from '../components/DarkMode';
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';

function AppLayout() {
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
