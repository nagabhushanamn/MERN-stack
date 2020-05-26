
import React from 'react';

const Item = ({ value: item }) => {
    console.log("Item:render()")
    return (
        <li className="collection-item">{item}</li>
    );
};

// export default Item;
export default React.memo(Item);