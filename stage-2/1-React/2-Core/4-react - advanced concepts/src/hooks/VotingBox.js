import React, { useState } from 'react';

const VotingBox = () => {

    let [count, setCount] = useState(10)

    const increment = () => {
        count += 1
        setCount(count)
    }
    const decrement = () => {
        count -= 1
        setCount(count)
    }

    return (
        <div className="card">
            <div className="card-header">Voting Box</div>
            <div className="card-body">
                <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                    <button onClick={increment} className="btn btn-lg btn-primary">+1</button>
                    <span style={{ fontSize: '25px' }} className="badge badge-warning">{count}</span>
                    <button onClick={decrement} className="btn btn-lg btn-primary">-1</button>
                </div>
            </div>
        </div>
    );
};

export default VotingBox;















// import React, { Component } from 'react';

// class VotingBox extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             count: 10
//         }
//     }
//     increment() {
//         let { count } = this.state
//         count += 1
//         this.setState({ count });
//     }
//     decrement() {
//         let { count } = this.state
//         count -= 1
//         this.setState({ count });
//     }
//     render() {
//         let { count } = this.state
//         return (
//             <div>
//                 <div className="card">
//                     <div className="card-header">Voting Box</div>
//                     <div className="card-body">
//                         <div style={{ display: 'flex', justifyContent: 'space-around' }}>
//                             <button onClick={this.increment.bind(this)} className="btn btn-lg btn-primary">+1</button>
//                             <span style={{ fontSize: '25px' }} className="badge badge-warning">{count}</span>
//                             <button onClick={this.decrement.bind(this)} className="btn btn-lg btn-primary">-1</button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         );
//     }
// }

// export default VotingBox;