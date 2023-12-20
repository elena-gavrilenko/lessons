import { useReducer} from "react";

// типы лучше выделить в отдельны объект

const ACTION_tYPES={
    DEC: 'DEC',
    INC:'INC',
    RESET:'RESET'
}

// если сложный из нескольких состояний, не забывать в возвращать в reducer
const initialState={
    counter: 1
}

function reducer(state,action){
    // console.log(state);
    // console.log(action);

    switch (action.type){
        // case 'dec':
        case ACTION_tYPES.DEC:
        return {
            ...state,
            counter: state.counter-action.payload
        }
       
        // case 'inc':
        case ACTION_tYPES.INC:
            return {
                ...state,
                counter: state.counter+action.payload
            }
        
            case ACTION_tYPES.RESET:
                return {
                    ...state,
                    counter: 0
                }
        default:
            return{
                ...state
            }
    }


    // return {
    //     counter:2
    // }
}

function inc(payload){
    return {
        type: ACTION_tYPES.INC,
        payload
    }
}

function dec(payload){
    return {
    type: ACTION_tYPES.DEC,
    payload
    }
}
function reset(payload){
    return {
    type: ACTION_tYPES.RESET,
    payload
    }
}


export const ReducerExample=()=>{

    const [state,dispatch]=useReducer(reducer,initialState)
    // dispatch помогает менять состояние
    // reducer: принимает текущее состояние,action с типом изменения
    // reducer возвращает новое состояние
    // initialState начальное состояние
    
    // reducer позволяет вынести логику за функцию

    // action генераторы


    // когда использовать reducer: когда много состояний(useState) или когда состояние сложное или одно состояние зависит от другого
  

    function handleClick(){
        // dispatch передаем объект action
        // у действия два парпметра
        // type тип
        // payload - полезная нагрузка
        dispatch({
            type: 'ADD',
            payload: 3
        })
    }

    return (
        <div>
            {/* <button onClick={handleClick}>Меня нажали {state.counter}</button> */}


            {/* <button onClick={()=>dispatch({type:'dec',payload:1})}>-1 </button>
            <button onClick={()=>dispatch({type:'dec',payload:2})}>-2</button>
            <span style={{margin: '10px'}}>{state.counter}</span>
            <button onClick={()=>dispatch({type:'inc',payload:1})}>+1</button>
            <button onClick={()=>dispatch({type:'inc',payload:2})}>+2</button> */}

{/* 
            <button onClick={()=>dispatch({type:ACTION_tYPES.DEC,payload:1})}>-1 </button>
            <button onClick={()=>dispatch({type:ACTION_tYPES.DEC,payload:2})}>-2</button>
            <span style={{margin: '10px'}}>{state.counter}</span>
            <button onClick={()=>dispatch({type:ACTION_tYPES.INC,payload:1})}>+1</button>
            <button onClick={()=>dispatch({type:ACTION_tYPES.INC,payload:2})}>+2</button> */}


            
            <button onClick={()=>dispatch(dec(1))}>-1 </button>
            <button onClick={()=>dispatch(dec(2))}>-2</button>
            <span style={{margin: '10px'}}>{state.counter}</span>
            <button onClick={()=>dispatch(inc(1))}>+1</button>
            <button onClick={()=>dispatch(inc(2))}>+2</button>
            <button onClick={()=>dispatch(reset(0))}>Reset</button>
        </div>
    )
}