import React from 'react';

const BillingInfo = () => {
  return (
    <div>
      <h2 className="uppercase font-semibold text-yellow-800">Billing Information</h2>
      <form className="space-y-5 mt-5">
        <div>
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-2 border border-yellow-500"
          />
        </div>
        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <input
              type="text"
              placeholder="Phone"
              className="w-full p-2 border border-yellow-500"
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="Email"
              className="w-full p-2 border border-yellow-500"
            />
          </div>
        </div>
        <div>
          <input
            type="text"
            placeholder="Address"
            className="w-full p-2 border border-yellow-500"
          />
        </div>
        <div>
          <textarea
            name="add_info"
            placeholder="Additional Information"
            className="w-full p-2 border border-yellow-500"
            cols="10"
            rows="5"></textarea>
        </div>
        <div>
          <button className="bg-yellow-500 text-white uppercase p-2 font-semibold">
            Place Order
          </button>
        </div>
      </form>
    </div>
  );
};

export default BillingInfo;
