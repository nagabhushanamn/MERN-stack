

/**
 * 
 *  store
 * 
 *   ==> a object contains UI application state
 * 
 */

 // Redux

const store = {
    state: {
        channels: [
            "channel-1",
            "channel-2",
            "channel-3"
        ],
        messages: {
            'channel-1': [
                "whats is channel 1",
                "whats is channel one",
            ],
            'channel-2': [
                "whats is channel 2",
                "whats is channel two",
            ]
        }
    },
    getState() {
        return this.state
    },
    listeners: [],
    subscribe: function (listener) {
        this.listeners.push(listener)
        return function () {
            this.listeners = this.listeners.filter(e => e !== listener)
        }
    }

}



//-------------------------------------------

// let idx = 3
// setInterval(() => {
//     idx++
//     let newChannel = `channel-${idx}`
//     store.state.channels.push(newChannel)
//     store.listeners.forEach(listener => {
//         listener()
//     })
// }, 5 * 1000)

//-------------------------------------------



//-------------------------------------------

// let messageIdx = 0
// setInterval(() => {
//     messageIdx++
//     let newMessage = `message-${messageIdx}`
//     store.state.messages['channel-1'].push(newMessage)
//     store.listeners.forEach(listener => {
//         listener()
//     })
// }, 3 * 1000)

//-------------------------------------------


export default store;