

import React from 'react';
import store from '../store'


// function hof(f){
//     return function(){

//     }
// }


function connect(InputComponent, callback) {

    class Container extends React.Component {
        constructor(props) {
            super(props)
            this.state = callback(store.getState(), props)
        }
        componentDidMount() {
            this.unsubscribe = store.subscribe(() => {
                const state = callback(store.getState())
                this.setState(state)
            })
        }
        componentWillUnmount() {
            this.unsubscribe()
        }
        componentDidUpdate(prevProps) {
            // Home work..
        }
        render() {
            return (
                <div>
                    <InputComponent {...this.props} {...this.state} />
                </div>
            )
        }
    }

    return Container

}

export { connect }