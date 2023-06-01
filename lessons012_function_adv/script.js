// КАРРИРОВАНИЕ
// 1)
// const tranclate=(locale)=>{
//     return function(text){
//     console.log(`${locale}, ${text}`)
//     }
// }
// const tranclateToRu=tranclate('ru');
// const tranclateToEn=tranclate('en');
// const tranclateToDe=tranclate('de');

// tranclateToRu('Привет');
// tranclateToEn('Hello');
// tranclateToDe('Goten tag')


// 2)
// const urlGenerator=(protocol)=>{
//     return function(url){
//             return function(domain){
//                 return protocol+'://'+url+'.'+domain;
//             }
//     }
// }
// const protocol1=urlGenerator('https');//частичное применение функции
// const protocol2=urlGenerator('http');

// console.log(protocol1('gmail')('com'));
// console.log(protocol1('amazon')('de'));
// console.log(protocol2('yandex')('ru'));


// setTimeout И setInterval
// --------------------------------------

// setTimeout(()=>{
//     console.log('Через  1 секунду')
// },1000);


// console.log('Без таймаута');
//выполнится один раз через интервал

// setInterval(() => {
//     console.log('Интервал в 1 секунду')
// }, 1000);

//будет выполнятся все время чере интервал
//чтобы остановить можно использовать id  интервала или clearInterval

// const id=setInterval(() => {
//     console.log('Интервал в 1 секунду')
// }, 1000);
// console.log(id);
// id=clearInterval

// callback функции
// функция которая передается внутри функции 
// -------------------------------------
// пример
// function greeting(name){
//     alert('Hello, '+name);
// }
// function processUserInput(callback){
//     let name=prompt('Please enter your name');
//     callback(name)
// }

// processUserInput(greeting)

// функция анолог метода map принимает массив и callback
// const arr=[1,2,3,4,5]
// function made(el){
//     return el*2;
// }

// function map(arr, callback){
//     const result=[]
//     for (let i=0; i<arr.length; i++){
//         result.push(callback(arr[i]));
//     }
//     return result
// }

// const newArr=map(arr,made);
// console.log(newArr)


// проверка времени исполнения цикла

// let start=Date.now();
// for (let i=0; i<100000;i++){
    
// }
// let end=Date.now();
// console.log(end-start);


// IIFE  immediatle Invoked function expretion
// функция которая сразу вызывается


// tasks
// 1)
const users = [
    {
        userName: 'Volha',
        isOnline: false,
    },
    {
        userName: 'Vadim',
        isOnline: true,
    },
    {
        userName: 'Petr',
        isOnline: false,
    },
    {
        userName: 'Alex',
        isOnline: true,
    },
    {
        userName: 'David',
        isOnline: true,
    },
    {
        userName: 'John',
        isOnline: true,
    },
    {
        userName: 'Valera',
        isOnline: false,
    },
    {
        userName: 'Alena',
        isOnline: true,
    },
];

// const online=users.filter(user=>user.isOnline===true);
// console.log(online);
// const userName=online.map(user=>user.userName);
// console.log(userName);
// const onlines=userName.reduce((str,name)=>str+','+name);


// короткая запись

// const userOnline=users
// .filter(user=>user.isOnline===true)
// .map(user=>user.userName)
// .reduce((str,name)=>str+','+name);
// let result=users.reduce((arr,el)=>{
//  el.isOnline===true?arr.push(el):[];
  
// },[]);
// console.log(`Users online: result.join(', ')`)


// 2)
function foo(){
    let a=0;
    return function count(b){
        if(b===undefined){
            return a+=1;
        }
        else{
            return a-b
        }
    }
}
const counter=foo();
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter(100));