
const express = require('express')
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


// -or- 

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

app.get('/blocks', (request, response) => {
    var blocks = ['Fixed', 'Movable', 'Rotating'];
    setTimeout(() => {
        response.json(blocks);
    }, 5000)
})





app.listen(3000, () => {
    console.log("server Up")
})