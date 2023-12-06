import styled from "styled-components"


export const Todo =()=>{

    //  стили с помощью библиотеки styled component
    const ToDoComponent=styled.div`
        background-color: #2d2d2d;
        width: 400px;
        font-size: 30px;
        border: 2px solid red;
    `

    return(
<ToDoComponent>
    <h1>ToDo component</h1>
</ToDoComponent>
    )
}