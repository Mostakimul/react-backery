import React from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/shared/PageHeader';
import Layout from '../layout/Layout';

const Shop = () => {
  const products = [
    {
      id: 1,
      img: 'https://i.ibb.co/7bQpGpr/muffin-1.jpg',
      productName: 'Maple Oat Muffin',
      price: 8.95,
    },
    {
      id: 2,
      img: 'https://i.ibb.co/7bQpGpr/muffin-1.jpg',
      productName: 'Maple Oat Muffin',
      price: 8.95,
    },
    {
      id: 3,
      img: 'https://i.ibb.co/7bQpGpr/muffin-1.jpg',
      productName: 'Maple Oat Muffin',
      price: 8.95,
    },
    {
      id: 4,
      img: 'https://i.ibb.co/7bQpGpr/muffin-1.jpg',
      productName: 'Maple Oat Muffin',
      price: 8.95,
    },
    {
      id: 5,
      img: 'https://i.ibb.co/7bQpGpr/muffin-1.jpg',
      productName: 'Maple Oat Muffin',
      price: 8.95,
    },
    {
      id: 6,
      img: 'https://i.ibb.co/7bQpGpr/muffin-1.jpg',
      productName: 'Maple Oat Muffin',
      price: 8.95,
    },
  ];
  return (
    <Layout>
      <PageHeader title="Our Shop" />
      <main className="bg-gray-100">
        <section className="container py-10">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {products.map((product) => (
              <div
                key={product.id}
                className="shadow-lg hover:shadow-yellow-100 transition duration-200">
                <img
                  src={product.img}
                  alt={product.productName}
                  srcSet="products of our backery"
                  className="mx-auto mt-5"
                />
                <Link
                  to={`/product/${product.id}`}
                  className="text-xl block cursor-pointer font-semibold text-yellow-700 pt-5 text-center">
                  {product.productName}
                </Link>
                <p className="pt-2 pb-5 px-5 text-yellow-500 text-xl font-bold text-center">
                  $ {product.price}
                </p>
                <button className="bg-yellow-800 font-semibold uppercase text-gray-50 mb-5 text-center w-2/4 py-1 px-2 block mx-auto">
                  Add to cart
                </button>
              </div>
            ))}
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default Shop;
