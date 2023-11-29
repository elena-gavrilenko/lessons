import React from 'react';
import { Button} from './Button/button';
// import { Text } from './Text/text';
import { delay } from '../utils/delay';
import { Greeting } from './Greeting/greeting';
import { Header } from './header/header';

export class App extends React.Component {
 
//   состояние можно сделать либо конструктором либо 

  state={
    isVisible: true,
    counter:0
  }

  handleClick=()=>{
    console.log(this.state.isVisible)
    this.setState({
      isVisible:!this.state.isVisible
    })
  }
 

  counterInc=()=>{
    delay(1000).then(()=>{
        this.setState({
        counter: this.state.counter+1
      })
    })
   
  }
 
  counterDec=()=>{
    delay(1000).then(()=>{
      this.setState({
        counter: this.state.counter-1
      })
    })
  }

getTimeOfDay(){
  const date=new Date();
  const time=date.getHours()
  let timeOfDay;

  if(time>=6&& time<12){
    timeOfDay='Доброе утро'
  }
  
  if(time>=12 && time<16){
    timeOfDay='Доброе день'
  }
  
  if(time>=16&& time<23){
    timeOfDay='Доброе вечер'
  }
  if(time>=23&& time<6){
    timeOfDay='Доброе ночь'
  }
  return timeOfDay
}

  render(){
   

    return (
      <>
          {/* <h1>App Component</h1> */}
          {/* <Button handleClick={this.handleClick}/> */}
          {/* <Text/> */}
           {/* вместо тернарного оператора используется следующее  */}
          {/* {this.state.isVisible&&<Text/>} */}

          {/* <Button handleClick={this.handleClick}>
            Props кнопка
          </Button>
          <Button handleClick={this.handleClick}>
            другая кнопка
          </Button> */}
          {/* <Button buttonName='Plus' handleClick={this.counterDec}/>
          <Button buttonName='Minus'handleClick={this.counterInc}/>
          <div>{this.state.counter}</div> */}
          <Header text={this.getTimeOfDay()} />
          <Greeting nameUser='john'/>
      </>
    )
  }
}


