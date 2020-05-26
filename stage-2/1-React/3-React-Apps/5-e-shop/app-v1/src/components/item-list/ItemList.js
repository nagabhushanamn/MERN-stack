

import React, { useState, useEffect } from 'react';
import Item from '../item/Item'
import axios from 'axios'


const ItemList = ({ onBuy, cart }) => {

    const [items, setItems] = useState([])

    useEffect(() => {
        axios.get('/data/items.json')
            .then(response => {
                setItems(response.data)
            })
    }, [])

    const renderItems = (items) => {
        return items.map((item => {
            let cartLine = cart[item.id] || {}
            let cartItemQty = cartLine.qty || 0
            return (
                <div key={item.id}>
                    <div key={item.id} className="list-group-item">
                        <Item value={item} cartItemQty={cartItemQty} onBuy={item => onBuy(item)} />
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