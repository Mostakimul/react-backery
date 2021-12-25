import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Contact from './pages/Contact';
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
    </Routes>
  );
}

export default App;
