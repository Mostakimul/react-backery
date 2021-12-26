import React from 'react';
import { useParams } from 'react-router-dom';
import PageHeader from '../components/shared/PageHeader';
import Layout from '../layout/Layout';

const Product = () => {
  const { id } = useParams();
  const single = {
    id: 1,
    img: 'https://i.ibb.co/7bQpGpr/muffin-1.jpg',
    productName: 'Maple Oat Muffin',
    price: 8.95,
  };
  return (
    <Layout>
      <PageHeader title={`Product page: ${id}`} />
      <section className="py-10">
        <div className="container grid sm:grid-cols-2 gap-10">
          <div>
            <img src={single.img} alt={single.productName} />
          </div>
          <div>
            <h2 className="text-yellow-900 font-semibold text-2xl pb-8">{single.productName}</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse excepturi velit est
              eligendi itaque nam harum architecto, officiis ducimus ab?
            </p>
            <div className="py-5">
              <input type="number" className="bg-gray-300 w-12 h-10 p-1 rounded" />
            </div>
            <button className="uppercase text-yellow-900 py-1 px-3 border-2 border-yellow-900">
              Add to cart
            </button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Product;
