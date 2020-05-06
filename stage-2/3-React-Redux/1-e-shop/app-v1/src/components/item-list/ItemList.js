

import React, { useEffect } from 'react';
import Item from '../item/Item'

import { useSelector, useDispatch } from 'react-redux'
import { loadItems } from '../../actions/items'

const ItemList = () => {

    const items = useSelector(state => state.items)
    const cart = useSelector(state => state.cart)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(loadItems('elec', 2))
    }, [])

    const renderItems = (items) => {
        return items.map((item => {
            let cartLine = cart[item.id] || {}
            let cartItemQty = cartLine.qty || 0
            return (
                <div key={item.id}>
                    <div key={item.id} className="list-group-item">
                        <Item value={item} cartItemQty={cartItemQty} />
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