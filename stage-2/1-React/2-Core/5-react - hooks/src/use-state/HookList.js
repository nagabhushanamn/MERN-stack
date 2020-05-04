import React, { useState } from 'react';

const HookList = () => {
    const [list, setList] = useState([])
    const addItem = () => {
        let item = { id: list.length + 1, value: Math.floor(Math.random() * 100) }
        setList(list.concat(item))
    }
    return (
        <div className="card-panel blue-grey darken-1">
            <button onClick={addItem} className="btn">
                Add Item
                </button>
            <br />
            <br />
            <ul className="collection">
                {
                    list.map(item => {
                        return (
                            <li className="collection-item" key={item.id}>{item.value}</li>
                        )
                    })
                }
            </ul>
        </div>
    );
};

export default HookList;
