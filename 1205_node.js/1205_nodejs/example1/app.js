var fs = require('fs');
 
var http = require('http');
 
http.createServer(function (request, response) {
    // HTML File Read
    fs.readFile('index.html', function(error, data) {
        response.writeHead(200, {'Content-Type': 'text/html'});
        response.end(data);
    });
    
}).listen(8888, function() {
    console.log('Server running at http://127.0.0.1:8888');
});