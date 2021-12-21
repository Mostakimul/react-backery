import React from 'react';

const Product = () => {
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
    <div className="container py-8">
      <h2 className="text-center text-2xl uppercase text-yellow-800 font-bold">
        Our Popular Products
      </h2>
      <p className="text-center font-light pb-10">
        Check some of our best products and feel the great passion for food
      </p>

      {/* products */}
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
            <h2 className="text-xl font-semibold text-yellow-700 pt-5 text-center">
              {product.productName}
            </h2>
            <p className="pt-2 pb-5 px-5 text-yellow-500 text-xl font-bold text-center">
              $ {product.price}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
