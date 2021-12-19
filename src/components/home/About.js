import React from 'react';

const About = () => {
  const lists = [
    {
      id: 1,
      svg: 'M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z',
      heading: 'FRESH INGREDIENTS',
      para: 'All of our products are made with the finest quality ingredients and guaranteed fresh.',
    },
    {
      id: 2,
      svg: 'M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7',
      heading: 'BAKED WITH LOVE',
      para: 'We are passionate about baking. Each of our handmade items are carefully baked with love.',
    },
    {
      id: 3,
      svg: 'M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z',
      heading: 'ON TIME DELIVERY',
      para: 'We are very punctual and promise to deliver fresh made products to every customer on time.',
    },
  ];

  return (
    <div className="container py-10">
      <div className="grid md:grid-cols-3 gap-5">
        {lists.map((ls) => (
          <div key={ls.id} className="flex  items-center gap-5">
            <svg
              className="w-32 h-32 text-yellow-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d={ls.svg} />
            </svg>
            <div>
              <h2 className="text-yellow-600 font-semibold text-lg">{ls.heading}</h2>
              <p className="font-light text-gray-800">{ls.para}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
