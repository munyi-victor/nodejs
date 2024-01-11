var http = require('http')
var dt = require('./firstModule')

http.createServer(function (req, res) {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write("Date and time is " + dt.MyDateTime());
  res.end();
}).listen(8080);