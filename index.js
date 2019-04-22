const http = require('http')
const fs = require('fs')

const hostname = '127.0.0.1'
const port = 3000

const server = http.createServer((req, res) => {
  fs.readFile('./resources/my_page.html', (err, data) =>{
    if (err) { console.err(err); return; }
    res.end(data);
  });
});

console.log('Server running...')
server.listen(port, hostname, () => {
  console.log(`Running server: ${hostname}:${port}`)
});
