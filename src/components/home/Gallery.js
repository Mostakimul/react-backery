import React from 'react';

export const Gallery = () => {
  return (
    <div className="container py-10">
      <div className="grid gap-5 md:grid-cols-2">
        {/* gallery */}
        <div>
          <h2 className="text-center text-2xl uppercase text-yellow-800 pb-2 font-bold">
            Our Gallery
          </h2>
          <p className="text-center font-light pb-10">
            Photos of our delicious and creative creations
          </p>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            <div>
              <img src="/images/img-1.jpg" alt="img-1" className="rounded shadow" />
            </div>
            <div>
              <img src="/images/img-5.jpg" alt="img-5" className="rounded shadow" />
            </div>
            <div>
              <img src="/images/img-12.jpg" alt="img-12" className="rounded shadow" />
            </div>
            <div>
              <img src="/images/img-13.jpg" alt="img-13" className="rounded shadow" />
            </div>
            <div>
              <img src="/images/img-15.jpg" alt="img-15" className="rounded shadow" />
            </div>
            <div>
              <img src="/images/img-20.jpg" alt="img-20" className="rounded shadow" />
            </div>
          </div>
        </div>
        {/* Faqs */}
        <div>
          <h2 className="text-center text-2xl uppercase text-yellow-800 pb-2 font-bold">FAQs</h2>
          <p className="text-center font-light pb-10">
            Some of our most frequently asked questions
          </p>
        </div>
      </div>
    </div>
  );
};
