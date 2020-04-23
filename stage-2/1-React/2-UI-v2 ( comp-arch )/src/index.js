

import 'bootstrap/dist/css/bootstrap.css'

import Clock from './Clock'
let clockEle1 = document.getElementById('clock-1')
let clockEle2 = document.getElementById('clock-2')
let clockEle3 = document.getElementById('clock-3')

setInterval(() => {
    clockEle1.innerHTML = Clock({ timeZone: 'Asia/Kolkata' })
    clockEle2.innerHTML = Clock({ timeZone: 'Asia/Dubai', lang: 'ar' })
    clockEle3.innerHTML = Clock({ timeZone: 'America/New_York' });
})