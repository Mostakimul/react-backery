import React from 'react';
import PageHeader from '../components/shared/PageHeader';
import Layout from '../layout/Layout';

const ShopMenu = () => {
  const ourMenus = [
    {
      id: 1,
      title: 'Sourdough',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra suspendisse potenti nullam.',
      price: 3.99,
      category: 'Breads',
    },
    {
      id: 2,
      title: 'Sourdough',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra suspendisse potenti nullam.',
      price: 3.99,
      category: 'Breads',
    },
    {
      id: 3,
      title: 'Sourdough',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra suspendisse potenti nullam.',
      price: 3.99,
      category: 'Breads',
    },
    {
      id: 4,
      title: 'Sourdough',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra suspendisse potenti nullam.',
      price: 3.99,
      category: 'Breads',
    },
    {
      id: 5,
      title: 'Sourdough',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra suspendisse potenti nullam.',
      price: 3.99,
      category: 'Cakes',
    },
    {
      id: 6,
      title: 'Sourdough',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra suspendisse potenti nullam.',
      price: 3.99,
      category: 'Cakes',
    },
    {
      id: 7,
      title: 'Sourdough',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra suspendisse potenti nullam.',
      price: 3.99,
      category: 'Cookies',
    },
    {
      id: 8,
      title: 'Sourdough',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra suspendisse potenti nullam.',
      price: 3.99,
      category: 'Breads',
    },
    {
      id: 9,
      title: 'Sourdough',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra suspendisse potenti nullam.',
      price: 3.99,
      category: 'Cookies',
    },
    {
      id: 10,
      title: 'Sourdough',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra suspendisse potenti nullam.',
      price: 3.99,
      category: 'Cookies',
    },
  ];

  return (
    <Layout>
      <PageHeader title="Our Menu" />
      <section className="bg-gray-100 py-10">
        <div className="container">
          <div className="bg-white text-yellow-900 font-bold text-lg flex space-x-10 uppercase justify-center items-center w-5/6 mx-auto py-5">
            <h2>Breads</h2>
            <h2>Cakes</h2>
            <h2>Cookies</h2>
            <h2>Pastries</h2>
          </div>

          {/* list */}
          <div className="grid sm:grid-cols-2 gap-10 mt-10">
            {ourMenus.map((menu) => (
              <div key={menu.id} className="w5/6 mx-auto bg-gray-50 rounded shadow p-2">
                <h2 className="text-yellow-900 font-semibold text-lg pb-2">{menu.title}</h2>
                <p className="text-gray-600">{menu.description}</p>
                <p className="text-yellow-500 font-semibold text-lg">$ {menu.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ShopMenu;
