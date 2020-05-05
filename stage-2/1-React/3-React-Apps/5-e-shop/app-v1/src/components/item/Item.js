
import React from 'react';

import ItemTabs from '../item-tabs/ItemTabs';
import getSymbolFromCurrency from 'currency-symbol-map'

// import styles from './Item.module.css'

const renderBuyBtn = (item) => {
    return (<button disabled={!item.canBuy} className="btn btn-sm btn-dark">buy</button>)
}

const renderPrice = (item) => {
    const currencySymbol = getSymbolFromCurrency(item.currency)
    return `${currencySymbol} ${item.price}`
}


const Item = ({ value: item }) => {
    return (
        <div>
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
    );
};

export default Item;