// import { useState } from "react"
import { useCounter } from "./useCounter"

export const Eggs=()=>{

    const {count, dec,inc}=useCounter(0,10);
    
    // const [count, setCount]=useState(0);

    // function inc(){
    //    setCount(count+10)
    // }

    // function dec(){
    //     setCount(count-10)
    // }
    return (
        <>
        <h1>Eggs count:{count}</h1>
        <button onClick={inc}>Увеличить</button>
        <button onClick={dec}>Уменьшить</button>
        </>
    )
}