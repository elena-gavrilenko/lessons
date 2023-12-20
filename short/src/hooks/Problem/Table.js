import { useState } from "react"
import { Row } from "./Row"
import { mycontext } from "../context-example";

export const Table=()=>{

    const [num, setNum]=useState(20);
    const [theme, setTheme]=useState('dark');

    const themeHandle=()=>{
        setTheme((prevTheme)=>prevTheme==='dark'?'light':'dark')
    }

    return(
        <>
            <mycontext.Provider value={{info:20,theme}}>
                <table style={{border: "1px solid gray"}}>
                    {/* <Row info={num}/> */}
                    <Row/>
                </table>
                <button onClick={themeHandle}>Toggle theme</button>
            </mycontext.Provider>
        </>
    )
}

// контекст решает проблему props drilling