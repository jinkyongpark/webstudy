var express = require('express');
var app = express();
var server = app.listen(3000, function(){
    console.log("Express server has started on port 3000")
})

app.use('/', express.static(__dirname + '/public'));


app.get('/about', function(req, res){
	res.send('this is about');
})

app.get('/topic', function(req, res){
	res.send('this is topic');
})