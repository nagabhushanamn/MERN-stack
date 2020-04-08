


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


// #1

//--------------------------------------
// consumer / dependent
//--------------------------------------

// let student = {
//     learn() {

//         //--------------------------------------------------------------
//         // let ans = trainer.askQuesSync("Q1")// pull / synchronous
//         // console.log(ans)
//         //--------------------------------------------------------------


//         console.log("student asking question on tnr")
//         let promise = trainer.askQuesAsync("Q1")
//         console.log("student got promise from tnr, defer actions to future")
//         promise
//             .then(answer => {
//                 console.log(answer)
//                 console.log("thank u tnr for an ans")
//             })
//             .catch(error => {
//                 console.log(error)
//             })
//         console.log("cont.. with other learning...")
//     }
// }

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

renderTodos()

// ----------------------------------------------------------------

// summary :

/**
 * 
 *  to keep async commn ( push ) b/w 2 javascript modules, 
 *  then prefer Promise API
 * 
 */










