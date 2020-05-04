
import React, { useState, useEffect } from 'react';
import { useTitle,useCount } from './hooks'
const Comp2 = () => {
    const [title, setTitle] = useState('react')
    useTitle(title)
    let [count,increment] = useCount(0)
    return (
        <div className="card-panel">
            <button className="btn" onClick={e => setTitle(`${title}-comp2`)}>comp2 title change</button>
        </div>
    );
};

export default Comp2;