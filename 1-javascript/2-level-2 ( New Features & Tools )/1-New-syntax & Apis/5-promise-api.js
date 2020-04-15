


//--------------------------------------
// producer / dependency
//--------------------------------------


let trainer = {
    askQuesSync(q) {
        //... 10s
        return "this is answer for " + q
    },
    askQuesAsync(q) {
        let promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log("tnr resolve/reject the promise")
                //resolve("this is answer for " + q) // push / asynchrnous
                reject('oops, even i dono')
            }, 5000)
        })
        return promise
    }
}



//--------------------------------------
// consumer / dependent
//--------------------------------------

let student = {
    learn() {

        //--------------------------------------------------------------
        // let ans = trainer.askQuesSync("Q1")// pull / synchronous
        // console.log(ans)
        //--------------------------------------------------------------


        console.log("student asking question on tnr")
        let promise = trainer.askQuesAsync("Q1")
        console.log("student got promise from tnr, defer actions to future")
        promise
            .then(answer => {
                console.log(answer)
                console.log("thank u tnr for an ans")
            })
            .catch(error => {
                console.log(error)
            })
        console.log("cont.. with other learning...")
    }
}

// student.learn()


//--------------------------------------------------------------------------




// Front-End application

/**
 *  common modules
 * 
 *   - UI               ==> rendering logic ( html, style , layout , events ...)
 *   - services / apis  ==> n/w calls , etc..... i.e  no ui logic
 * 
 * 
 */

//------------------------------------------------------------------------
// Todo application
//------------------------------------------------------------------------

// service module

let service = {
    fetchTodos() {
        let promise = new Promise((resolve, reject) => {
            let xhr = new XMLHttpRequest()
            let url = "https://jsonplaceholder.typicode.com/todos?_limit=5"
            xhr.open('GET', url, true)
            xhr.send() // 10s
            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4) {
                    let jsonText = xhr.responseText
                    let todos = JSON.parse(jsonText)
                    resolve(todos) // PUSH
                }
            }
        })
        return promise
    }
}


//------------------------------------------------------------------------
// UI module ==> rendering logic
//------------------------------------------------------------------------


function renderTodos() {
    //let promise = service.fetchTodos()
    // --- or --
    let promise = fetch("https://jsonplaceholder.typicode.com/todos?_limit=5")
    document.getElementById('progress-message').innerHTML = "Loading todos"
    promise
        .then(response => response.json())
        .then(todos => {
            document.getElementById('progress-message').innerHTML = "top 5 todos"
            let todoListElements = todos.map(todo => {
                return `
                <div>${todo.title}</div>
            `
            })
            document.getElementById('todos').innerHTML = todoListElements.join(" ")
        })
        .catch(err => {
            document.getElementById('error-box').innerHTML = e.message
        })
}

// renderTodos()


let swiggy = {
    getFood: function () {
        let promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                setTimeout(() => {
                    console.log('hotel resolving/rejecting promise')
                    resolve("biryani")
                    //reject("No Food")
                }, 3000)
            }, 2000)
        })
        return promise
    }
}

const bar = {
    getBeer: function () {
        let promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log('bar resolving/rejecting promise')
                resolve("BEER")
                // reject('corona issue, no beer')
            }, 3000)
        })
        return promise
    }
}


let person = {
    live: function () {
        console.log('person living....')
        console.log("person feels hungry & requesting food on swiggy")
        let promise1 = swiggy.getFood()
        let promise2 = bar.getBeer()
        console.log('person got promise for food, defer actions to future ')
        // Promise.all([promise1, promise2])
        Promise.race([promise1, promise2])
            .then(result => {
                console.log(result)
                console.log('person yummy with ' + result[0])
                return result[1]
            })
            .then(beer => {
                console.log("happy with " + beer)
            })
            .catch(error => {
                console.log('person oops with ' + error)
            })

        console.log('cont...')

    }
}

person.live()




//-----------------------------------------------


Promise.resolve("result")
    .then(r => { console.log(r) })


Promise.reject("error")
    .catch(e => { console.log(e) })

// ----------------------------------------------    




// ----------------------------------------------------------------

// summary :

/**
 * 
 *  to keep async commn ( push ) b/w 2 javascript modules, 
 *  then prefer Promise API  ( Es6 )
 * 
 */

//--------------------------------------------------------------