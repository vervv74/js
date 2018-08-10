var http = require('http');
var server = http.createServer((req, res)=>{
    res.writeHead(200, {
        'Content-Type': 'text/plain'
    })
    res.write('Done, ok');
    res.end(() => {
        console.log('done');
    });}
    ).listen(8081, ()=>{
    console.log('begin listening');
});
