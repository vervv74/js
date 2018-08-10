var http = require('http');
 var server = http.createServer((req, res) =>{
     console.log(req.httpVersion);
 }).listen(8081);