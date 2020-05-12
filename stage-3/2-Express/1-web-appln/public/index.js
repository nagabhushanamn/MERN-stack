console.log('-index.js-')

const blocksBtn = document.getElementById('blocks-btn')
blocksBtn.addEventListener('click', e => {

    let promise = fetch('blocks')
    document.getElementById('progress-message').innerHTML = "loading blocks"
    promise
        .then(response => {
            return response.json()
        })
        .then(blocks => {
            document.getElementById('progress-message').innerHTML = ""
            document.getElementById('blocks')
                .innerHTML =
                blocks.map(block => {
                    return `
                     <li class="list-group-item">${block}</li>
                    `
                }).join(" ")
        })

})


