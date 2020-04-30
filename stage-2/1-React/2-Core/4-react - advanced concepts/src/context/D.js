
// import React, { Component } from 'react';
// import ThemeContext from './ThemeContext'

// class D extends Component {
//     render() {
//         let context = this.context
//         let theme = "#FFF"
//         if (context)
//             (theme = context)
//         return (
//             <div style={{ backgroundColor: theme }} className="card card-body">
//                 <span>D component</span>
//             </div>
//         )
//     }
// }

// // D.contextType = ThemeContext

// export default D;


import React, { useContext } from 'react';
import ThemeContext from './ThemeContext'

const D = () => {
    let theme = useContext(ThemeContext)
    return (
        <div>
            <div style={{ backgroundColor: theme }} className="card card-body">
                <span>D component</span>
            </div>
        </div>
    );
};

export default D;