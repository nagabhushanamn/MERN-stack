import React from 'react';
import Item from './Item';


const List = ({ value: items }) => {
    const renderItems = () => {
        return items.map((item, idx) => {
            return (
                <Item key={idx} value={item} />
            )
        })
    }
    return (
        <div className="card">
            <div className="card-header">All restaurants</div>
            <div className="card-body">
                {renderItems()}
            </div>
        </div>
    );
};

export default List;