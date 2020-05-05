

import React, { useState } from 'react';
import getSymbolFromCurrency from 'currency-symbol-map'
import ItemTabs from './ItemTabs';

const renderBuyBtn = (item) => {
    return (<button disabled={!item.canBuy} className="btn btn-sm btn-dark">buy</button>)
}

const renderPrice = (item) => {
    const currencySymbol = getSymbolFromCurrency(item.currency)
    return `${currencySymbol} ${item.price}`
}

const renderItems = (items) => {
    return items.map((item => {
        return (
            <div key={item.id} className="list-group-item">
                <div className="row">
                    <div className="col-3">
                        <img className="img-fluid" src={item.image} alt={item.name} />
                    </div>
                    <div className="col-9">
                        <h5>{item.name}</h5>
                        <h6>{renderPrice(item)}</h6>
                        {renderBuyBtn(item)}
                        <br />
                        <ItemTabs value={item} />
                    </div>
                </div>
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