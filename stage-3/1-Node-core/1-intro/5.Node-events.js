


/**
 * 
 * 
 * 
 *  - All objects that emit events are instances of the EventEmitter class.
 * 
 * 
 */

const EventEmitter = require('events').EventEmitter

//-------------------------------------------------------------------
// const ee = new EventEmitter()
// ee.on('some-event', () => {
//     console.log("called back due to 'some-event' on ee")
// })
// ee.emit('some-event')
// ee.emit('some-event')
//-------------------------------------------------------------------

class Door extends EventEmitter {
    open() {
        console.log('door opened..')
        this.emit('open', { doorNumber: 1, floor: 2 })
    }
    close() {
        console.log('door closed')
        this.emit('close', { doorNumber: 1, floor: 2 })
    }
}

const door = new Door() // EventEmitter


//-------------------------------------------------------------------
// Light Module
//-------------------------------------------------------------------
door.on('open', e => {
    console.log(`door - ${e.doorNumber},floor - ${e.floor} => lights on`)
})
door.on('close', e => {
    console.log(`door - ${e.doorNumber},floor - ${e.floor} => lights off`)
})
//-------------------------------------------------------------------

//-------------------------------------------------------------------
const acModule = {
    setUp() {
        door.on('open', e => {
            console.log(`door - ${e.doorNumber},floor - ${e.floor} => AC on`)
        })
        door.on('close', e => {
            console.log(`door - ${e.doorNumber},floor - ${e.floor} => AC off`)
        })
    }
}
acModule.setUp()
//-------------------------------------------------------------------

setTimeout(() => {
    door.open()
    setTimeout(() => {
        door.close()
    }, 3000)
}, 3000)
