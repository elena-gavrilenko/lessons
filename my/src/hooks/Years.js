// import { useState } from "react"
import { useCounter } from "./useCounter";


export const Years=()=>{

    const {count, dec,inc}=useCounter(1992,1);
    // const [years, setYears]=useState(0);

    // function inc(){
    //    setYears((ye)=>ye+1);
    // //    если интересует предыдущее значение
    // }

    // function dec(){
    //     setYears(years-1)
    // }
    return (
        <>
        <h1>Years count: {count}</h1>
        <button onClick={inc}>Увеличить</button>
        <button onClick={dec}>Уменьшить</button>
        </>
    )
}


// проверка пароля

// function passWordCheck(){

// }

// function handleChange(e){
//     setPass(e.target.value)
//     passWordCheck(pass)
// }