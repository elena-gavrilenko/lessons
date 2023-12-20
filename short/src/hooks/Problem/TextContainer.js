import { useContext } from "react"
import { mycontext } from "../context-example"


export const TextContainer=(props)=>{

    const ctx=useContext(mycontext)
    console.log(ctx)
    return(
        // <span>
        //     {'TEXT' + props.info}
        // </span>
         <span style={{background: ctx.theme==='dark'?'black':'pink'}}>
         {'TEXT' + ctx.info}
        </span>
    )
}