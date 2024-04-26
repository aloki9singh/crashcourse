// AddItemForm.js

import React, { useState } from 'react';

const AddItemForm = ({ onSubmit }) => {
  const [itemName, setItemName] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (itemName.trim()) {
      onSubmit(itemName);
      setItemName('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow-md">
      <h2 className="text-xl font-semibold mb-4">Add Item</h2>
      <div className="flex">
        <input
          type="text"
          value={itemName}
          onChange={e => setItemName(e.target.value)}
          placeholder="Enter item name"
          className="flex-1 mr-2 py-1 px-2 border border-gray-300 rounded focus:outline-none"
        />
        <button type="submit" className="bg-blue-500 text-white py-1 px-4 rounded hover:bg-blue-600 focus:outline-none">
          Add
        </button>
      </div>
    </form>
  );
};

export default AddItemForm;
