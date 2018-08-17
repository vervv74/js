var express = require('express');
var app = express();

app.get('/', (req, res)=>{
    res.cookie('someCookie', 'this is a cookie', {
        httpOnly: true,
        maxAge: 2000
    });
    res.end('qwe');
});
app.listen(8080);