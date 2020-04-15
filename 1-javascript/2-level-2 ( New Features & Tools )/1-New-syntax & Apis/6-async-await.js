



function getUser(userId) {
    return Promise.resolve({ userId, name: 'Nag', email: 'Nag@mail.com' })
}

function getCatalog(user) {
    return Promise.resolve(['m1', 'm2', 'm3'])
}

function getSocial(user) {
    return Promise.resolve(['s1', 's2', 's3'])
}

//--------------------------------------------
// withount async & Await  leaks callback-hell
//--------------------------------------------

function getHomePageData_v1(userId) {
    let promise = new Promise((resolve, reject) => {
        getUser(userId)
            .then(user => {
                let promise1 = getCatalog(user)
                let promise2 = getSocial(user)
                Promise.all([promise1, promise2])
                    .then(data => {
                        resolve(data)
                    })

            })
    })
    return promise
}


getHomePageData_v1("nag")
    .then(data => {
        console.log(data)
    })

// -------------------------------------------------------------
// with  Async & Await  ( ES7 )
// -------------------------------------------------------------

async function getHomePageData_v2(userId) {
    let data = []
    try {
        let user = await getUser(userId)
        let catalog = await getCatalog(user)
        let social = await getSocial(user)
        data.push(catalog)
        data.push(social)
    } catch (e) {
        console.log(e)
    }
    return data
}

getHomePageData_v2("nag")
    .then(data => {
        console.log(data)
    })


// -------------------------------------------------------------
// Ex
// -------------------------------------------------------------

function fetchTodos_v1() {
    let promise = new Promise((resolve, reject) => {
        fetch("https://jsonplaceholder.typicode.com/todos?_limit=5")
            .then(response => response.json())
            .then(todos => {
                resolve(todos)
            })
    })
    return promise
}

async function fetchTodos_v2() {
    let response = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=5")
    let todos = await response.json()
    return todos
}


fetchTodos_v1()
    .then(todos => {
        console.log(todos)
    })

fetchTodos_v2()
    .then(todos => {
        console.log(todos)
    })