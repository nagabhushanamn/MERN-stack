

import 'bootstrap/dist/css/bootstrap.css'

import Clock from './Clock'
import App from './App'

import React from 'react'
import ReactDOM from 'react-dom'

let clockEle1 = document.getElementById('clock-1')
let clockEle2 = document.getElementById('clock-2')
let clockEle3 = document.getElementById('clock-3')

// let clockEle4 = document.getElementById('clock-4')
// let clockEle5 = document.getElementById('clock-5')
// let clockEle6 = document.getElementById('clock-6')

setInterval(() => {
    clockEle1.innerHTML = Clock({ timeZone: 'Asia/Kolkata' })
    clockEle2.innerHTML = Clock({ timeZone: 'Asia/Dubai', lang: 'ar' })
    clockEle3.innerHTML = Clock({ timeZone: 'America/New_York' });
}, 1000)

setInterval(() => {

    // ReactDOM.render(ReactClock({ timeZone: 'Asia/Kolkata' }), clockEle4)
    // ReactDOM.render(ReactClock({ timeZone: 'Asia/Dubai' }), clockEle5)
    // ReactDOM.render(ReactClock({ timeZone: 'America/New_York' }), clockEle6)
    // - or-
    // ReactDOM.render(<ReactClock timeZone='Asia/Kolkata' />, clockEle4)
    // ReactDOM.render(<ReactClock timeZone='Asia/Dubai' lang="ar" />, clockEle5)
    // ReactDOM.render(<ReactClock timeZone='America/New_York' />, clockEle6)

    ReactDOM.render(<App />, document.getElementById('root'));

}, 1000)