import { ADD_TODO } from "../const";

const initState = {
    todos: ['Learn React','Learn Redux']
}
const reducer = (state = initState, action) => {
    switch (action.type) {
        case ADD_TODO: return {
            todos: [...state.todos, action.payload.todo]
        }
        default: return state
    }
}

export default reducer;