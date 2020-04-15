

import 'bootstrap/scss/bootstrap.scss'




let timeZones = [
  "Asia/Kolkata",
  "Asia/Dubai",
  "America/New_york"
]

document.getElementById('timeZones')
  .innerHTML = timeZones.map(tz => `<option>${tz}<option>`).join(" ")


const visible_timezones = ["Asia/Kolkata"]

document.getElementById('clock-btn')
  .addEventListener('click', e => {
    const selectedTimeZone = document.getElementById('timeZones').value
    if (!visible_timezones.includes(selectedTimeZone))
      visible_timezones.push(selectedTimeZone)
    console.log(visible_timezones)
  })

//-------------------------------------------------
// Using DOM & Timer Api
//-------------------------------------------------

// const clock1Ele = document.getElementById('clock1')
// const clock2Ele = document.getElementById('clock2')
// const clock3Ele = document.getElementById('clock3')


//--------------------------------------------------

// setInterval(() => {
//     clock1Ele.innerHTML = `
//         <div class="card">
//             <div class="card-header">Asia/Kolkata</div>
//             <div class="card-body">
//                 <div class="badge badge-dark">${new Date().toLocaleTimeString('en-US', { timeZone: 'Asia/Kolkata' })}</div>
//             </div>
//         </div>
//     `
// }, 1000)


// setInterval(() => {
//     clock2Ele.innerHTML = `
//         <div class="card">
//             <div class="card-header">Asia/Dubai</div>
//             <div class="card-body">
//                 <div class="badge badge-dark">${new Date().toLocaleTimeString('en-US', { timeZone: 'Asia/Dubai' })}</div>
//             </div>
//         </div>
//     `
// }, 1000)

// setInterval(() => {
//     clock3Ele.innerHTML = `
//         <div class="card">
//             <div class="card-header">America/New_york</div>
//             <div class="card-body">
//                 <div class="badge badge-dark">${new Date().toLocaleTimeString('en-US', { timeZone: 'America/New_york' })}</div>
//             </div>
//         </div>
//     `
// }, 1000)

//------------------------------------------------------------------
/**
 * 
 *  design issue
 * 
 *  => // voilating DRY ( DoNot Repeat Yourself ) principle  i.e duplicate code
 * 
 */

//------------------------------------------------------------------
// clock component 
//------------------------------------------------------------------

const Clock = (props) => {
  //let timeZone = props.timeZone
  // -or-
  let { timeZone } = props
  let clockTemplate = `
    <div class="col-4">
      <div class="card">
        <div class="card-header">${timeZone}</div>
          <div class="card-body">
            <div class="badge badge-dark">${new Date().toLocaleTimeString('en-US', { timeZone })}</div>
          </div>
      </div>
    </div>
     `
  return clockTemplate
}

setInterval(() => {
  // clock1Ele.innerHTML = Clock({ timeZone: 'Asia/Kolkata' })
  // clock2Ele.innerHTML = Clock({ timeZone: 'Asia/Dubai' })
  // clock3Ele.innerHTML = Clock({ timeZone: 'America/New_york' })

  document.getElementById('clocks')
    .innerHTML = visible_timezones.map(timeZone => {
      return Clock({ timeZone })
    }).join(" ")

}, 1000)

/**
 *
 * performance issue:
 *
 *  ==> un-changed HTML elements keep re-rendering on every event.
 *      that cause huge painting browser.
 *
 */

 //------------------------------------------------------------------------


//  How to overcome design & performance issues ?

/**
 *
 *  using experts/third-party's ready solutions
 *
 *   ==> react.js  from facebook
 *   ==> angular  from google
 *  ...
 *
 */

 //-----------------------------------------------------------------