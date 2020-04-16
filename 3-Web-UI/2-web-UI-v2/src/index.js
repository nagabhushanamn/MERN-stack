
import 'bootstrap/dist/css/bootstrap.css'

import $ from 'jquery'


//-----------------------------------------------
// play with DOM api
//-----------------------------------------------

// let messageBox = document.querySelector('.alert')
// let showBtn = document.querySelector('.btn-primary')
// let hideBtn = document.querySelector('.btn-danger')

// hideBtn.addEventListener('click', e => {
//     messageBox.style.display = 'none'
// })

// showBtn.addEventListener('click', e => {
//     messageBox.style.display = ''
// })


//-----------------------------------------------
// play with DOM api thru jquery
//-----------------------------------------------

const box = $('.alert-info')
$('.btn-primary').click(e => {
    box.show()
})
$('.btn-danger').click(e => {
    box.hide()
})


//-----------------------------------------------
// play with DOM + Timer api
//-----------------------------------------------
const timeEle = document.getElementById('time')
setInterval(() => {
    timeEle.innerHTML = new Date().toLocaleTimeString('en-US', { timeZone: 'Asia/Kolkata' })
}, 1000)


//-----------------------------------------------
// play with XHR api with jquery
//-----------------------------------------------

$('#todos-btn')
    .click(e => {
        $.getJSON("https://jsonplaceholder.typicode.com/todos?_limit=5", todos => {
            console.log(todos)
        })
    })