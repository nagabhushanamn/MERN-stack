

/**
 * 
 *  store
 * 
 *   ==> a object-tree contains UI application's state
 * 
 */


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
            ],
            'channel-2': [
                "whats is channel 2",
                "whats is channel two",
            ],
            'channel-3': [
                "whats is channel 3",
                "whats is channel three",
                "whats is channel treee",
            ]
        }
    },
    getState() {
        return this.state
    },
    subscribers: [],
    subscribe: function (listener) {
        this.subscribers.push(listener)
        return function () {
            this.subscribers = this.subscribers.filter(e => e !== listener)
        }
    }

}



//-------------------------------------------
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