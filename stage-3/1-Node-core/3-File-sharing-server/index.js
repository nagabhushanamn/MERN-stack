

const http = require('http')
const fs = require('fs')

const server = http.createServer() // EventEmitter


server.on('request', (request, response) => {
    const url = request.url
    if (url === "/") {
        // respond with index.html
        fs.readFile(__dirname + "/public/index.html", (err, data) => {
            if (err) throw err
            response.writeHead(200, { 'Content-Type': 'text/html' })
            response.write(data)
            response.end()
        })
        return
    }
    if (url === "/css/bootstrap.css") {
        fs.readFile(__dirname + "/public/css/bootstrap.css", (err, data) => {
            if (err) throw err
            response.writeHead(200, { 'Content-Type': 'text/css' })
            response.write(data)
            response.end()
        })
        return
    }


    const servePDFResponse = (file) => {
        let readableStream = fs.createReadStream(file)
        response.setHeader('Content-Type', 'application/pdf');
        response.setHeader('Content-disposition', `attachment; ${file}`);
        readableStream.pipe(response)
    }


    if (url === "/React") {
        let file = __dirname + '/PPT/React.pdf'
        servePDFResponse(file)
        return
    }
    if (url === "/Node.js.pdf") {
        let file = __dirname + '/PPT/Node.js.pdf'
        servePDFResponse(file)
        return
    }
    if (url === "/JSBP.pdf") {
        let file = __dirname + '/PPT/JSBP.pdf'
        servePDFResponse(file)
        return
    }
    if (url === "/Express.js.pdf") {
        let file = __dirname + '/PPT/Express.js.pdf'
        servePDFResponse(file)
        return
    }
    response.writeHead(404)
    response.write("Invalid Request - 404")
    response.end()

})

server.listen(8080, () => {
    console.log('Server listening at http://localhost:8080')
})