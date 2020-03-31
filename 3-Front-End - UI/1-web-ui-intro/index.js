console.log("-index.js-")

// debugger

//-----------------------------------------------------------
// javascript with DOM-api ( actual html-page in browser)
//-----------------------------------------------------------


console.log('DOM ready..')

// let messageBox = document.getElementsByClassName('alert-info')[0];
// let gmBtn = document.getElementsByClassName('btn-primary')[0];
// let gnBtn = document.getElementsByClassName('btn-warning')[0];
// let geBtn = document.getElementsByClassName('btn-danger')[0];

// - or -  from HTML-5 , 

let messageBox = document.querySelector('.alert-info')
let gmBtn = document.querySelector('.btn-primary')
let gnBtn = document.querySelector('.btn-warning')
let geBtn = document.querySelector('.btn-danger')

gmBtn.addEventListener('click', e => {
    messageBox.innerHTML = "good morning 🌺"
})
gnBtn.addEventListener('click', e => {
    messageBox.innerHTML = "good noon 🌞"
})
geBtn.addEventListener('click', e => {
    messageBox.innerHTML = "good evening ⭐️"
})


//-----------------------------------------------------------
// javascript with DOM-api + Timer Api
//-----------------------------------------------------------

// let timeSpan=document.getElementById('time')
// -or-
let timeSpan = document.querySelector('#time')

setInterval(() => {
    let date = new Date()
    timeSpan.innerHTML = date.toLocaleTimeString('en-US', { timeZone: 'Asia/Kolkata' })
}, 1000)



//-----------------------------------------------------------
// Ex.
//-----------------------------------------------------------

// let imgEle=document.querySelector('img')
// imgEle.src='images/2.jpg'