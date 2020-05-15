
var express = require('express');
var router = express.Router();

var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    port:3306,
    user: 'root',
    password: 'root1234',
    database: 'todos_db'
});

connection.connect();

router
    .get('/', (req, res, next) => {
        const sql = `select * from todos where userId='${'nag'}'`
        connection.query(sql, (error, results) => {
            if (error) throw error;
            results = results.map(item => {
                item.completed = item.completed === 0 ? false : true
                return item
            })
            res.status(200).json(results)
        })
    })
    .get('/:id', (req, res, next) => {
        const id = Number.parseInt(req.params.id)
        const sql = `select * from todos where id=${id}`
        connection.query(sql, (error, result) => {
            if (error) throw error;
            let item = result[0]
            item.completed = item.completed === 0 ? false : true
            res.status(200).json(item)
        })
    })
    .post('/', (req, res, next) => {
        let body = req.body
        const sql = `insert into todos(title,userId) values('${body.title}','${'nag'}')`
        connection.query(sql, (error, result) => {
            if (error) throw error;
            res.status(201).json({ id: result.insertId, title: body.title, completed: false })
        })
    })
    .delete('/:id', (req, res, next) => {
        const id = Number.parseInt(req.params.id)
        const sql = `delete from todos where id=${id}`
        connection.query(sql, (error, result) => {
            if (error) throw error;
            res.status(200).json({ count: 1 })
        })
    })
    .patch('/:id', (req, res, next) => {
        const id = Number.parseInt(req.params.id)
        const completed =req.body.completed
        //console.log(id, completed)
        const sql = `update todos set completed=${completed} where id=${id}`
        connection.query(sql, (error, result) => {
            if (error) throw error;
            res.status(200).json({ count: 1 })
        })
    })
    .put('/:id', (req, res, next) => {
        const id = Number.parseInt(req.params.id)
        let body = req.body
        const sql = `update todos set title='${body.title}' where id=${id}`
        connection.query(sql, (error, result) => {
            if (error) throw error;
            res.status(200).json(result)
        })
    })


module.exports = router


