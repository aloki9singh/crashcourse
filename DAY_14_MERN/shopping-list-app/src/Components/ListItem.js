// ListItem.js

import React from 'react';

const ListItem = ({ item, onToggle }) => {
  return (
    <li className="flex items-center justify-between py-2 border-b">
      <span>{item.name}</span>
      <input type="checkbox" checked={item.purchased} onChange={() => onToggle(item.id)} />
    </li>
  );
};

export default ListItem;
