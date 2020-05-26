


//------------------------------------------------
// Clock component class  ( react.js )
//------------------------------------------------

import React from 'react'

//----------------------------------------
// without JSX  ( JavaScript eXtension)
//----------------------------------------

// function ReactClock(props) {
//     let { timeZone, lang = 'en-US' } = props
//     const headerDiv = React.createElement('div', { className: 'card-header' }, timeZone)
//     const timeSpan = React.createElement('span', { className: 'badge badge-danger' }, new Date().toLocaleTimeString(lang, { timeZone }))
//     const bodyDiv = React.createElement('div', { className: 'card-body' }, timeSpan)
//     const cardDiv = React.createElement('div', { className: 'card' }, headerDiv, bodyDiv)
//     return cardDiv
// }


//----------------------------------------
// with JSX  ( JavaScript eXtension)
//----------------------------------------

function ReactClock(props) {
    let { timeZone, lang = 'en-US' } = props
    return (
        <div className="card">
            <div className="card-header">{timeZone}</div>
            <div className="card-body">
                <span className="badge badge-danger">{new Date().toLocaleTimeString(lang, { timeZone })}</span>
            </div>
        </div>
    )
}


export default ReactClock