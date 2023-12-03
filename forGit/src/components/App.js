import React from 'react';
import { Card } from './Card/Card';
import { DATA } from './constants/data';
import { delay } from '../utils/delay';
import preloaderSrc from '../images/preloader.gif'


export class App extends React.Component {


  state={
    userList:null
  }
// ререндер компонента
// 1. props changes
// 2. state changes
// 3. force update, forceRender

// real DOM(RDOM)
// virtual DOM (VDOM) легкая версия DOM-дерева
// diffing сравнение различий 
//эта сравнение называется согласованием (reconcilation)

//жизненный цикл компонента
// 3 группы
//монтирование компонентиа (mounting)
//обновление компонента (updating)
//удаление или демонтирование компонента(unmounting)

// data деструктурированное поле из пришедшего объекта

//метод, где получаем данные
componentDidMount(){
  // delay(1000).then(()=>fetch('https://reqres.in/api/users?page=2'))
  // .then((resp)=>resp.json())
  // .then(({data})=>{
  //   this.setState(
  //     {userList:data}
  //   )
  // })
  delay(1000).then(()=>fetch('https://jsonplaceholder.typicode.com/users'))
  .then((resp)=>resp.json())
  .then((data)=>{
    this.setState(
      {userList:data}
    )
  })
  console.log('App component did mount')
}
  render() {
    console.log('App render')
    return (
      <>
        <h1>Employees</h1>
        <div>Cards should be here</div>
      {
        !this.state.userList?<img src={preloaderSrc}/>:
        this.state.userList?.map(({name,phone,email,id})=>(
          <Card 
              userName={name} 
              phoneNumber={phone}
              email={email}
              key={id}
            /> 
      // this.state.userList?.map(({first_name,last_name,avatar,id})=>(
      // <Card 
      //     userName={first_name} 
      //     userlastName={last_name}
      //     avatar={avatar}
      //     key={id}
      //   /> 
        )
        
    )}

        {/* <Card 
          userName='Jhon' 
          userlastName='Travolta' 
          avatar='https://reqres.in/img/faces/7-image.jpg'
        /> */}
        {/* <div>
          <div>
            <img src='https://reqres.in/img/faces/7-image.jpg' alt></img>
          </div>
          <div>
          "Michael Lawson",
          </div>
        </div> */}
      </>
    )
  }
}