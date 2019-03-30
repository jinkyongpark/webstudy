var express = require('express');
var http = require("http");
var request = require('request');

var app = express();
var server = app.listen(80, function(){
    console.log("Express server has started on port 3000")
})

app.use('/', express.static(__dirname + '/public'));

var client_id = '1pWpGySN4833SiLxa4TP';//네이버에서 받아서 실행해보기
var client_secret = 'MdmJou70nx';
app.get('/search', function (req, res) {
   var api_url = 'https://openapi.naver.com/v1/search/blog?query=' + encodeURI(req.query.text); // json 결과
//   var api_url = 'https://openapi.naver.com/v1/search/blog.xml?query=' + encodeURI(req.query.query); // xml 결과
   var options = {
       url: api_url,
       headers: {'X-Naver-Client-Id':client_id, 'X-Naver-Client-Secret': client_secret}
    };
   request.get(options, function (error, response, body) {
     if (!error && response.statusCode == 200) {
       res.writeHead(200, {'Content-Type': 'text/json;charset=utf-8'});
       res.end(body);
     } else {
       res.status(response.statusCode).end();
       console.log('error = ' + response.statusCode);
     }
   });
 });