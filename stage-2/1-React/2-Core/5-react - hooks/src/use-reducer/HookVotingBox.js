import React, { useReducer } from 'react';

const reducer = (state, action) => {
    let { type, value = 0 } = action
    switch (type) {
        case 'increment': {
            return { ...state, count: state.count + value }
        }
        case 'decrement': {
            return { ...state, count: state.count - value }
        }
        case 'reset': {
            return { ...state, count: 0 }
        }
        default:
            return state
    }
}
const initialState = {
    count: 100
}



const HookVotingBox = () => {

    const [state, dispatch] = useReducer(reducer, initialState)
    const { count } = state

    const [secondState, secondDispatch] = useReducer(reducer, initialState)
    const { count: secondCount } = secondState

    return (
        <div className="card-panel">
            <div className="card-panel">
                <div className="row">
                    <div className="col s2">
                        <button onClick={e => dispatch({ type: 'increment', value: 1 })} className="btn">+1</button>
                    </div>
                    <div className="col s2">
                        <button onClick={e => dispatch({ type: 'increment', value: -1 })} className="btn">-1</button>
                    </div>
                    <div className="col s2">
                        <button onClick={e => dispatch({ type: 'increment', value: 10 })} className="btn">+10</button>
                    </div>
                    <div className="col s2">
                        <button onClick={e => dispatch({ type: 'increment', value: -10 })} className="btn">-10</button>
                    </div>
                    <div className="col s2">
                        <button onClick={e => dispatch({ type: 'reset' })} className="btn">reset</button>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col s12">
                    <h3>{count}</h3>
                </div>
            </div>

            <div className="card-panel">
                <div className="row">
                    <div className="col s2">
                        <button onClick={e => secondDispatch({ type: 'increment', value: 1 })} className="btn">+1</button>
                    </div>
                    <div className="col s2">
                        <button onClick={e => secondDispatch({ type: 'increment', value: -1 })} className="btn">-1</button>
                    </div>
                    <div className="col s2">
                        <button onClick={e => secondDispatch({ type: 'increment', value: 10 })} className="btn">+10</button>
                    </div>
                    <div className="col s2">
                        <button onClick={e => secondDispatch({ type: 'increment', value: -10 })} className="btn">-10</button>
                    </div>
                    <div className="col s2">
                        <button onClick={e => secondDispatch({ type: 'reset' })} className="btn">reset</button>
                    </div>
                </div>
            </div >
            <div className="row">
                <div className="col s12">
                    <h3>{secondCount}</h3>
                </div>
            </div>
        </div >
    );
};

export default HookVotingBox;