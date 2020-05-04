import React, { useContext } from 'react';
import UserContext from './UserContext';

const Level2 = () => {
    const user = useContext(UserContext)
    return (
        <div className="card-panel #ab47bc purple lighten-1">
            <h1>{user}</h1>
        </div>
    );
};

export default Level2;