import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import preloader from '../../images/preloader.gif';
import { User } from "../User/User";
import { Link } from "react-router-dom";



export const UserPage=()=>{
    const [userData, setUserData]=useState(null);
    const [isLoading, setIsLoading]=useState(false);

    const {userId}=useParams();

    console.log(userId)

    useEffect(()=>{
        setIsLoading(true);
        fetch(`https://reqres.in/api/users/${userId}`)
        .then((resp)=>resp.json())
        .then(({data})=>setUserData(data))
        .finally(()=>setIsLoading(false))

    },[])

    console.log(userData)

    return(
        <>
        {!isLoading
        ? <User {...userData}/>
        :<img src={preloader}/>
        }

        <Link to='/'>Go to main page</Link>
        </>
    )
}