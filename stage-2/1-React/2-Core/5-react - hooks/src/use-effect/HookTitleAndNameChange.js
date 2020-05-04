import React, { useState, useEffect } from 'react';

const HookTitleAndNameChange = () => {

    let [count, setCount] = useState(0)
    let [name, setName] = useState('')

    useEffect(() => {
        console.log("changing document title")
        document.title = `count - ${count}`
    }, [count])

    const increment = () => {
        setCount(count + 1)
    }

    return (
        <div>
            <div className="card-panel">
                <button className="btn" onClick={increment}>
                    do count - {count}
                </button>
                <br /><br />
                <div className="row">
                    <div className="input-field col s6">
                        <input value={name} onChange={e => setName(e.target.value)} placeholder="Placeholder" id="name" type="text" className="validate" />
                        <label htmlFor="first_name">First Name</label>
                        <br /><br />
                        Hello {name}
                    </div>

                </div>
            </div>
        </div>
    );
};

export default HookTitleAndNameChange;