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
    getTodos(flag) {
        if (flag === 'ALL')
            return this.todos
    }
}

//-------------------------------------------------------------------------
// UI
//-------------------------------------------------------------------------
const newTodoField = document.querySelector("#new-todo")

const todoService = new TodoService()

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

function renderTodos(flag) {
    let todos = todoService.getTodos(flag)
    const todoLiElements = todos.map(todo => {
        return `
            <li class="list-group-item">
                <div class="row">
                    <div class="col-3"><input type="checkbox" ${todo.completed ? 'checked' : ''} /></div>
                    <div class="col-6">${todo.title}</div>
                    <div class="col-3"><button class="btn btn-sm btn-danger float-right">delete</button></div>
                </div>
            </li> 
        `
    })
    document.getElementById('todo-list').innerHTML = todoLiElements
}

