import { ADD_TODO } from "../const"

export const addTodo = (todo) => {
    return {
        type: ADD_TODO,
        payload: {
            todo
        }
    }
}