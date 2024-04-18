const fetch = require('node-fetch');

const fetchData = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    const data = await response.json();
    console.log('Data:', data);
  } catch (err) {
    console.error('Error:', err.message);
  }
};

fetchData();
