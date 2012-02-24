//var http = require('http');
//http.createServer(function (req, res) {
//  res.writeHead(200, {'Content-Type': 'text/plain'});
//  res.end('Hello World\nApp (kishorepatil) is running..');
//}).listen(14881);
var http = require('http');
var fs = require('fs');
var path = require('path');
http.createServer(function (request, response) {
    console.log('request starting...');
    var filePath = '.' + request.url;
    if (filePath == './')
        filePath = './index.htm';
    var extname = path.extname(filePath);
    var contentType = 'text/html';
    switch (extname) {
        case '.js':
            contentType = 'text/javascript';
            break;
        case '.css':
            contentType = 'text/css';
            break;
        }
        console.log('url requested: ' + request.url);
    path.exists(filePath, function (exists) {
        if (exists) {
            fs.readFile(filePath, function (error, content) {
                if (error) {
                    response.writeHead(500);
                    response.end();
                }
                else {
                    response.writeHead(200, { 'Content-Type': contentType });
                    response.end(content, 'utf-8');
                }
            });
        }        else {
            response.writeHead(404);
            response.end();
        }
    });
}).listen(14881); 