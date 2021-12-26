import React from 'react';
import PageHeader from '../components/shared/PageHeader';
import Layout from '../layout/Layout';

const Signup = () => {
  return (
    <Layout>
      <PageHeader title="Register" />
      <section className="bg-gray-100 py-10">
        <div className="container">
          <form className="w-2/4 mx-auto space-y-5">
            <div>
              <input type="text" placeholder="Username" className="w-full p-2" />
            </div>
            <div>
              <input type="email" placeholder="Email" className="w-full p-2" />
            </div>
            <div>
              <input type="password" placeholder="Password" className="w-full p-2" />
            </div>
            <button className="bg-yellow-500 text-white uppercase p-2 font-semibold">
              Register
            </button>
          </form>
        </div>
      </section>
    </Layout>
  );
};

export default Signup;
