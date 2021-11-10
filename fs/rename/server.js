const http = require('http');
const fs = require('fs');
const { RSA_X931_PADDING } = require('constants');
var path1 = "filerename.txt"
var path2 = "file2.txt"


const server = http.createServer(function (req, res) {
    //res.statusCode = 404
    //res.setHeader('content-type', 'text/html')
    res.writeHead(200, { "content-type": "text/html;charset=utf8" })
    fs.rename(path1, path2, (err) => {
        if (err) throw err
        res.write("file was renamed")
        res.end()
    })

});
server.listen(3000);
console.log('connected')