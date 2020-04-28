import React, { Component } from 'react';

class CartView extends Component {
    renderCartItems(cart) {
        return cart.map((line, idx) => {
            return (
                <tr key={idx}>
                    <td>{line.title}</td>
                    <td>{line.price}</td>
                    <td><a href="#" onClick={e => this.props.onDelete({ id: line.id })}><i className="fa fa-trash"></i></a></td>
                </tr>
            )
        })
    }
    render() {
        let { value: cart } = this.props
        return (
            <div className="card">
                <div className="card-header">Items in cart</div>
                <div className="card-body">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Price</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.renderCartItems(cart)}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default CartView;