import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  // handling navigation
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

  // navigation
  const navItem = [
    { name: 'Home', to: '/' },
    { name: 'Contact', to: '/contact' },
    { name: 'Login', to: '/login' },
  ];

  return (
    <div className="container bg-gray-50 flex justify-between items-center p-2 mt-2 rounded-lg">
      {/* logo */}
      <div>
        <NavLink to="/" className="text-lg font-semibold font-jos">
          <img src="/images/bakery-logo.png" alt="logo" srcSet="Website logo" className="w-12" />
        </NavLink>
      </div>
      {/* mobile humberger icon */}
      <div onClick={handleNav} className="md:hidden">
        {isNavShowing ? (
          <svg
            className="w-6 h-6 text-gray-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            className="w-6 h-6 text-gray-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        )}
      </div>
      {/* mobile nav NavLinks */}
      <nav
        className={`md:hidden absolute top-0 left-0 bg-yellow-800 text-white font-bold h-screen w-2/4 rounded-r-lg shadow text-center space-y-3 pt-5 transition duration-150 transform ${
          isNavShowing ? '-translate-x-0' : '-translate-x-full'
        }`}>
        {navItem.map((item) => (
          <NavLink
            key={item.to}
            className={({ isActive }) => (isActive ? 'mobile-nav-active' : 'mobile-nav')}
            to={item.to}>
            {item.name}
          </NavLink>
        ))}
      </nav>

      {/* nav NavLink desktop */}
      <nav className="space-x-3 hidden md:flex md:items-center">
        {navItem.map((item) => (
          <NavLink
            key={item.to}
            className={({ isActive }) => (isActive ? 'desk-nav-active' : 'desk-nav')}
            to={item.to}>
            {item.name}
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

export default Navbar;
