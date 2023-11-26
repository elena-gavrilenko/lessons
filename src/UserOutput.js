import React from "react";


export const UserOutput=(props)=>{
    // export const UserOutput=({mainText})=>
    
    const {mainText}=props;
    console.log(mainText)
    return(
        <div>
            {mainText}
        </div>
    )
}
// второй вариант деструктуризация вместо props {свойство}
// кркглые скобки в return нужны для нескольких строк