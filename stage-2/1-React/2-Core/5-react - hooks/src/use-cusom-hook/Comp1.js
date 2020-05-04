
import React, { useState } from 'react';

import { useTitle, useCount } from './hooks'

const Comp1 = () => {
    const [title, setTitle] = useState('react')
    useTitle(title)
    let [count, increment, decrement] = useCount(0)
    return (
        <div className="card-panel">
            <div className="row">
                <div className="col s6">
                    <button className="btn" onClick={e => setTitle(`${title}-comp1`)}>comp1 title change</button>
                </div>
            </div>
            <div className="row">
                <div className="col s4">
                    <button onClick={increment} className="btn">+1</button>
                </div>
                <div className="col s4">
                    <button className="btn">{count}</button>
                </div>
                <div className="col s4">
                    <button onClick={decrement} className="btn">-1</button>
                </div>
            </div>
        </div >
    );
};

export default Comp1;