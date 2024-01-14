import { FILTER_TYPES } from "../components/constants/filters";

export const getTodos = (state) => state.todos

export const getFilterType = (state) => state.filterType

// export const getTodos = ({todos}) => todos

export const getFilteredTodos = ({todos, filterType}) => {
    switch (filterType) {
        case FILTER_TYPES.DONE:
            return todos.filter(({done}) => done)
        case FILTER_TYPES.UNDONE:
            return todos.filter(({done}) => !done)
        default:
            return todos
    }
}