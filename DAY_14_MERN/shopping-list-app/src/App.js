// App.js

import React, { useState } from 'react';
import AddItemForm from './Components/AddItemForm';
import ListItem from './Components/ListItem';
import ShoppingList from './Components/Shoppinglist';

const App = () => {
  const [items, setItems] = useState([
    { id: 1, name: 'Apples', purchased: false },
    { id: 2, name: 'Bananas', purchased: false },
    { id: 3, name: 'Milk', purchased: true },
  ]);

  const addItem = itemName => {
    const newItem = {
      id: Math.random(),
      name: itemName,
      purchased: false,
    };
    setItems(prevItems => [...prevItems, newItem]);
  };

  const toggleItem = itemId => {
    setItems(prevItems =>
      prevItems.map(item =>
        item.id === itemId ? { ...item, purchased: !item.purchased } : item
      )
    );
  };

  return (
    <div className="container mx-auto p-4">
      <ShoppingList items={items} />
      <AddItemForm onSubmit={addItem} />
      <ul>
        {items.map(item => (
          <ListItem key={item.id} item={item} onToggle={toggleItem} />
        ))}
      </ul>
    </div>
  );
};

export default App;
