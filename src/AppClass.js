import React from "react";
import { UserInput } from "./UserInput";
import { UserOutput } from "./UserOutput";


const title='Hello from class';
const cls='main_title';
const test='props class component';

export class AppClass extends React.Component{
    
// сщстояние компонент

constructor(props){
    super(props)
    this.state={
        text: 'default from state'
    }
}

    changeTextOne(){
        this.setState({
            text: 'ONE'
        });
        console.log('ONE')
    }
    changeTextTwo(){
        this.setState({
            text: 'TWO'
        })
        console.log('TWO')
    }
    
    render (){
        return (
            <>
            <h1 className={cls}>{title}</h1>
            <UserInput 
                clickOne={this.changeTextOne.bind(this)}
                clickTwo={this.changeTextTwo.bind(this)}
                textForClass={test}/>
            <UserOutput mainText={this.state.text}/>
            </>
        )
    }
}