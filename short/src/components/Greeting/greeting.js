import React from "react";

export class Greeting extends React.Component{

render(){
    
    return(
        <span >{this.props.nameUser}</span>

    )
}

}