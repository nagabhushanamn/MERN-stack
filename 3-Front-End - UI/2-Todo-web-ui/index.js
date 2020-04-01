console.log("-index.js-")


//-------------------------------------------------------------------------
// data / model / state
//-------------------------------------------------------------------------

class Todo {
    constructor(title) {
        Todo.nextId++
        this.id = Todo.nextId
        this.title = title
        this.completed = false
    }
}
Todo.nextId = 0


//-------------------------------------------------------------------------
// service ==> use-cases
//-------------------------------------------------------------------------

class TodoService {
    constructor() {
        this.todos = []
    }
    addTodo(title) {
        const newTodo = new Todo(title)
        this.todos = this.todos.concat(newTodo)
    }
    deleteTodo(id) {
        this.todos = this.todos.filter(todo => todo.id !== id)
    }
    completeTodo(id) {
        this.todos = this.todos.map(todo => {
            if (todo.id === id) {
                todo.completed = !todo.completed
            }
            return todo
        })
    }
    completeAll() {
        let areAllCompleted = this.todos.every(todo => todo.completed)
        this.todos = this.todos.map(todo => {
            todo.completed = !areAllCompleted
            return todo
        })
    }
    getTodos(flag) {
        if (flag === 'ALL')
            return this.todos
    }
}

//-------------------------------------------------------------------------
// UI
//-------------------------------------------------------------------------
const newTodoField = document.querySelector("#new-todo")
const toggleAllbtn = document.querySelector("#toggle-all")

const todoService = new TodoService()

toggleAllbtn.addEventListener('click', e => {
    todoService.completeAll()
    renderTodos('ALL')
})

newTodoField.addEventListener('keyup', e => {
    if (e.key === 'Enter') {
        const title = e.target.value
        if (title) {
            todoService.addTodo(title)
            e.target.value = ""
            renderTodos('ALL')
        }
    }
})

function handleDelete(event, id) {
    todoService.deleteTodo(id)
    renderTodos('ALL')
}

function handleComplete(event, id) {
    todoService.completeTodo(id)
    renderTodos('ALL')
}


function renderTodos(flag) {
    let todos = todoService.getTodos(flag)
    const todoLiElements = todos.map(todo => {
        return `
            <li class="list-group-item ${todo.completed ? 'bg-success' : ''}">
                <div class="row">
                    <div class="col-3">
                        <input onchange="handleComplete(event,${todo.id})" type="checkbox" ${todo.completed ? 'checked' : ''} />
                    </div>
                    <div class="col-6">${todo.title}</div>
                    <div class="col-3">
                        <button onclick="handleDelete(event,${todo.id})" ${todo.completed ? '' : 'disabled'} class="btn btn-sm btn-danger float-right">delete</button>
                    </div>
                </div>
            </li> 
        `
    })
    document.getElementById('todo-list').innerHTML = todoLiElements.join(" ")
}
