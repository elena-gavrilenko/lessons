// как объявляется функция

// 1)function declaration -простое объявление функции

// function greeting(параметр){
//     // тело функции - блок кода, который будет выполняться при вызове функции
//     console.log('Hello from function')
// }

// greeting(аргумент)

// function greeting(text){
//     // тело функции - блок кода, который будет выполняться при вызове функции
//     console.log(`${text} from function`)
// }

// greeting('Hi');
// greeting('Hello');
// greeting('Good morning');
// greeting('Приветик');

// function sum(a,b){
//     const result=a+b;
//     // console.log(result);
//     return result;
// }
// //  все что находится после return в функции НЕ РАБОТАЕТ, поэтому return пишут перед закрывающейся скобкой
// const resultFunc=sum(2,6);
// console.log(resultFunc);

// fanction decaration можно вывать до объявления
// -------------------------------------------------

// 2)function Expression функциональное выражение

// функции анонимные
// const func=function(test){
//     console.log(test);
//     console.log('Hello from func expression');
// }
// func('Hi');

// function Expression можно вызвать только после объявления
// -------------------------------------------------------------

// параметры функции доступны только внутри функции

// функция это объект, при typeof выводит function

// функция это объект первого класса:
// - функции можно присваивать переменным
// - функции можно передавать как аргумент функции
// - функции можно возвращать из других функций

// let a=5;
// let b=10
// function sum(a,b){
//         // const result=a+b;
//         a+=10
//         console.log(a+b);
//         console.log(arguments);//псевдомассив у него нет методов массива. Есть только индексы и длина. По длине arguments можно проверять количество переданных параметров и обращаться к ним по индексам.
// return result;
// внешнюю переменную а не трогает, а изменяет внутреннюю
// }

// sum(a,b)
// console.log(a);//выведет 5

// дефолтные параметры пишутся:
// function sum(a=0,b=0){}
// в старых версиях это не поддерживается и задается внутри функции
// let a==a||0

// 3) Arrow Function
// если аргумент один, можно писать без скобок
// если return в одну строку можно убрать фигурные скобки
// const func1=()=>{
//     console.log('Hello from Arrow Function');
// }

// func1();

// task
// 1)
// function checkNumber(str){
//    let isNumber=Number(str)
//    return (!!isNumber)?true:false;
// }

// console.log(checkNumber('123ff'))

// 2)
// function getEverageBall(ball1,ball2,ball3,ball4){
//     return (ball1+ball2+ball3+ball4)/4;
// }
// console.log(getEverageBall(4,7,2,9));

// 3)
// function win(w,f){
//     return `побед ${w/(w+f)*100}%, поражений ${f/(w+f)*100}%`
// }
// console.log(win(4,6))

// 4)
// function getSumOfNumbers(number,type='odd'){
//     let sum=0;
//     for(let i=0; i<=number;i++){
//     if(!type){
//             sum+=i;
//         }
//      else if(type==='even'){
//              i%2==0?sum+=i:sum;
//       }
//     else if(type==='odd'){
//            i%2!==0?sum+=i:sum;
//         }

//     }
//     return sum;
// }
// console.log(getSumOfNumbers(10,'odd'));
// console.log(getSumOfNumbers(10,'even'));
// console.log(getSumOfNumbers(10,''));

// 18.05.23
// tasks
// 1)
// function getTable(num){
//     for(let i=1; i<10;i++){
//     console.log(`${num} x ${i} = ${num*i}`)
//     }
// }
// getTable(2);

// 2)
// function fillArray(length){
//     let arr=[];
//     for(let i=0; i<length;i++){
//         arr.push(Math.floor(Math.random()*10));
//     }
//     return arr;
// }
// console.log(fillArray(5));

// 3)
// function getDegreeNumber(number,degree){
//     return Math.pow(number,degree);
// }
// console.log(getDegreeNumber(2,3));

// 4)
// function args_count(){
//     return `Количество аргументов: число ${arguments.length}`;
// }
// console.log(args_count(1, 2, 3, 10));

// 5)
// function calculateSheep(num){
//     if(num){
//         let arr=[];
//         for (let i=1; i<=num;i++){
//             arr.push(i);
//             // console.log( arr)
//         }
//         return arr.join(' sheep...');
//     }
//     else return '';

// }
// console.log(calculateSheep(10))

// 6)
// function getAbbrName(name){
//     let nameArr=name.split(' ');
//     return `${nameArr[0][0].toUpperCase()}.${nameArr[1][0].toUpperCase()}.`
// }
// console.log(getAbbrName('Sam Harris'));

// function test(n){
//     const result=n;
// //бег return вернет undefined
// }
// console.log(test(2))

// ОБЛАСТЬ ВИДИМОСТИ SCOPE
// блочной видимости у var нет, а функциональная есть

// function counter() {
//   let count = 0;
//   return function () {
//     console.log(count++);
//   };
// }
// let a = counter();
// a();
// a();
// a();
// let b = counter();
// a();
// a();
// b();
// b();
// b();
// ПОДНЯТИЕ HOISTING
// 1)
// function get() {
//   let bool = true;
//   return function () {
//     return (bool = !bool);
//   };
// }
// let f = get();
// console.log(f());
// console.log(f());
// console.log(f());
// console.log(f());

// const sayHi=()=>{
//   let greet='Hi';
//   function say(userName){
//     console.log(`${greet}, ${userName}`);
//   }
//   return say;
// }

// let useSayHi=sayHi();
// console.log(useSayHi);
// useSayHi('Jhon');
// useSayHi('Martin');


// Чистая функция, котроая;
// - при одинаковых аргуменах возвращает одинаковый реультат;
// - и не общается с внешними данными, 
// -которые меняют приложение 

// function(a,b){
//   return a+b;
// }
// если есть console.log, то уже нет, потому что console.log браузерный объект


// ---------------------------------------------------------
// РЕКУРСИЯ
// Повторение самого себя
// В js это функция, которая повторяет самую себя

// function factorial(x){
//   if (x<0) return 0;
//   if (x===0) return 1;
//  return x*factorial(x-1); 
// }
// console.log(factorial(5))

// 1)
// function sum(n){
//   if (n===0) return 0;
//   return n+sum(n-1)
// }
// console.log(sum(5))

// 2)
// function sum(n){
//   let sum=0;
//   for (let i=1; i<=n;i++){
//     sum+=i;
//   }
//   return sum;
// }
// console.log(sum(5));

// 3)
// function sumArray(arr,sum=0){
//    if(arr.length) {
//    return sumArray(arr,sum+arr.pop());
//   }
//   else{
//     return sum;
//   }
// }
// let arr=[1,2,3];
// console.log(sumArray(arr));