//to import http module
const http = require('http');

//custom module
const route = require('./route')


//to create a server
server = http.createServer(route.handler);
console.log(route.txt);
server.listen(6262);