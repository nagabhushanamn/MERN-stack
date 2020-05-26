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
                     <li style="cursor:pointer" class="list-group-item" data-block="${block}" onclick="getBlockDescription(event)">
                        ${block}
                     </li>
                    `
                }).join(" ")
        })

})


function getBlockDescription(event) {
    let blockType = event.target.getAttribute('data-block')
    fetch('blocks/' + blockType)
        .then(response => response.json())
        .then(description => {
            document.getElementById('block-description').innerHTML = description
        })
}




document.getElementById('block-form')
    .addEventListener('submit', e => {
        e.preventDefault()
        let name = document.getElementById('name').value
        let description = document.getElementById('description').value
        let newBlock = {
            name, description
        }
        fetch('blocks', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newBlock)
        })
            .then(response => response.json())
            .then(message => {
                console.log(message)
                document.getElementById('name').value = ''
                document.getElementById('description').value = ''
            })
    })