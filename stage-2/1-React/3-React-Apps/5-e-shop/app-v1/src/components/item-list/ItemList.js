

import React, { useState } from 'react';
import Item from '../item/Item'

const renderItems = (items) => {
    return items.map((item => {
        return (
            <div key={item.id} className="list-group-item">
               <Item value={item}/>
            </div>
        )
    }))
}

const ItemList = () => {

    const [items] = useState([
        {
            id: 1,
            name: 'Laptop',
            price: 149000,
            currency: 'INR',
            canBuy: true,
            description: 'Mac pro',
            image: 'images/laptop.png'
        },
        {
            id: 2,
            name: 'Mobile',
            price: 47000,
            currency: 'INR',
            canBuy: false,
            description: 'iphone-7',
            image: 'images/mobile.png'
        }
    ])

    return (
        <div className="list-group">
            {renderItems(items)}
        </div>
    );
};

export default ItemList;