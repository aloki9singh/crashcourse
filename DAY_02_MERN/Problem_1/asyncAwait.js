const fs = require('fs').promises;

const readFiles = async (files) => {
  const data = [];
  for (const file of files) {
    try {
      const content = await fs.readFile(file, 'utf8');
      data.push(content);
    } catch (err) {
      throw err;
    }
  }
  return data;
};

const files = ['file1.txt', 'file2.txt', 'file3.txt'];

const fetchData = async () => {
  try {
    const data = await readFiles(files);
    console.log('Data:', data);
  } catch (err) {
    console.error('Error:', err);
  }
};

fetchData();
