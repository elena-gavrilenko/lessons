import { useDispatch, useSelector } from 'react-redux'
import { COUNTER_ACTION_TYPES } from '../redux/actionTypes'
import { getCounterValue } from '../redux/selectors'
// import { decrement, increment, reset, incrementByValue } from '../redux/actions'
import { increment,decrement,reset,incrementByValue } from '../toolkit/slices/counterSlice';
import { getCurrentValueToolkin } from '../toolkit/slices/selector';
import { PropsComponent } from '../propsComponent/propsComponent';
import './counter.scss'
import { useState } from 'react';

export const Counter = () => {
    const [value,setValue]=useState(true);

    const dispatch = useDispatch();

    const counter = useSelector(getCurrentValueToolkin)

    const clickHandler = ({ target }) => {
        if (target.tagName === "BUTTON") {
            const buttonType = target.textContent
            switch (buttonType) {
                case COUNTER_ACTION_TYPES.INCREMENT:
                    return dispatch(increment())
                case COUNTER_ACTION_TYPES.DECREMENT:
                    return dispatch(decrement())
                case COUNTER_ACTION_TYPES.RESET:
                    return dispatch(reset())
                default:
                    break;
            }
        }
    }

    return (
        <div className="counter">
            <h1 className="counter-title">Counter</h1>
            <div className="counter-control" onClick={(e) => clickHandler(e)}>
                <button type="button" className="btn">{COUNTER_ACTION_TYPES.INCREMENT}</button>
                <button type="button" className="btn">{COUNTER_ACTION_TYPES.DECREMENT}</button>
                <button type="button" className="btn">{COUNTER_ACTION_TYPES.RESET}</button>
                <button type="button" className="btn" onClick={() => {dispatch(incrementByValue(20))}}>Add 20</button>
            </div>
            <div className="counter-output">
                {counter}
                
            </div>
            <PropsComponent value={value} title='Title from parent' setValue={setValue}>
                Мой заголовок
            </PropsComponent>
            <div>Value: {value.toString()}</div>
            {/* или */}
            <div>Value: {value? '1':'0'}</div>
        </div>
    )
}