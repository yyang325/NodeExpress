var http = require('http');
var fs = require('fs');

http.createServer(function (resquest, response){
    response.writeHead(200, {'Content-Type': 'text/html'});
    fs.readFile('./index.html', null, function(error, data){
        if(error){
            response.writeHead(404);
            response.write('File not Found');
        } else {
            response.write(data);
        }
        response.end();
    });
}).listen(8000);

console.log('server starting at localhost:8000');
