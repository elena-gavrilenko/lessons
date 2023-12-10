import { useEffect, useRef } from "react"

export const User=()=>{

    const inputElement=useRef(null)
    console.log(inputElement)

    const focus =()=>{
        inputElement.current.focus()
    }
    useEffect(()=>{
        inputElement.current.focus()
    },[])
    return(
        <>
        <input ref={inputElement} type="text" />
        <button onClick={focus}>Focus</button>
        </>
    )
}