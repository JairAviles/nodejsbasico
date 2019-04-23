const express = require('express');
const app = express();

app.get('/app', (req, res) => {
  res.send('I\'m in APP route');
});

app.get('/', (req, res) => {
  res.send('I\'m in HOME route');
});

app.get('*', (req, res) => {
  res.send('Not sure where I\'m');
});

app.listen(3000, () => {
  console.log('Express server is listening in port 3000...');
});
