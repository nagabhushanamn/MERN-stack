
export function todosReducer(state = [], action) {
    let { type } = action
    switch (type) {
        case 'LOAD_TODOS': {
            let { todos } = action
            return [...todos]
        }
        case 'ADD_TODO': {
            let { todo } = action
            return [...state,todo]
        }
        case 'EDIT_TODO': {
            let { newTitle, id } = action
            return state.map(todo => {
                if (todo.id === id) {
                    return { ...todo, title: newTitle }
                } else {
                    return todo
                }
            })
        }
        case 'COMPLETE_TODO': {
            let { id } = action
            return state.map(todo => {
                if (todo.id === id) {
                    return { ...todo, completed: !todo.completed }
                } else {
                    return todo
                }
            })
        }
        case 'DELETE_TODO': {
            let { id } = action
            return state.filter(todo => {
                if (todo.id !== id) {
                    return true
                }
            })
        }
        case 'CLEAR_COMPLETED': {
            return state.filter(todo => {
                if (!todo.completed) {
                    return true
                }
            })
        }
        case 'COMPLETE_ALL': {
            let areAllCompleted = state.every(todo => todo.completed)
            return state.map(todo => {
                return { ...todo, completed: !areAllCompleted }
            })
        }
        default: return state
    }
}