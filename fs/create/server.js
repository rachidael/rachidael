const http = require('http');
const fs = require('fs');
var path = "filetocreate.txt"
var pathAppended = 'fileappended.txt'
var content = "this file was created by node js "
var content2 = "hello every body"
var path3 = "filetopen.txt"
const server = http.createServer(function (req, res) {
    res.writeHead(200, { "content-type": "text/html;charset=utf8" });

    /*fs.writeFile(path, content, 'utf8', (err) => {
        if (err) throw err
        console.log("data created ")
        res.write("content was created")
        res.end();
    })*/

    /*fs.appendFile(pathAppended, content2, 'utf8', (err) => {
        if (err) throw err
        res.write('file created and data was appended !')
        console.log("append data")
        res.end()

    })*/

    fs.open(path3, 'a', (err, fd) => {
        if (err) throw err
        console.log(fd)
        res.end()
    })


});
server.listen(3000);
console.log('connected')