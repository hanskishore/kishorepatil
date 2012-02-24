var http = require('http');

http.createServer(function(req, res){
  console.log('received some request');
  res.writeHead(200, {'Content-Type':'text/html'});
  res.end(HtmlForPage());

}).listen(1337);
console.log('running on localhost');

function HtmlForPage()
{
var html =  "<html><head><title>Some Sample page</title>"
            //scripts and styles goes here
            
            +"</head><body>"
            +"<div id='container'>the page to load.</div></body></html>"
return html;
}
