import React from 'react';

const PageHeader = ({ title }) => {
  return (
    <header
      style={{
        backgroundImage:
          "linear-gradient(to right, rgba(127, 100, 81, 0.5), rgba(213, 156, 41, 1)), url('/images/page-header.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '200px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <h2 className="text-3xl uppercase font-bold text-gray-50">{title}</h2>
    </header>
  );
};

export default PageHeader;
