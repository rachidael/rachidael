const http = require('http');
const server = http.createServer(function (req, res) {
    res.writeHead(200, { 'content-type': 'text/html;charset=utf-8' });
    if (req.url == "/home") {
        res.statusCode = 200
        res.write("welcome to home")

    } else if (req.url == "/contact") {
        res.statusCode = 200
        res.write("welcome to contact page ")
    } else {
        res.statusCode = 404
        res.write("Page not found")
    }
    res.end()
});
server.listen('3000');
console.log('update code ');