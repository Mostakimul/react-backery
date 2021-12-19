import React from 'react';
import cake from '../../img/cake.png';
import cupCake from '../../img/cupcake.png';
import juice from '../../img/orange-juice.png';
import plainCake from '../../img/plain-cake.png';
import shipTruck from '../../img/shipped.png';
import sliceCake from '../../img/slice-cake.png';

const Services = () => {
  const services = [
    {
      id: 1,
      img: sliceCake,
      title: 'Bakery',
      para: 'We have all your favorite traditional bread, 7 days a week! You can choose from a rich variety of cookies, pastries and cakes.',
    },
    {
      id: 2,
      img: plainCake,
      title: 'Cakes',
      para: 'We specialize in custom cakes for all occasions. You can choose from a variety of designs to create the perfect cake for you.',
    },
    {
      id: 3,
      img: juice,
      title: 'Fresh Juices',
      para: 'Choose from a variety of fruits and veggies to make your favorite juice. You can also enjoy a simple fresh squeezed orange juice.',
    },
    {
      id: 4,
      img: cupCake,
      title: 'Catering',
      para: 'We do catering all from weddings to business functions. We offer our authentic food to be simply delivered, or we can serve it for you.',
    },
    {
      id: 5,
      img: shipTruck,
      title: 'Smile Truck',
      para: 'Our new awesome team will be hitting the streets with our best picked up goodies for you and much more.',
    },
    {
      id: 6,
      img: cake,
      title: 'Weddings',
      para: 'From elegant wedding cakes to delicious gift baskets, we can help you create a perfect and unique wedding.',
    },
  ];

  return (
    <div className="container py-8">
      <h2 className="text-center text-2xl uppercase text-yellow-800 pb-10 font-bold">
        Our Services
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {services.map((service) => (
          <div
            key={service.id}
            className="border-2 hover:border-yellow-200 shadow-lg hover:shadow-yellow-50 transition duration-200">
            <img
              src={service.img}
              alt={service.title}
              srcSet="Services of our backery"
              className="w-1/4 border-2 p-5 rounded-full mx-auto mt-5"
            />
            <h2 className="text-xl font-semibold text-yellow-700 pt-5 text-center">
              {service.title}
            </h2>
            <p className="pt-2 pb-5 px-5 font-light">{service.para}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
