import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";

function AppLayout() {
  return (
    <div className="text-stone-600">
      <Header />
      <Outlet />
    </div>
  );
}

export default AppLayout;
