var http = require('http');
var fs = require('fs');
http.createServer(function (req, res) {
  console.log(req);
  fs.readFile('asset/sample1.json', function(err, data) {
	res.setHeader('Access-Control-Allow-Origin', '*');
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.write(data);
    res.end();
  });
}).listen(8080);