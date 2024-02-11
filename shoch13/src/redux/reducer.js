import { COUNTER_ACTION_TYPES } from "./actionTypes";
const initialState={
    counter:0
}

// counterReducer состояние в зависимости от действия. Действие это объект, который должен иметь хотя бы одно поле type, а второе нагрузка payload
export const counterReducer=(state=initialState,action)=>{
    switch (action.type) {
        case COUNTER_ACTION_TYPES.INCREMENT:
        return {
            // если еще что-то есть в объекте initialState
            ...state,
            counter:state.counter+1
        }   
            
        case COUNTER_ACTION_TYPES.DECREMENT:
            return {
                ...state,
                counter:state.counter-1
            } 
           
        case COUNTER_ACTION_TYPES.RESET:
            return {
                ...state,
                counter:0
            } 
           
        case COUNTER_ACTION_TYPES.INC_BY_VALUE:
            return {
                ...state,
                counter:state.counter+action.payload
            } 
            
        default:
            return {
                ...state,
                
            } 
    }
}
