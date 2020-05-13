


const express = require('express')

const todosRouter = require('./routes/todos')


const app = express()

app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

app.use(express.static(__dirname + "/public"))


app.use("/todos", todosRouter)




app.listen(3000, () => {
    console.log("server UP")
})