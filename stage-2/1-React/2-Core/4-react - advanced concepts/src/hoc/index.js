

import React from 'react';
import store from '../store'


// function hof(f){
//     return function(){
//     }
// }


export function withBackground(InputComponent) {
    class Container extends React.Component {
        render() {
            return (
                <div style={{ backgroundColor: "#DEF" }} className="card card-body">
                    <InputComponent />
                </div>
            )
        }
    }
    return Container
}




export function withCard(InputComponent) {
    class Container extends React.Component {
        render() {
            return (
                <div className="card card-body">
                    <InputComponent />
                </div>
            )
        }
    }
    return Container
}




export function connect(InputComponent, callback) {

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
            if (this.props !== prevProps) {
                const state = callback(store.getState(), this.props)
                this.setState(state)
            }
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

