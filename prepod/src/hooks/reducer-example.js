import { useReducer, useState } from "react"

const ACTION_TYPES = {
    DEC: 'DEC',
    INC: 'INC'
}

const initialState = {
    counter: 1,
    text: 'test'
}

// action генераторы
function inc(payload) {
    return {
        type: ACTION_TYPES.INC,
        payload
    }
}

function dec(payload) {
    return {
        type: ACTION_TYPES.DEC,
        payload
    }
}

function reducer(state, action) {
    console.log(state)
    // console.log(action)
    switch (action.type) {
        // case 'dec':
        case ACTION_TYPES.DEC:
            
            return {
                ...state,
                counter: state.counter - action.payload
            }
        case ACTION_TYPES.INC:
        // case 'inc':
            return {
                ...state,
                counter: state.counter + action.payload
            }
        default:
            return {
                ...state
            }
    }
}

export const ReducerExample = () => {

    const [state, dispatch] = useReducer(reducer, initialState)
    // reducer: предыдущее состояние, action с типом для изменения
    // reducer - возвращает новое состояние
    // initialState начальное состояние

    // const dispatch2 = (action) => {
    //     reducer(state, action)
    // } 

    function handleClick() {
        // dispatch передаем объект action (действие)
        // у дествия 2 параметра:
        // type - тип
        // payload - полезная нагрузка
        dispatch({
            type: 'ADD',
            payload: 3
        })
    }

    return (
        <div>
            {/* <button onClick={handleClick}>Меня нажали {state.counter}</button> */}
            {/* <button onClick={() => dispatch({ type: 'dec', payload: 1 })}>-1</button>
            <button onClick={() => dispatch({ type: 'dec', payload: 2 })}>-2</button> */}
            {/* <button onClick={() => dispatch({ type: ACTION_TYPES.DEC, payload: 1 })}>-1</button> */}
            {/* <button onClick={() => dispatch({ type: ACTION_TYPES.DEC, payload: 2 })}>-2</button> */}
            <button onClick={() => dispatch(dec(1))}>-1</button>
            <button onClick={() => dispatch(dec(2))}>-2</button>
            <span>{state.counter}</span>
            <button onClick={() => dispatch(inc(1))}>+1</button>
            <button onClick={() => dispatch(inc(2))}>+2</button>
        </div>
    )
}