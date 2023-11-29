import React from "react";

export class Button extends React.Component{

    render(){
        // деструктуризация
        const {handleClick,buttonName}=this.props
        return (
            <button onClick={handleClick}>
               {/* {this.props.children} */}
               {buttonName}
            </button>
        )
    }
}