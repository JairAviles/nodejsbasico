const fs = require('fs')
const ops = require('./src/fileops')

let incValue;

fs.readFile('./resources/number.txt', 'utf8', (err, text) => {
  if(err) throw err;
  const numbers = text.split('\n');
  incValue = ops.incrementValues(numbers);
  fs.writeFile('./resources/numbernew.txt', incValue.join('\n'), (err, response) => {
    if(err) throw err;
  });
  
});

fs.readFile('./resources/name.txt', 'utf8', (err, text) => {
  if(err) throw err;
  const names = text.split('\n');
  greetNames = ops.callNames(names);
  greetNames.map(greet => console.log(greet));
});
