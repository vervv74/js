var express = require('express');
var app = express();
var url = require('url');
var fs = require('fs');
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

app.route('/')
.get((req, res)=>{
      fs.readFile('index.html', (err,data)=>{
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data.toString());
        res.end();
    });
});
app.route('/qwe')
    .post((req, res)=>{
        var data = req.body.text;
        res.writeHead(200, {'Content-Type':'text/html'});
        res.end(data);
        console.log(data);
    });
app.listen(8080);