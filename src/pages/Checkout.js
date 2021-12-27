import React from 'react';
import BillingInfo from '../components/checkout/BillingInfo';
import OrderSummary from '../components/checkout/OrderSummary';
import PageHeader from '../components/shared/PageHeader';
import Layout from '../layout/Layout';

const Checkout = () => {
  return (
    <Layout>
      <PageHeader title="Checkout" />
      <section className="py-10">
        <div className=" container grid sm:grid-cols-2 gap-5">
          {/* Billing Information */}
          <BillingInfo />
          {/* Order Summary */}
          <OrderSummary />
        </div>
      </section>
    </Layout>
  );
};

export default Checkout;
