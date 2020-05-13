

const fs = require('fs')

const express = require('express')
const router = express.Router()


const todos = [
    { id: 1, title: 'Item-1', completed: false },
    { id: 2, title: 'Item-2', completed: false },
    { id: 3, title: 'Item-3', completed: false }
]

router
    .get('/', (req, res, next) => {
        res.render('index', { title: 'Todos', todos })
    })


module.exports = router