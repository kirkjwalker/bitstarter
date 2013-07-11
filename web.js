//#!/usr/bin/env node

var fs = require('fs');
var express = require('express');

var app = express.createServer(express.logger());

var content = fs.readFileSync("index.html");
var buffer = new Buffer(content,"utf-8");

console.log("buffer=" + buffer);
app.get('/', function(request, response) {
  response.send(buffer.toString('utf-8'));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
