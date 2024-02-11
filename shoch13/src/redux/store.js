import { legacy_createStore } from "redux";
// эта функция создает хранилище
import { composeWithDevTools } from "@redux-devtools/extension";
// чтобы видеть в девтулз  store  actions
import { counterReducer } from "./reducer";

// чтобы обрабатывать thank(асинхронные действия) нужно юзать applyMiddleware
// нужен редюсер чтобы менять состояние

export const store=legacy_createStore(counterReducer,composeWithDevTools())