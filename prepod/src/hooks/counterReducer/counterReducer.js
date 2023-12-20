import { ACTION_TYPES } from "./actionTypes"

const initialState = {
    counter: 1
}

export const reducer = (state, action) => {
    // console.log(state)
    // console.log(action)
    switch (action.type) {
        // case 'dec':
        case ACTION_TYPES.DEC:
            return {
                counter: state.counter - action.payload
            }
        case ACTION_TYPES.INC:
        // case 'inc':
            return {
                counter: state.counter + action.payload
            }
        default:
            break;
    }
}