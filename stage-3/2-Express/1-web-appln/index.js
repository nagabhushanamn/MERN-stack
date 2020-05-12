

const express = require('express')
const app = express()

app.get('/', (request, response) => {
    // response.write("welcome")
    // response.end()
    // -or-
    response.send("welcome")
})
app.get("/todos", (request, response) => {
    response.send("GET /todos")
})
app.post("/todos", (request, response) => {
    response.send("POST /todos")
})

app.listen(8080, () => {
    console.log("server Up")
})