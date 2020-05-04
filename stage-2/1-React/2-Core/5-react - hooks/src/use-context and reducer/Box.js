import React, { useReducer } from 'react';
import Batch1 from './Batch1';
import Batch2 from './Batch2';

export const VoteContext = React.createContext()

const reducer = (state, action) => {
    switch (action) {
        case 'up': {
            return state + 1
        }
        case 'down': {
            return state - 1
        }
        default: return state
    }
}
const intialState = 0


const Box = () => {
    const [state, dispatch] = useReducer(reducer, intialState)
    return (
        <div className="card-panel">
            <VoteContext.Provider value={{ dispatch }}>
                <div className="row">
                    <div className="col s6">
                        <Batch1 />
                    </div>
                    <div className="col s6">
                        <Batch2 />
                    </div>
                </div>
            </VoteContext.Provider>
            <h3>{state}</h3>
        </div>
    );
};

export default Box;