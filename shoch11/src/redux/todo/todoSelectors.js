import { FILTER_TYPES } from "../../components/constants/filters";


export const getTodos = (state) => state.todos

export const getFilterType = (state) => state.todo.filterType


// export const getTodos = ({todos}) => todos


// TODO
// filter todos
export const getFilteredTodos=({todo})=>{
    switch (todo.filterType) {
        case FILTER_TYPES.DONE:
            return todo.todos.filter(({done})=>done);
        case FILTER_TYPES.UNDONE:
            return todo.todos.filter(({done})=>!done);
            default:
           return todo.todos
    }
}