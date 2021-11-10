const http = require('http');
const fs = require('fs');
var path1 = "file1.txt"
var path2 = "file2.txt"


const server = http.createServer(function (req, res) {
    res.writeHead(200, { "content-type": "text/html;charset=utf8" })
    fs.unlink(path1, (err) => {
        if (err) throw err
        res.write("file was deleted")
        res.end()
    })

});
server.listen(3000);
console.log('connected')