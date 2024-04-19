const fs = require('fs');

const readFiles = (files, callback) => {
  const data = [];
  let count = files.length;

  files.forEach(file => {
    fs.readFile(file, 'utf8', (err, content) => {
      if (err) {
        callback(err);
        return;
      }
      data.push(content);
      count--;
      if (count === 0) {
        callback(null, data);
      }
    });
    
  });
};

const files = ['file1.txt', 'file2.txt', 'file3.txt'];

readFiles(files, (err, data) => {
  if (err) {
    console.error('Error:', err);
    return;
  }
  console.log('Data:', data);
});
