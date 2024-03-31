import React from "react";
import Navbar from "../components/navbar/Navbar";
import { Outlet } from "react-router-dom";

function AppLayout() {
  return (
    <div className="text-stone-600">
      <Navbar />
      <Outlet />
    </div>
  );
}

export default AppLayout;
