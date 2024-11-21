import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "./Sidebar";
import Hero from './Hero';

const Layout = () => {
  const location = useLocation();
  return (
    <div className="flex flex-row bg-neutral-100 h-screen w-screen overflow-hidden">
      <Sidebar/>
      <div className="flex-1">
        <div className='p-4'>{<Outlet />}
        {location.pathname === '/' && <Hero />}
        </div>
      </div>
    </div>
  );
};

export default Layout;