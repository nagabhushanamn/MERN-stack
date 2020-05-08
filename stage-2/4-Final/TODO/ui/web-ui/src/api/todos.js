

import axios from 'axios'

const baseURL = "http://localhost:8080/api/"

const api = axios.create({
    baseURL
});

const todosApi = {
    getTodos: () => {
        return api.get("/todos")
    },
    deleteTodo(id) {
        return api.delete(`/todos/${id}`)
    },
    addTodo(title) {
        return api.post('/todos', { title, completed: false })
    },
    completeTodo(id) {
        return api.patch(`/todos/${id}`, { completed: true })
    }
}

export default todosApi