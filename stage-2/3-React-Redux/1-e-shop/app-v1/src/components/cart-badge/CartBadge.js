import React from 'react';

const CartBadge = ({ value }) => {
    return (
        <div>
            <i className="fa fa-shopping-cart"></i>&nbsp;
            <span className="badge badge-primary">{value}</span>&nbsp;
            item(s) cart
        </div>
    );
};

export default CartBadge;