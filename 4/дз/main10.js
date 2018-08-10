var http = require('http');
var url = require('url');
var path = require('path');
var obj1 = {
    name: 'Иван',
    age: 20,
    bool: true,
};
http.createServer((req, res)=>{
    if (req.url == '/'){
  var file_path = path.join(__dirname, 'index10.html');
        var fs = require('fs');
        fs.readFile('index10.html', function (err, data) {

            // обработка ошибок
            if (err) {
                console.log(err);
                res.writeHead(404, { 'Content-Type': 'text/plain' });
                res.write('Not Found!');

            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                // записать в овет содержимое читаемого файла
                res.write(data.toString());

            }
            res.end();
        });
    }
    else if(req.url == '/request'){
        res.writeHead(200, { 'Content-Type': 'application/json'});
        res.write(JSON.stringify(obj1));
        res.end();
    }
    else{
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end('Resource not found');
    }
   // console.log(url.parse(req.url, true).query);
   // console.log(url.parse(req.url, true).query.a);
   // res.end(url.parse(req.url, true).query.a);
}).listen(8800);