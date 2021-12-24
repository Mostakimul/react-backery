import React from 'react';
import DirectContact from '../components/contact/DirectContact';
import Form from '../components/contact/Form';
import Layout from '../layout/Layout';

const Contact = () => {
  return (
    <Layout>
      <main className="bg-gray-100">
        <section className="container py-10">
          <div className="grid sm:grid-cols-8 md:grid-cols-12 gap-5">
            <div className="sm:col-span-5 md:col-span-7">
              <Form />
            </div>
            <div className="sm:col-span-3 md:col-span-5">
              <DirectContact />
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default Contact;
