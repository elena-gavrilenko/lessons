import { legacy_createStore as createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import { thunk } from "redux-thunk";
import { todoReducer } from "./todo/todoReducer";
import { userReducer } from "./user/userReducer";

const rootReducer = combineReducers({
    todo: todoReducer,
    user: userReducer
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))