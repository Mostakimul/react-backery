import React from 'react';

const OrderSummary = () => {
  return (
    <div>
      <h2 className="uppercase font-semibold text-yellow-800">Your Order</h2>
      <table class="table-auto w-full my-10 border-collapse border border-gray-300">
        <thead className="text-center bg-gray-300">
          <tr>
            <th className="py-5">Product</th>
            <th className="py-5">Total</th>
          </tr>
        </thead>
        <tbody className="text-center">
          <tr>
            <td className="py-3 border border-collapse border-gray-300">Ciabatta * 1</td>
            <td className="py-3 border border-collapse border-gray-300">$4.50</td>
          </tr>
          <tr className="bg-gray-100">
            <td className="py-3 font-semibold text-yellow-500 border border-collapse border-gray-300">
              Grand Total
            </td>
            <td className="py-3 font-semibold text-yellow-500 border border-collapse border-gray-300">
              $ 4.50
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default OrderSummary;
