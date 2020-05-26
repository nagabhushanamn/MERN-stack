
import axios from 'axios' // xhr

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
        return api.post('/todos', { title })
    },
    editTodo(id,title) {
        return api.put(`/todos/${id}`, { title })
    },
    completeTodo(id,completed) {
        return api.patch(`/todos/${id}`, { completed })
    }
}

export default todosApi