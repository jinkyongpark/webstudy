var express = require('express');
var app = express();
var server = app.listen(3000, function(){
    console.log("Express server has started on port 3000")
})

app.use('/', express.static(__dirname + '/public'));
app.use('/volume', express.static('client.html'));