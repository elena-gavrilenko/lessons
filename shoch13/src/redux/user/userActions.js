import { API_URL_LOGIN } from "../../components/constants/api"
import { USER_ACTION_TYPES } from './userActionTypes'

export const userSignIn = (name, pass) => (dispatch) => {
    fetch(API_URL_LOGIN, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            username: name,
            password: pass,
        })
    })
        .then(res => res.json())
        .then((user) => {
            if (!user.message) {
                dispatch({
                    type: USER_ACTION_TYPES.USER_LOGIN,
                    payload: user
                })
            }
        });
}

export const userLogOut = () => ({
    type: USER_ACTION_TYPES.USER_LOGOUT,
})

// push to todo list page
// log out
// applymiddle
// thunk
