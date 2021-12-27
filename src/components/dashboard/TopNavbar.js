import React from 'react';
import { NavLink } from 'react-router-dom';

const TopNavbar = ({ handleNav, isNavShowing }) => {
  return (
    <div className="flex bg-yellow-800 text-gray-50 justify-between items-center p-2 mt-2 rounded-lg">
      {/* Logo */}
      <div>
        <NavLink to="/" className="text-lg uppercase font-semibold font-jos">
          Bakery
        </NavLink>
      </div>

      <div className="hidden md:block space-x-2">
        <NavLink
          to="/dashboard"
          className="bg-blue-800 hover:bg-blue-600 inline-block transition duration-300 py-1 px-2 rounded-lg">
          Mohit
        </NavLink>
        <button className="bg-red-800 hover:bg-red-600 transition duration-300 py-1 px-2 rounded-lg shadow-lg">
          Sign out
        </button>
      </div>

      <button onClick={handleNav} className="md:hidden">
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
      </button>
    </div>
  );
};

export default TopNavbar;
