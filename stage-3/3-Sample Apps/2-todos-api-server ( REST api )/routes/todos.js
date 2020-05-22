

var express = require('express');
var router = express.Router();


let todos = [
    { id: 1, title: 'Item-1', completed: false },
    { id: 2, title: 'Item-2', completed: false },
    { id: 3, title: 'Item-3', completed: false },
    { id: 4, title: 'Item-4', completed: false }
]

/**
 * 
 *  rest-api
 * 
 *  GET  /api/todos
 *  GET  /api/todos/{id}
 *  POST /api/todos
 *  PUT  /api/todos/{id} 
 *  DELETE  /api/todos/{id} 
 * 
 */

router
    .get('/', function (req, res, next) {
        res.status(200).json(todos)
    })
    .get('/:id', function (req, res, next) {
        const id = Number.parseInt(req.params.id)
        const todo = todos.find(todo => todo.id === id)
        if (!todo) {
            res.status(404).json({ message: 'Todo not exist' })
        } else
            res.status(200).json(todo)
    })
    .post('/', (req, res, next) => {
        const body = req.body
        // server side validation
        if (!body.title) {
            res.status(400).json({ message: 'title property missing' })
        }
        else {
            const newTodo = { id: todos.length + 1, title: body.title, completed: body.completed }
            todos = todos.concat(newTodo)
            res.status(201).json(newTodo)
        }
    })
    .put('/:id', (req, res, next) => {
        const id = Number.parseInt(req.params.id)
        const body = req.body // {title:''}  | {completed:''}
        let updatedTodo = {}
        todos = todos.map(todo => {
            if (todo.id === id) {
                updatedTodo = { ...todo, ...body }
                return updatedTodo
            }
            else return todo
        })
        res.status(200).json(updatedTodo)
    })
    .delete('/:id', (req, res, next) => {
        const id = Number.parseInt(req.params.id)
        todos = todos.filter(todo => todo.id !== id)
        res.status(200).json({ count: 1 })
    })


module.exports = router;
