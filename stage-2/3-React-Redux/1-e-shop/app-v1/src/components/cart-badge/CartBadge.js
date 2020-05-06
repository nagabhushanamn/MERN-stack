
//  how react components can use redux store ?

// /*
//  way-1 : HOF  --> connect
// */

// import React from 'react';

// import { connect } from 'react-redux'

// const CartBadge = ({ cart }) => {
//     let count = Object.keys(cart).length
//     return (
//         <div>
//             <i className="fa fa-shopping-cart"></i>&nbsp;
//             <span className="badge badge-primary">{count}</span>&nbsp;
//             item(s) cart
//         </div>
//     );
// };

// const mapStateToProps = (state) => {
//     return {
//         cart: state.cart
//     }
// }

// export default connect(mapStateToProps)(CartBadge);




/*
    way-2 : Hooks 
*/

import React from 'react';
import { useSelector } from 'react-redux'

const CartBadge = () => {
    const cart = useSelector(state => state.cart)
    const count = Object.keys(cart).length
    return (
        <div>
            <i className="fa fa-shopping-cart"></i>&nbsp;
            <span className="badge badge-primary">{count}</span>&nbsp;
            item(s) cart
        </div>
    );
};
export default CartBadge;


