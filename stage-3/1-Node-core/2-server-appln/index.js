

const http = require('http')
const server = http.createServer() // EventEmitter

server.on('request', (request, response) => {
    const url = request.url
    console.log(url)
    if (url === "/") {
        response.write("welcome to Node.js world")
        response.end()
        return
    }
    response.write("Unknown Request - 404")
    response.end()
})

server.listen(8080, () => {
    console.log("server listening at http://localhost:8080")
})

