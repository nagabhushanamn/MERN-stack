import React, { useContext } from 'react';

import { VoteContext } from './Box'

const Batch2 = () => {
    const { dispatch } = useContext(VoteContext)
    return (
        <div className="card-panel">
            <button onClick={e => dispatch('up')} className="btn">Batch2 : Vote</button>
        </div>
    );
};

export default Batch2;