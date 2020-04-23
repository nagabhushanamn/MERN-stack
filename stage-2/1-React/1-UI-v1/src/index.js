

import 'bootstrap/dist/css/bootstrap.css'



const clockEle1 = document.getElementById('clock-1')
setInterval(() => {
    clockEle1.innerHTML = new Date().toLocaleTimeString('en-US', { timeZone: 'Asia/Kolkata' })
}, 1000)

const clockEle2 = document.getElementById('clock-2')
setInterval(() => {
    clockEle2.innerHTML = new Date().toLocaleTimeString('en-US', { timeZone: 'Asia/Dubai' })
}, 1000)

const clockEle3 = document.getElementById('clock-3')
setInterval(() => {
    clockEle3.innerHTML = new Date().toLocaleTimeString('en-US', { timeZone: 'America/New_york' })
}, 1000)