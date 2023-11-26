import React, {Component} from "react";



export class UserInput extends Component{
    render(){
        const {textForClass,clickOne, clickTwo}=this.props
        console.log(textForClass);
        return (
            <div>
                <button onClick={clickOne}>One</button>
                <button onClick={clickTwo}>Two</button>
            </div>
        )
    }
}
