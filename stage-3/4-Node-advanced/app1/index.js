const http = require('http');

http.createServer((req, res) => {
    console.log("New request received...")
    let number = 0;
    for (let i = 0; i < 10000000000; i++) {
        number += 1
    }
    res.writeHead(200);
    res.end(`server - ${process.pid} => ${number}`);
}).listen(8000);
