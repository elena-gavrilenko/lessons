import { USER_ACTION_TYPES } from "./userActionTypes";

const initialState = {
    user: null
}

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_ACTION_TYPES.USER_LOGIN:
            return {
                ...state,
                user: action.payload
            }
        case USER_ACTION_TYPES.USER_LOGOUT:
            return {
                ...state,
                user: null
            }
        default:
            return { ...state }
    }
}