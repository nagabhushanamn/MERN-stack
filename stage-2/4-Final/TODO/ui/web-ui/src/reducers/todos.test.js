
import { todosReducer } from './todos'

test("should return initial state", () => {
    expect(todosReducer(undefined, {})).toEqual([])
})


test("should add new Todo", () => {
    let state = []
    const action = {
        type: 'ADD_TODO',
        todo: { id: 0, title: 'item-1', completed: false }
    }
    let newState = todosReducer(state, action)
    expect(newState.length).toBe(1)
})

test("should add new Todo", () => {
    let state = [
        { id: 1, title: 'Item-1', completed: false },
        { id: 2, title: 'Item-2', completed: false }
    ]
    const action = {
        type: 'DELETE_TODO',
        id: 2
    }
    let newState = todosReducer(state, action)
    expect(newState).toEqual([
        { id: 1, title: 'Item-1', completed: false }
    ])
})