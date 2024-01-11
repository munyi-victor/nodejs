const http = require('http')
const fs = require('fs')

http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' })
  res.end('hello there')
}).listen(3000);