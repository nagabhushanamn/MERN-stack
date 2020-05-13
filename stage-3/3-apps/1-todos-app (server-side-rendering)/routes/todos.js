var express = require('express');
var router = express.Router();



//-------------------------------------------
// in-memory database
//-------------------------------------------

let todos = [
  { id: 1, title: 'Item-1', completed: false },
  { id: 2, title: 'Item-2', completed: false },
  { id: 3, title: 'Item-3', completed: false },
]

//-------------------------------------------

router
  .get('/', function (req, res, next) {
    let action = req.query.action
    if (action === 'delete') {
      let id = Number.parseInt(req.query.id)
      todos = todos.filter(todo => todo.id !== id)
      res.redirect("/todos")
    } else
      res.render('index', { title: 'Todos', todos });
  })
  .post('/', function (req, res, next) {
    let body = req.body
    let { title } = body
    let newTodo = { id: todos.length + 1, title: title, completed: false }
    todos = todos.concat(newTodo)
    res.redirect("/todos")
  });

module.exports = router;
