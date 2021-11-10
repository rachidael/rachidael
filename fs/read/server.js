const http = require('http');
const fs = require('fs');
var path = "filetoread.html"
const server = http.createServer(function (req, res) {
    res.writeHead(200, { 'content-type': 'text/html;charset=utf8' });
    //res.end('it works very goog ');
    fs.readFile(path, 'utf8', (err, data) => {
        if (err) throw err
        res.write(data)
    })
});
server.listen(3000);
console.log('connected')