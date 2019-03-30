var express = require('express');
var fs = require('fs');

var app = express();
var server = app.listen(3000, function(){
    console.log("Express server has started on port 3000")
})

app.use('/', express.static(__dirname + '/public'));

app.get('/student', function(req, res){
	id = req.query.id;//id를 받음
	fs.readFile('assets/sample1.json', function(err, data) {//file읽음
		var values = JSON.parse(data).values;
		var result;
		
		for(var i = 0; i < values.length; i += 1){
			var candidate = values[i];
			console.log(candidate.id);
			if(candidate.id == id){
				result = candidate;
				break;
			}
		}
		
		result = JSON.stringify(result);
		
		res.writeHead(200, {'Content-Type': 'application/json'});
		res.write(result);
		res.end();
	});
})