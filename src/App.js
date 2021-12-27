import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Contact from './pages/Contact';
import AdminDashboard from './pages/Dashboard/Admin/AdminDashboard';
import AllUsers from './pages/Dashboard/Admin/AllUsers';
import Dashboard from './pages/Dashboard/Dashboard';
import Home from './pages/Home';
import Product from './pages/Product';
import Shop from './pages/Shop';
import Shopmenu from './pages/ShopMenu';
import SignIn from './pages/SignIn';
import Signup from './pages/Signup';
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="login" element={<SignIn />} />
      <Route path="register" element={<Signup />} />
      <Route path="cart" element={<Cart />} />
      <Route path="checkout" element={<Checkout />} />
      <Route path="contact" element={<Contact />} />
      <Route path="shop" element={<Shop />} />
      <Route path="menu" element={<Shopmenu />} />
      <Route path="product/:id" element={<Product />} />
      <Route path="/dashboard" element={<Dashboard />}>
        {/* nested routes */}
        <Route path="/dashboard" element={<AdminDashboard />} />
        <Route path="/dashboard/all-users" element={<AllUsers />} />
      </Route>
    </Routes>
  );
}

export default App;
