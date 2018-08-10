var http = require('http');

var server = http.createServer();
var server = http.Server();

server.on('request', function(request, response){
    console.log('Connection established!');    
    console.log(request.method);

    // Завершает конфигурацию ответ
    response.end('qwe');
    // response.end("Responce is configured!", 'utf8', () => { console.log('finish'); });
});

server.listen(8081);

server.on('listening', function(){
    console.log('Server running on port 8080');
});