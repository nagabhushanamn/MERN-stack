

const express = require('express')
const cors=require('cors')
const app = express()

let courses = [
    "HTML",
    "CSS",
    "SASS",
    "BOOTSTRAP",
    "JAVASCRIPT",
    "JAVA",
    "JAVA-SPRING",
    "NODE.JS"
]
app.use(cors())
app.get("/search", (req, res) => {
    let q = req.query.q
    let result = courses.filter(course => course.startsWith(q))
    res.json(result)
})

app.listen(8080, () => {
    console.log("server running at http://localhost:8080")
})