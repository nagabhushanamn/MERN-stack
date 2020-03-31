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

let box = document.querySelector('.alert-info')
let gmBtn = document.querySelector('.btn-primary')
let geBtn = document.querySelector('.btn-danger')
let gnBtn = document.querySelector('.btn-warning')

gmBtn.addEventListener('click', e => {
    box.innerHTML = "good morning 🌞"
})
geBtn.addEventListener('click', e => {
    box.innerHTML = "good evening 🌞"
})
gnBtn.addEventListener('click', e => {
    box.innerHTML = "good night ⭐"
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

let imgTag = document.querySelector('#slide')
let startBtn = document.querySelector('#start-btn')
let stopBtn = document.querySelector('#stop-btn')
stopBtn.disabled = true
startBtn.addEventListener('click', e => {
    startBtn.disabled = true
    stopBtn.disabled = false
    let imgIdx = 1
    let interval = setInterval(() => {
        imgIdx++
        let imagePath = `images/${imgIdx}.jpg`
        imgTag.src = imagePath
        if (imgIdx === 3) {
            imgIdx = 0
        }
    }, 1000)
    stopBtn.addEventListener('click', e => {
        stopBtn.disabled = true
        startBtn.disabled = false
        clearInterval(interval)
    })
})

