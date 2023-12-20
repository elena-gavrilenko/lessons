import { useContext } from "react"
import { myContext } from "../context-example"

export const TextContainer = (props) => {

    const ctx = useContext(myContext)
    console.log(ctx)

    return (
        // <span>
        //     {'TEXT' + props.info}
        // </span>
        <span style={{background: ctx.theme === 'dark' ? 'black' : 'pink'}}>
            {'TEXT' + ctx.info}
        </span>
    )
}