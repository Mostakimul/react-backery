import React from 'react';
import { Link } from 'react-router-dom';

export const CartIcon = ({ isMobile }) => {
  return (
    <Link to={'/cart'} className={`relative ${isMobile ? 'mr-5' : ''}`}>
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
      <div className="absolute -top-2 -right-4 text-sm rounded-full w-5 h-5 text-center bg-yellow-400 text-gray-50">
        1
      </div>
    </Link>
  );
};
