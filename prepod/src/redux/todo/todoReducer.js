import { TODO_ACTION_TYPES } from "./todoActionTypes"
import { FILTER_TYPES } from "../../components/constants/filters"

const initialState = {
    todos: [],
    filterType: FILTER_TYPES.ALL
}

export const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case TODO_ACTION_TYPES.ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, { ...action.payload }]
            }
        case TODO_ACTION_TYPES.DELETE_TODO:
            return {
                ...state,
                todos: state.todos.filter((todo) => {
                    return todo.id !== action.payload.toDeleteId
                })
            }
        case TODO_ACTION_TYPES.DONE_TODO:
            return {
                ...state,
                todos: state.todos.map((todo) => {
                    return {
                        ...todo,
                        completed: todo.id === action.payload.toDoneId ? !todo.completed : todo.completed
                    }
                })
            }
        case TODO_ACTION_TYPES.CHANGE_FILTER:
            return {
                ...state,
                filterType: action.payload.filterType
            }
        case TODO_ACTION_TYPES.INIT_USER_TODOS:
            return {
                ...state,
                todos: action.payload
            }
        default:
            return { ...state }
    }
}