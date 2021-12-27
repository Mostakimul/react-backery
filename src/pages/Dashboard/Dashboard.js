import React, { useEffect, useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import TopNavbar from '../../components/dashboard/TopNavbar';
const Dashboard = () => {
  // handle navigation
  const [isNavShowing, setIsNavShowing] = useState(false);

  const handleNav = () => {
    setIsNavShowing(!isNavShowing);
  };
  // For controling window size
  useEffect(() => {
    const hideMenu = () => {
      if (window.innerWidth > 768 && isNavShowing) {
        setIsNavShowing(false);
      }
    };
    window.addEventListener('resize', hideMenu);

    return () => {
      window.removeEventListener('resize', hideMenu);
    };
  }, [isNavShowing]);

  return (
    <div className="grid grid-flow-col grid-cols-12 gap-2 bg-yellow-100 min-h-screen">
      {/* side bar div for desktop */}
      <div className="col-span-3 m-5 p-5 text-center rounded-lg shadow-lg bg-yellow-800 text-white hidden md:block">
        <nav className="space-y-3">
          <NavLink to="/dashboard" className="dash-side-nav">
            Dashboard
          </NavLink>
          <NavLink to="/dashboard/all-users" className="dash-side-nav">
            Users
          </NavLink>
        </nav>
      </div>
      {/* mobile sideBar */}
      <div
        onClick={handleNav}
        className={`md:hidden absolute top-0 left-0 bg-yellow-800 text-white h-screen w-2/4 rounded-r-lg shadow text-center space-y-3 pt-5 transition duration-150 transform ${
          isNavShowing ? '-translate-x-0' : '-translate-x-full'
        }`}>
        <NavLink className="dash-mb-side" to="/dashboard">
          Dashboard
        </NavLink>
      </div>
      {/* content page */}
      <div className="col-span-full md:col-start-4 md:col-end-13 b m-3">
        {/* mobile Menu */}
        <TopNavbar handleNav={handleNav} isNavShowing={isNavShowing} />
        {/* content section */}
        <div className="dash-content">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
