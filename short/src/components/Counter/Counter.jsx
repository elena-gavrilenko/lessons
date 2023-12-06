import { useState,useEffect } from "react"
import styles from './counter.module.css'
import axios from 'axios'
import { BASE_URL } from "../constants/Api_link"

export const Counter =()=>{
       
    // return(
    //     <div style={{backgroundColor:'green', color:'white'}}>Counter</div>
    // )

// Хукки(hooks) начинаются со слова use и пишутся в самом начале

// придумываем сами: первая это переменная
const [count, setCount]=useState(0);
const [users, setUsers]=useState([])



useEffect(()=>{
    axios.get(BASE_URL)
    .then(({data})=>{
        setUsers(data.data)
        console.log(data.data)
    })
},[count])
// если массив зависимостей пустой, то вызовется один раз
// хукки можно заменить обычной функцией
function handleInc(){
    setCount(count-1)
}

function handleDec(){
    setCount(count+1)
}

// useEffect хукк аналог componentDidmout, componentWillMount

// const countStyles=count >=0 ?
// {color: 'red',fontSize:'40px'}
// :
// {color: 'green',fontSize:'40px'}
const isDisable=count>=5?true:false;
const isDisable2=count<=-5?true:false;


    return(
    <div>
        {/* <p style={countStyles}>Счетчик: {count}</p> */}
        <p className={count>=0?styles.dec:styles.inc}>Счетчик: {count}</p>
        {/* <button onClick={{handleDec}+1}></button> */}
        {/* <button onClick={()=>setCount(count+1)}>+1</button> */}
        {/* <button onClick={()=>setCount(count-1)}>-1</button> */}
        <button onClick={handleDec} disabled={isDisable}>+1</button>
        <button onClick={handleInc} disabled={isDisable2}>-1</button>

        {users.map((user)=>{
            return <h2 key={user.id}>{user.first_name}</h2>
        })}
    </div>
    )

}
// библиотека стилей mui