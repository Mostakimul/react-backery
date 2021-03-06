import React from 'react';
import Footer from '../components/shared/Footer';
import Navbar from '../components/shared/Navbar';

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
