import React, { useState, useMemo } from 'react';

function HeavyComputationComponent({ items }) {
  const [filterTerm, setFilterTerm] = useState('');
  const [result, setResult] = useState([]);

  const handleFilterChange = (e) => {
    setFilterTerm(e.target.value);
  };

  useMemo(() => {
    if (items) {
      console.log(items)
    console.time('computation');
    const filteredItems = items.filter((item) =>
      item.title.toLowerCase().includes(filterTerm.toLowerCase())
    );
    setResult(filteredItems);
    console.timeEnd('computation');
    }
  }, [items, filterTerm]);

  return (
    <div>
      <h2>Heavy Computation Component</h2>
      <input
        type="text"
        placeholder="Filter"
        value={filterTerm}
        onChange={handleFilterChange}
      />
      <ul>
        {result.map((item, index) => (
          <li key={index}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default HeavyComputationComponent;
