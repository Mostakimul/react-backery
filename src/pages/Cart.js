import React from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/shared/PageHeader';
import Layout from '../layout/Layout';

const Cart = () => {
  return (
    <Layout>
      <PageHeader title="Cart" />
      <section className="container">
        <table class="table-auto w-3/4 mx-auto my-10 border-collapse border border-gray-300">
          <thead className="text-center bg-gray-300">
            <tr>
              <th className="py-5">Product</th>
              <th className="py-5">Price</th>
              <th className="py-5">Quantity</th>
              <th className="py-5">Total</th>
            </tr>
          </thead>
          <tbody className="text-center">
            <tr>
              <td className="py-3 border border-collapse border-gray-300">Ciabatta</td>
              <td className="py-3 border border-collapse border-gray-300">$4.50</td>
              <td className="py-3 border border-collapse border-gray-300">1</td>
              <td className="py-3 border border-collapse border-gray-300">$4.50</td>
            </tr>
          </tbody>
        </table>
        <div className="flex justify-end my-10">
          <Link
            to={'/checkout'}
            className="uppercase text-yellow-900 py-1 px-3 border-2 border-yellow-900">
            Proceed To Checkout
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Cart;
