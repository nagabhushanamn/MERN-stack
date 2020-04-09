

//--------------------------------
// e.g modern house
//--------------------------------

const doorStream = new rxjs.Subject() // stream

//-------------------------------------------------
// component / module  ==> door
//-------------------------------------------------

class Door {
    open() {
        console.log("door opened...")
        // light.on()
        // AC.on()
        doorStream.next({ type: 'open', 'door-number': 4 })
    }
    close() {
        console.log("door closed..")
        // light.off()
        // AC.off()
        doorStream.next({ type: 'close', 'door-number': 4 })
    }
}
const door = new Door()


setTimeout(() => {
    door.open()
    setTimeout(() => {
        door.close()
    }, 3000)
}, 3000)


//-------------------------------------------------
// component / module  ==> light
//-------------------------------------------------

let light = {
    on(dnumber) {
        console.log("light ON >>>> "+dnumber)
    },
    off() {
        console.log("light OFF <<<<")
    }
}
let subscription = doorStream.subscribe(event => {
    if (event.type === "open")
        light.on(event['door-number'])
    if (event.type === "close")
        light.off()
})
// if (new Date().getHours() > 6 && new Date().getHours() < 18) {
//     subscription.unsubscribe()
// }



//-------------------------------------------------
// component / module  ==> AC
//-------------------------------------------------

let AC = {
    on() {
        console.log("AC ON >>>>")
    },
    off() {
        console.log("AC OFF <<<<")
    }
}
doorStream
    .subscribe(event => {
        if (event.type === "open")
            AC.on()
        if (event.type === "close")
            AC.off()
    })



//-------------------------------------------------
// component / module  ==> FAN
//-------------------------------------------------

let fan = {
    on() {
        console.log("FAN ON >>>>")
    },
    off() {
        console.log("FAN OFF <<<<")
    }
}

doorStream.subscribe(event => {
    if (event.type === "open")
        fan.on()
    if (event.type === "close")
        fan.off()
})





/**
 *
 *  Door  & DoorListeners ( light,ac,fan ) are tightly-coupled
 *
 *    impact : can't extend current-module with new features easily
 *
 *
 * OO principle :
 *
 *  ==> Open for extension & Closed for modification
 *
 *
 */