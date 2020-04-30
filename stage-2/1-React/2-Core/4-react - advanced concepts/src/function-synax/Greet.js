

import React from 'react';

// class Greet extends Component {

//     // state initialization

//     // life-cycle methods

//     // UI logic methods

//     render() {
//         let { message } = this.props
//         return (
//             <div className="alert alert-info">
//                 {message}
//             </div>
//         );
//     }
// }

// -or-


function Greet({ message }) {
    // let { message } = props
    return (
        <div className="alert alert-info">
            {message}
        </div>
    );
}

export default Greet;