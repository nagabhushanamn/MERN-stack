

import React from 'react';
import Level1 from './Level1';
import UserContext from './UserContext'

const Root = () => {

    let loggedUser = "Nag"

    return (
        <div className="card-panel teal lighten-2">

            <UserContext.Provider value={loggedUser}>
                <Level1 />
            </UserContext.Provider>

        </div>
    );
};

export default Root;