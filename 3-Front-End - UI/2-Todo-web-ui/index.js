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
    editTodo(newTitle, id) {
        this.todos = this.todos.map(todo => {
            if (todo.id === id)
                todo.title = newTitle
            return todo
        })
    }
    deleteTodo(id) {
        this.todos = this.todos.filter(todo => todo.id !== id)
    }
    clearCompleted() {
        this.todos = this.todos.filter(todo => !todo.completed)
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
        if (flag === 'ACTIVE')
            return this.todos.filter(todo => !todo.completed)
        if (flag === 'COMPLETED')
            return this.todos.filter(todo => todo.completed)
    }
}


const todoService = new TodoService()

//------------------------------------------------
// todoService.addTodo('item1')
// todoService.addTodo('item2')
// todoService.addTodo('item3')
//------------------------------------------------

//-------------------------------------------------------------------------
// UI
//-------------------------------------------------------------------------
const newTodoField = document.querySelector("#new-todo")
const todoListEle = document.getElementById('todo-list')
const toggleAllBtn = document.querySelector("#toggle-all")
const clearCompletedBtn = document.querySelector("#clear-completed")
const todoFiltersEle = document.querySelector("#todo-filters")
const todoLeftCountEle = document.querySelector("#todo-left-count")


todoFiltersEle.addEventListener('click', e => {
    let filter = e.target.innerText
    if (filter === 'All')
        renderTodos('ALL')
    if (filter === "Active")
        renderTodos('ACTIVE')
    if (filter === "Completed")
        renderTodos('COMPLETED')
})

clearCompletedBtn.addEventListener('click', e => {
    todoService.clearCompleted()
    renderTodos('ALL')
})

toggleAllBtn.addEventListener('click', e => {
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
function handleEdit(event, id) {
    let newTitle = event.target.innerText
    todoService.editTodo(newTitle, id)
    renderTodos('ALL')
}


function renderTodos(flag) {
    let todos = todoService.getTodos(flag)
    let count = todos.reduce((c, nextTodo) => nextTodo.completed ? c : c + 1, 0)
    const todoLiElements = todos.map(todo => {
        return `
            <li class="list-group-item ${todo.completed ? 'bg-success' : ''}">
                <div class="row">
                    <div class="col-3">
                        <input onchange="handleComplete(event,${todo.id})" type="checkbox" ${todo.completed ? 'checked' : ''} />
                    </div>
                    <div class="col-6" contentEditable onblur="handleEdit(event,${todo.id})">${todo.title}</div>
                    <div class="col-3">
                        <button onclick="handleDelete(event,${todo.id})" class="btn btn-sm btn-danger float-right">delete</button>
                    </div>
                </div>
            </li> 
        `
    })
    todoListEle.innerHTML = todoLiElements.join(" ")
    todoLeftCountEle.innerText = count
}

renderTodos('ALL')