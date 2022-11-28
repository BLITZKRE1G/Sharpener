const http = require('http');
let routes = require('./routes');

http.createServer(routes.handler).listen(8080);
console.log(routes.text);
