import { v4 as uuidv4 } from 'uuid';

import { TODO_ACTION_TYPES } from "./todoActionTypes";

export const addTodo = (todoText) => ({
    type: TODO_ACTION_TYPES.ADD_TODO,
    payload: {
        text: todoText,
        done: false,
        id: uuidv4()
    }
})

export const deleteTodo = (id) => ({
    type: TODO_ACTION_TYPES.DELETE_TODO,
    payload: {
        toDeleteId: id
    }
})

export const doneTodo = (id) => ({
    type: TODO_ACTION_TYPES.DONE_TODO,
    payload: {
        toDoneId: id
    }
})

export const changeFilter = (filterType) => ({
    type: TODO_ACTION_TYPES.CHANGE_FILTER,
    payload: {
        filterType: filterType
    }
})

// {
//     text: 'gfdfg',
//     done: false,
//     id: '35345'
// }