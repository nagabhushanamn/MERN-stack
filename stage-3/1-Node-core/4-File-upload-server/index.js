
const http = require('http')
const fs = require('fs')

const server = http.createServer();

server.on('request', (request, response) => {

    const url = request.url

    if (url === "/") {
        fs.readFile(__dirname + "/public/index.html", (err, data) => {
            response.write(data)
            response.end()
        })
    }

    if (url === "/upload") {
        const fileSizeInBytes = request.headers['content-length']
        let uploadedBytes = 0;
        const destFile = fs.createWriteStream('img') //...
        request.on('readable', () => {
            var chunk = null
            while (null !== (chunk = request.read())) {
                uploadedBytes += chunk.length
                var progress = (uploadedBytes / fileSizeInBytes) * 100;
                console.log("progress "+parseInt(progress, 10))
            }
        })
        request.pipe(destFile)
        request.on('end', () => {
            response.write("uploaded")
            response.end()
        })
    }
})

server.listen(8080, () => {
    console.log("server up and running at http://localhost:8080")
})
