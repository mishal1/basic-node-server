var express = require('express');
var app = express();
var server = require('http').createServer(app);
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', function(request, response){
  response.render('index.ejs', {name: null});
});

app.post('/', function(request, response){
  response.render('index.ejs', {name: request.body.name});
});

server.listen(3000, function(){
  console.log("Server listening on port 3000")
});

module.exports = server;