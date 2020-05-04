

import React, { useState, useMemo } from 'react';

const NumberCheck = () => {
    const [count1, setCount1] = useState(0)
    const [count2, setCount2] = useState(0)
    
    const isEven = useMemo(() => {
        let n = 0
        for (let i = 0; i < 2000000; i++) {
            n += 1
        }
        return count1 % 2 === 0
    }, [count1])

    return (
        <div className="card-panel">
            <div className="row">
                <div className="col s6">
                    <button className="btn" onClick={e => setCount1(count1 + 1)}>Hit {count1}</button>
                    &nbsp;
                    {isEven ? 'Even' : 'Odd'}
                </div>
                <div className="col s6">
                    <button className="btn" onClick={e => setCount2(count2 + 1)}>Kick {count2}</button>
                </div>
            </div>
        </div>
    );
};

export default NumberCheck;