
import todosApi from '../api/todos'

// action creator(s)

export function getTodos() {
    return function (dispatch) {
        todosApi.getTodos()
            .then(response => {
                dispatch({ type: 'LOAD_TODOS', todos: response.data })
            })
    }
}


export function addTodo(title) {
    return function (dispatch) {
        todosApi.addTodo(title)
            .then(response => {
                dispatch({ type: 'ADD_TODO', todo: response.data })
            })
    }
}
export function editTodo(newTitle, id) {
    //..
    return { type: 'EDIT_TODO', newTitle, id }
}
export function deleteTodo(id) {
    //..
    return function (dispatch) {
        todosApi.deleteTodo(id)
            .then(() => {
                dispatch({ type: 'DELETE_TODO', id })
            })
    }

}
export function completeTodo(id) {
    return function (dispatch) {
        todosApi.completeTodo(id)
            .then(response => {
                dispatch({ type: 'COMPLETE_TODO', id })
            })
    }
}
export function completeAll() {
    //...
    return { type: 'COMPLETE_ALL' }
}
export function clearCompleted() {
    //..
    return { type: 'CLEAR_COMPLETED' }
}

