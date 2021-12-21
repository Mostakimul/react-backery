import React from 'react';
import About from '../components/home/About';
import Hero from '../components/home/Hero';
import Product from '../components/home/Product';
import Services from '../components/home/Services';
import Layout from '../layout/Layout';

const Home = () => {
  return (
    <Layout>
      <section>
        <Hero />
      </section>
      <section className="bg-gray-100">
        <About />
      </section>
      <section>
        <Services />
      </section>
      <section>
        <Product />
      </section>
    </Layout>
  );
};

export default Home;
