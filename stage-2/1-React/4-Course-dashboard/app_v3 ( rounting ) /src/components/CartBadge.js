import React, { Component } from 'react';

class CartBadge extends Component {
    render() {
        let { value } = this.props
        return (
            <div>
                <i className="fa fa-shopping-cart"></i>&nbsp;
                 <span className="badge badge-danger">{value}</span> item(s) in cart
            </div>
        );
    }
}

export default CartBadge;