import React from 'react';

const Client = () => {
  return (
    <div className="container py-10">
      <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
        <div className="mx-auto">
          <img
            src="/images/client-1.png"
            alt="Client-1"
            className="w-2/4 mx-auto opacity-50 hover:opacity-100 transition-opacity duration-300"
          />
        </div>
        <div className="mx-auto">
          <img
            src="/images/client-2.png"
            alt="Client-2"
            className="w-2/4 mx-auto opacity-50 hover:opacity-100 transition-opacity duration-300"
          />
        </div>
        <div className="mx-auto">
          <img
            src="/images/client-3.png"
            alt="Client-3"
            className="w-2/4 mx-auto opacity-50 hover:opacity-100 transition-opacity duration-300"
          />
        </div>
        <div className="mx-auto">
          <img
            src="/images/client-4.png"
            alt="Client-4"
            className="w-2/4 mx-auto opacity-50 hover:opacity-100 transition-opacity duration-300"
          />
        </div>
        <div className="mx-auto">
          <img
            src="/images/client-5.png"
            alt="Client-5"
            className="w-2/4 mx-auto opacity-50 hover:opacity-100 transition-opacity duration-300"
          />
        </div>
        <div className="mx-auto">
          <img
            src="/images/client-2.png"
            alt="Client-6"
            className="w-2/4 mx-auto opacity-50 hover:opacity-100 transition-opacity duration-300"
          />
        </div>
      </div>
    </div>
  );
};

export default Client;
