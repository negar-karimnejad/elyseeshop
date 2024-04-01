import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";
import Footer from "../components/Footer";

function AppLayout() {
  return (
    <div className="text-stone-600">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default AppLayout;
