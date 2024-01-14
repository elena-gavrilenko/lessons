// thunk название функций для использования асинхронности
import { API_URL_LOGIN } from "../../components/constants/api"

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
        .then(console.log);
}