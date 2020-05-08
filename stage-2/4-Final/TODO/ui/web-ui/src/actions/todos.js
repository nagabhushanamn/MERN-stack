

// action creator(s)

export function addTodo(title) {
    //..
    let todo = { id: 0, title, completed: false }
    return { type: 'ADD_TODO', todo }
}
export function editTodo(newTitle, id) {
    //..
    return { type: 'EDIT_TODO', newTitle, id }
}
export function deleteTodo(id) {
    //..
    return { type: 'DELETE_TODO', id }
}
export function completeTodo(id) {
    //..
    return { type: 'COMPLETE_TODO', id }
}
export function completeAll() {
    //...
    return { type: 'COMPLETE_ALL' }
}
export function clearCompleted() {
    //..
    return { type: 'CLEAR_COMPLETED' }
}

