import React from 'react';
import About from '../components/home/About';
import Hero from '../components/home/Hero';
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
    </Layout>
  );
};

export default Home;
