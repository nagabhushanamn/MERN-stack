

const http = require('http')

const server = http.createServer();
server.on('request', (request, response) => {

    const url = request.url
    const method = request.method
    const language = request.headers['accept-language']

    if (method === 'GET' && url === "/") {
        response.write("welcome")
        response.end()
    }
    if (method === 'GET' && url === "/todos") {
        response.write("GET /todos")
        response.end()
    }
    if (method === 'POST' && url === "/todos") {
        // read todo data from request
        // save in database
        response.write("POST /todos")
        response.end()
    }
    if (method === 'GET' && url === "/blog" && language === "ar") {
        response.write("GET /blog : language=ar")
        response.end()
    }
    if (method === 'GET' && url === "/blog" && language === "en") {
        response.write("GET /blog : language=en")
        response.end()
    }

    //...
    // 500 request

})

server.listen(8080, () => {
    console.log('server Up')
})