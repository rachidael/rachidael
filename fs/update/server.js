const http = require('http');
const fs = require('fs');
var path = "fileto_update.txt"
var pathAppended = 'fileappended.txt'
var content = "this file created in update directory"
var content2 = "hi this update directory"

const server = http.createServer(function (req, res) {
    res.writeHead(200, { "content-type": "text/html;charset=utf8" })

    fs.writeFile(path, content, { flag: 'a' }, (err, data) => {
        if (err) throw err
        console.log("data created ")
        res.write("content was created")
        res.end();
    })

    /*fs.appendFile(pathAppended, content2, 'utf8', (err) => {
        if (err) throw err
        res.write('file created and data was appended !')
        console.log("append data")
        res.end()
    })*/


});
server.listen(3000);
console.log('connected')