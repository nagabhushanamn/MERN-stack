


import React, { useState } from 'react';

const HookCounter = () => {
    let [count, setCount] = useState(0)
    const increment = () => {
        for (let i = 0; i < 5; i++) {
            // setCount(count + 1)
            setCount(prevCount => prevCount + 1) // this.setState(value) | // this.setState(vprevState=>newState)
        }
    }
    return (
        <div>
            <div className="card-panel blue-grey darken-1">
                <button onClick={increment} className="btn">
                    increment 5 times
                </button>
                <br />
                <span className="badge white">{count}</span>
            </div>
        </div>
    );
};

export default HookCounter;