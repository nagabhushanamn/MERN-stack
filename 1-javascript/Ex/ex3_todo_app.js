

//-------------------------------------------------
// data / model / state ==> Todo
//-------------------------------------------------

/**
 * 
 * todo = {id:Number,title:String,completed:Boolean}
 * 
 */

class Todo {
    constructor(title) {
        Todo.nextTodoIdx++ // naive approach
        this.id = Todo.nextTodoIdx
        this.title = title
        this.completed = false
    }
}
Todo.nextTodoIdx = 0 // static


//--------------------------------------------------
// TodoService => usecases / services
//--------------------------------------------------


class TodoService {
    constructor() {
        this.todos = [] // array data-structure
    }
    addTodo(title) {
        const newTodo = new Todo(title)
        //this.todos.push(newTodo) // mutable
        this.todos = this.todos.concat(newTodo) // immutable
    }
    editTodo(id, newTitle) {
        //..
        this.todos = this.todos.map(todo => {
            if (todo.id === id) {
                todo.title = newTitle
            }
            return todo
        })
    }
    completeTodo(id) {
        this.todos = this.todos.map(todo => {
            if (todo.id === id)
                todo.completed = !todo.completed
            return todo
        })
    }
    deleteTodo(id) {
        this.todos = this.todos.filter(todo => todo.id !== id)
    }
    clearCompleted() {
        this.todos = this.todos.filter(todo => !todo.completed)
    }
    completeAll() {
        let areAllCompleted = this.todos.every(todo => todo.completed)
        this.todos = this.todos.map(todo => {
            todo.completed = !areAllCompleted
            return todo
        })
    }
    viewTodos(flag) {
        if (flag === "ALL") {
            this.todos
                .forEach(todo => console.log(todo))
        }
        if (flag === "ACTIVE") {
            this.todos
                .filter(todo => !todo.completed)
                .forEach(todo => console.log(todo))
        }
        if (flag === "COMPLETED") {
            this.todos
                .filter(todo => todo.completed)
                .forEach(todo => console.log(todo))
        }
        if (flag === "TODAY") {
        }
        if (flag === "WEEK") {
        }
        if (flag === "MONTH") {
        }
    }
}


//--------------------------------------------------

const service = new TodoService()
service.addTodo('eat')
service.addTodo('sleep')
service.addTodo('work')

 //--------------------------------------------------

