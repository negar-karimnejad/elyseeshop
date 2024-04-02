import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";
import Footer from "../components/Footer";
import DarkMode from "../components/DarkMode";

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
