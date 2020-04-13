

//------------------------------------------
//  create observable stream
//------------------------------------------

// const stream = new rxjs.Subject() // observable stream


//----------------------------------------
// Trainer
//----------------------------------------
// let idx = 0
// const interval = setInterval(() => {
//     idx++
//     if (idx === 3) {
//         stream.error("some exigency, im closing session")
//         clearInterval(interval)
//         return
//     }
//     if (idx > 5) {
//         stream.complete()
//         clearInterval(interval)
//         return
//     }
//     console.log("trainer propagating data/event over stream")
//     stream.next(`topic-${idx}`)

// }, 2000)


//----------------------------------------
// batch-1
//----------------------------------------

// stream.subscribe(
//     topic => {
//         console.log(`batch-1 received  : ${topic}`)
//     }, error => {
//         console.log("oops " + error)
//     },
//     () => {
//         console.log("batch-1 , thank u for all topics")
//     })

//----------------------------------------
// batch-2
//----------------------------------------


// const subscription = stream.subscribe(
//     topic => {
//         console.log(`batch-2 received  : ${topic}`)
//     }, error => {
//         console.log("awk " + error)
//     },
//     () => {
//         console.log("batch-2 , thank u ")
//     })


// setTimeout(() => {
//     subscription.unsubscribe()
//     setTimeout(() => {
//         let subscription = stream.subscribe(topic => {
//             console.log(`batch-2 received  : ${topic}`)
//         })
//     }, 3000)
// }, 6000)


//-------------------------------------------------------


let inputField = document.querySelector('input')

// inputField.addEventListener('keyup',e=>{
//     console.log(e.target.value)
// })


// UI module
const stream = rxjs.fromEvent(inputField, 'keyup')


// sub1
stream
    .pipe(rxjs.operators.debounceTime(3000))
    .subscribe(event => {
        let email = event.target.value
        let emailPattern = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/
        if (emailPattern.test(email)) {
            console.log("valid email")
        } else {
            console.log("invalid email")
        }
    })

// sub2
// stream.subscribe(event => {
//     console.log(event)
// })
