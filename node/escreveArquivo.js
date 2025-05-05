const fs = require('fs');

const filePath = 'file.txt';
const stream = fs.createWriteStream(filePath);
const MAX = 1_000_000; // 1 billion

let i = 1;

function write() {
  let ok = true;

  while (i <= MAX && ok) {
    const number = `${i} `;
    i++;
    ok = stream.write(number);
  }

  if (i <= MAX) {
    stream.once('drain', write);
  } else {
    stream.end();
    console.log('Done writing 1 billion numbers');
  }
}

write();
