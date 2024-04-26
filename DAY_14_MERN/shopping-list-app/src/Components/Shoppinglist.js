// ShoppingList.js

import React from 'react';

const ShoppingList = ({ items }) => {
  return (
    <div className="bg-white p-4 rounded shadow-md">
      <h2 className="text-xl font-semibold mb-4">Shopping List</h2>
      <ul>
        {items.map(item => (
          <li key={item.id} className="flex items-center justify-between py-2 border-b">
            <span>{item.name}</span>
            <input type="checkbox" checked={item.purchased} onChange={() => {}} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShoppingList;
