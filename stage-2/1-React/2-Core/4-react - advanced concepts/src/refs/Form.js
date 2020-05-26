import React, {useRef, useEffect } from 'react';
import $ from 'jquery';

/**
 * 
 *  ref ==> actual DOM element reference like document.getElementById('')
 * 
 */

const Form = () => {
    const searchField = useRef(null);
    const searchCard = useRef(null);
    useEffect(() => {
        $(searchCard.current).hide()
    }, [])
    const toggle = () => {
        $(searchCard.current).slideToggle()
    }
    const doSearch = (e) => {
        e.preventDefault();
        console.log(searchField.current.value)
    }
    return (
        <div>
            <div className="alert alert-form">
                <button className="" onClick={toggle}>toggle</button>
                <div className="card card-body" ref={searchCard}>
                    <form onSubmit={doSearch}>
                        <input ref={searchField} />
                        <button className="">search</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Form;



// class Form extends Component {
//     doSearch(e) {
//         e.preventDefault();
//         //..
//         console.log(this.refs.searchField.value)
//     }
//     componentDidMount() {
//         $(this.refs['search-card']).hide()
//     }
//     toggle() {
//         $(this.refs['search-card']).slideToggle()
//     }
//     render() {
//         return (
//             <div className="alert alert-form">
//                 <button className="" onClick={e => this.toggle()}>toggle</button>
//                 <div className="card card-body" ref="search-card">
//                     <form onSubmit={e => this.doSearch(e)}>
//                         <input ref="searchField" />
//                         <button className="">search</button>
//                     </form>
//                 </div>
//             </div>
//         );
//     }
// }

// export default Form;