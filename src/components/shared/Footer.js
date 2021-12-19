import React from 'react';

const Footer = () => {
  return (
    <div className="bg-yellow-900">
      <div className="container text-gray-50 pt-10 pb-5">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mb-5">
          {/* logo */}
          <div>
            <img
              src="/images/bakery-logo-light.png"
              alt="logo"
              srcSet="Website logo"
              className="w-1/4 mx-auto"
            />
          </div>
          {/* working hours */}
          <div>
            <h3 className="uppercase font-bold mb-5">Working hours</h3>
            <p>Monday Friday: 08:00 am – 08:30 pm</p>
            <p>Saturday: 10:00 am – 16:30 pm</p>
            <p>Sunday: 10:00 am – 16:30 pm</p>
          </div>
          {/* happy hours */}
          <div>
            <h3 className="uppercase font-bold mb-5">Happy hours</h3>
            <p>Join us for Happy Hour!</p>
            <p>Enjoy discount baked goods.</p>
            <p>8:00 pm-5:00 pm Daily</p>
          </div>
          {/* subscription */}
          <div>
            <h3 className="uppercase font-bold mb-5">Subscribe</h3>
            <p>Get latest updates and offers.</p>
            <div className="mt-3">
              <input type="email" className="bg-yellow-700 px-1 py-1.5 focus:outline-none" />
              <button className="bg-yellow-500 py-1.5 px-2.5">Send</button>
            </div>
          </div>
        </div>
        <hr className="text-gray-400" />
        {/* copyright */}
        <p className="text-gray-50 text-center mt-5">copyright &#169;2021 Mostakimul Karim</p>
      </div>
    </div>
  );
};

export default Footer;
