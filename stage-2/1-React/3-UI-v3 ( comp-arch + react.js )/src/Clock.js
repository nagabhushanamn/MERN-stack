


//------------------------------------------------
// Clock component class  ( plain-js )
//------------------------------------------------

function Clock(props) {
    let { timeZone, lang = 'en-US' } = props
    let template = `
            <div class="card">
                <div class="card-header">${timeZone}</div>
                <div class="card-body">
                    <span class="badge badge-danger">${new Date().toLocaleTimeString(lang, { timeZone })}</span>
                </div>
            </div>
    `
    return template
}

export default Clock


