import { Link } from "react-router-dom"

export const AboutPage=()=>{
    return (
        <>
       < h2>About Page</h2>
       {/* так не пишем */}
       {/* <a href="/about">Go to about page</a> */}
        <Link to="/">Go to main page</Link>
       </>
    )
}