

import React, { useState } from 'react';
import Item from '../item/Item'


const ItemList = ({ onBuy }) => {

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
            canBuy: true,
            description: 'iphone-7',
            image: 'images/mobile.png'
        }
    ])


    const renderItems = (items) => {
        return items.map((item => {
            return (
                <div key={item.id}>
                    <div key={item.id} className="list-group-item">
                        <Item value={item} onBuy={item => onBuy(item)} />
                    </div>
                </div>
            )
        }))
    }

    return (
        <div>
            <div className="list-group">
                {renderItems(items)}
            </div>
        </div>
    );
};

export default ItemList;