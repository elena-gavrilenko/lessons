import { Link } from "react-router-dom"


export const NotFoundPage=()=>{
    return(
         <div style={{textAlign: 'center'}}>
            <h2 >Page Not Found</h2>
            <Link to='/'>Go to main page</Link>
        </div>
          )
}