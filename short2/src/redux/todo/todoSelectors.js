import { FILTER_TYPES } from "../../components/constants/filters";

export const getTodos = (state) => state.todos

export const getFilterType = (state) => state.todo.filterType

// export const getTodos = ({todos}) => todos

export const getFilteredTodos = ({todo}) => {
    switch (todo.filterType) {
        case FILTER_TYPES.DONE:
            return todo.todos.filter(({completed}) => completed)
        case FILTER_TYPES.UNDONE:
            return todo.todos.filter(({completed}) => !completed)
        default:
            return todo.todos
    }
}