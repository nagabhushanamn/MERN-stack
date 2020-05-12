
const express = require('express')

// const logger = require('./middlewares/logger')
const logger = require('morgan')
var favicon = require('serve-favicon')
let bodyParser = require('body-parser')

const app = express()



/* app.get('/', (request, response) => {
    // response.write("welcome")
    // response.end()
    // -or-
    response.send("welcome")  // text/plain   , text/html
})
 */

/* app.get('/blocks', (request, response) => {

    let blocks = `
        <ul>
        <li>Fixed</li>
        <li>Movable</li>
        <li>Rotating Blocks</li>
        </ul>
    `
    response.send(blocks)

    // var blocks = ['Fixed', 'Movable', 'Rotating'];
    // response.send(blocks) // appliction/json
    // - or-
    // response.json(blocks);


})
 */


/* app.get("/search", (request, response) => {
    //..
    response.redirect("http://www.google.com") //  Location : http://www.google.com
})
 */




/**
 * 
 *  // Middleware(s)
 * 
 *      - function(s) which executes between request & response
 * 
 */



// app.get('/', (req, res) => {
//     res.sendFile(__dirname + "/public/index.html") // Non-blocking IO via stream
// })

// app.get('/css/bootstrap.css', (req, res) => {
//     res.sendFile(__dirname + "/public/css/bootstrap.css") // Non-blocking IO via stream
// })

// app.get('/images/expressjs.png', (req, res) => {
//     res.sendFile(__dirname + "/public/images/expressjs.png") // Non-blocking IO via stream
// })

var path = require('path')

app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))
app.use(logger('dev'));
app.use(express.static(__dirname + "/public"))
app.use((req, res, next) => {
    console.log("Validation...")
    // if validation success
    next()
})

app.post("/blocks", (req, res, next) => {
    console.log("Authentication...")
    // if authentication success
    next()
})

app.use((req, res, next) => {
    console.log("Data parsing...")
    // if authentication success
    next()
})

const blocks = {
    Fixed: 'Fastened securely in position',
    Movable: 'Capable of being moved',
    Rotating: 'Moving in a circle around its center'
}


app.get('/blocks', (request, response) => {
    response.json(Object.keys(blocks));
})


app.param(':blockType', (req, res, next) => {
    let blockType = req.params.blockType
    blockType = blockType[0].toUpperCase() + blockType.slice(1).toLowerCase()
    req.blockType = blockType
    next()
})

app.get('/blocks/:blockType', (request, response) => {
    let blockType = request.blockType
    console.log(blockType)
    if (blocks[blockType])
        response.json(blocks[blockType]);
    else
        response.status(404).send("No such block")
})

app.post('/blocks', bodyParser.json(), bodyParser.urlencoded({ extended: false }), (req, res) => {
    let newBlock = req.body
    console.log(newBlock)
    blocks[newBlock.name] = newBlock.description
    res.status(201).json({ message: 'New Block created successfully' })
})



app.listen(3000, () => {
    console.log("server Up")
})