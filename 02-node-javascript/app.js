var http = require('http');
var module1 = require('./module1');
var module2 = require('./module2');

http.createServer(function (resquest, response){
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.write('Hello World\n');
    response.write(module2.myVariable);
    module2.myFunction();
    response.end();
}).listen(8000);

console.log('server starting at localhost:8000');
