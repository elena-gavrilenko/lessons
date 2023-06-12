//содание с помощью литерала
// ---------------------------------
// let person={
//     firstName:'Анрей',
//     lastName:'Сидоров',
//     age:35,
//     speak: function(){
//         console.log('person can speak');
//     },
//     // функцию можно записать без ключа
//     walk(){
//         console.log('person can walk');
//     },
//     hobbies:['рисование', 'спорт', 'шашки']
// }

// person.city='Gomel';

// person.speak();
// person.walk();
// person.firstName='Егор';
// console.log(person.firstName);
// console.log(person['lastName']);
// console.log(person);
// console.log(typeof person);//object
// delete person.hobbies;
// console.log(person);

//создание с помощью конструктора
// ----------------------------------------
// let obj1=new Object({name:'David',lastName:'Ivanov'});

//создание с помощью метода create
// let obj2=Object.create({});//как в в примере с obj1 добавить элементы нельзя
// //нужно добавлять вручную
// obj2.name='Ivan';
// obj2.lastName='Ivanov';

// console.log(obj1);
// console.log(obj2);

// let book={
//     name: 'Golden calf',
//     aгthors: ['ilf', 'petrov'],
//     yearOfBirth: 2012,
//     description: 'a work about adventures and travels, the characters of which are constantly moving, either dispersing or meeting again at various points in the novels space',
//     publish: true,
//     reserve(){
//         console.log('can reserve')
//     }
// }
// console.log(book)

// Перебор объекта с помощью цикла for in
// ---------------------------------------------
// const obj={
//     userName: 'Jhon',
//     age:24
// }
// const obj2={
//     city:'Gomel',
//     street: 'Sovetskaya',
//     userName:'David'
// }

// for (const key in obj) {
//     console.log(key),
//     console.log(obj[key])
// }

// соединение нескольких оъектов
// -------------------------------------
// 1)
// const objNew={
//     ...obj,
//     ...obj2
// }
// console.log(objNew)

//2) метод для копирования obj.assign
// --------------------------------------------
// const obj3={};
// Object.assign(obj3,obj,obj2);
// console.log(obj3);

//  если в объектах есть одинаковые поля возьмет последнее

// функция это объект, поэтому в нее можно класть свойства и методы как в объект
// ------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------
// function test(){
//     console.log('from function');
// }
// test.a=10;
// console.log(test.a)//выведет 10

// test.func=()=>{
//     console.log('from arrow func')
// }
// test.func();

// Если ключ в объекте - это функция, то она называется метод
// -----------------------------------------------------
// запись
// const obj={
//     myProperty:1000,
//     say:()=>{
//         console.log('hellow')
//      }
//     // или
//     // say(){}
//     // или
//     // say: function()[

//     // ]
// }

// // hasOwnProperty - проверить есть ли ключ в оъекте

// console.log(obj.hasOwnProperty('myProperty'));
// console.log(obj.hasOwnProperty('myProperty2'));

// const user={
//     first: 'Jhon',
//     lastName:'Doe',
//     bio:{
//         birth:'20.08.1994',
//         age:24,
//         hasWork: true,
//         isMarried:false
//     },
//     address:{
//         city:{
//             // cityName:'gomel',
//             // index: 246000
//         }
//     }
// }
// console.log(user.address.city.cityName);
// // проверка на ошибку(опциональная цепочка)
// console.log(user?.address?.city?.cityName);//опциональная ошибка, работает и с массивами( вернуться в программе к моменту ctr+подвести к элементу)

// // методы для вызова всех ключей, значений и пар ключ-значение
// ---------------------------------------------------------------------

// const keys=Object.keys(user);//получаем массив всех ключей
// console.log(keys);
// const values=Object.values(user);//получим массив значений
// console.log(values);
// const entries=Object.entries(user);//получили массив массивов, где вложенный массив это пара ключ-значение
// console.log(entries);

// const cat={
//     name:'Борис',
//     age:8
// }
// for (const key in cat){
//     console.log(`${key} - ${cat[key]}`);
// }
// чтобы определить длину объекта нужно получить массив ключей и определить его длину через length

// деструктуризация массива(или деструктурирующее присваивание)
// ----------------------------------------------------
// const arr=[1,2,3,4,5,6];
// const [first, second]=arr;
// console.log(first);//выведет 1
// console.log(second);//выведет 2

// // можно вместо перменных поставить запятые. Важна последовательность элементов

// const [,,,,,six]=arr;
// console.log(six);//выведет 6

// деструктуризация объекта
// также и для объекта только в фигурных скобках
// только имена должны быть свойствами объекта
// последовательность не важна. потому что вызов по имени

// const {name,age}=cat;
// console.log(name);
// console.log(age);

// для вложенных объектов
// const obj={
//     first: 'Jhon',
//     lastName:'Doe',
//     bio:{
//         birth:'20.08.1994',
//         age:24,
//         hasWork: true,
//         isMarried:false
//     }

// }
// const {birth,age,hasWork,isMarried}=obj.bio;
// console.log(birth);

// если нужно одно свойство из объекта а второе из вложенного

// const {first,bio:{age}}=obj;
// console.log(first);
// console.log(age);
// можно использовать по умолчанию

// THIS
// --------------------------------------------
// this - контекст вызова, грубая ссылка на то, где мы находимся.
// В глобальном коде this это объект window

// function test(){
//     console.log(this);//тоже window
// }
// console.log(this);

// const user={
//     userName:'Maksim',
//     birth:2000,
//     getName(){
//         // return user.userName; выведет Maksim
//         // через this
//         return this.userName;
//     },
//     getAge(){
//         const currentYear=new Date().getFullYear();
//         return currentYear-this.birth;
//     },
//     getAllInfo(){
//         const age=this.getAge();
//         const user= this.getName();
//         console.log(`Пользователь: ${user}, возраст: ${age}`)
//     }
// }

// console.log(user.getName());
// console.log(user.getAge());
// user.getAllInfo();

//     const user2={
//         userName:'David'
//     }
//     // const user2name=user.getName();
//     // console.log('user2name',user2name)//выдасть Maksim

// // МЕТОДЫ ФУНКЦИЙ
// // -------------------------------------
// // 1) call
// // принимает контекст и аргументы call(контекст, arg1, arg2, ...)

// const user2name=user.getName.call(user2);
// console.log('user2name',user2name);

// const mainHero={
//     fullName:'SpiderMan',
//     health:60,
//     strength:10
// }

// const badHero={
//     fullName:'Joker',
//     health:55,
//     strength:8
// }

// function printHeroInfo(extraInfo=''){
//     console.log('this',this)
//     console.log(`Имя: ${this.fullName}, Здоровье: ${this.health}, Сила: ${this.strength}, доп ${extraInfo} `)
// }
// printHeroInfo.call(mainHero,'Роль: хороший');

// // 2) apply
// // принимает аргументами контекст и массив с аргументами apply(контекст, [arg1, arg2, ...])

// printHeroInfo.apply(badHero,['Роль:злодей']);

// 3) bind не вызывает функцию, а возврщает новую функцию с уже привязанным контекстом
//  аргументы в bind могут передаваться массивом

// let user={
//     firstName:'Вася'
// }
// let user2={
//     firstName:'Петя'
// }
// function func(){
//     console.log(this.firstName)
// }

// let funcUser=func.bind(user);
// let funcUser2=func.bind(user2);

// funcUser();
// funcUser2();

// // ------------------------------------------------------------
// // СТРЕЛОЧНЫЕ ФУНКЦИИ
// // у стрелочных функций нет контекста this
// // устрелочной функции можно убрать круглые скобки, если один аргумент
// // у стрелочной функции можно убрать фигурные скобки, если  сразу идет return
// // у стрелочной функции нет псевдомассива arguments
// // -------------------------------------------------------------------
// стрелочная функуция берет this из родительской области видимости
// let group={
//     title:'Frontemd 31',
//     students: ['Jhon', 'Pete',' Alice'],
//     showlist(){
//         this.students.forEach(student=>console.log(this.title+':'+student));
//     }
// };

// group.showlist();

// TASKS

// const person1 = {
//     name: 'John',
//     age: 23,
//     isProgrammer: true,
//     tech: ['HTML', 'CSS', 'JS']
// };

// const person2 = {
//     name: 'David',
//     age: 34,
//     isProgrammer: false,
//     tech: ['DIG', 'BUILD', 'RUN']
// };

// const person3 = {
//     name: 'Peter',
//     age: 41,
//     isProgrammer: false,
//     tech: ['JUMP', 'SPEAK', 'READ']
// };

// const person4 = {
//     name: 'Gregory',
//     age: 54,
//     isProgrammer: true,
//     tech: ['JAVA', 'NGINX', 'PYTHON']
// };

// const persons = [person1, person2, person3, person4];

// const arr = [
//     { a: 2, b: 1 },
//     { a: 5, b: 12 },
//     { a: 95, b: 7 }
// ];

// 1)
// let p=arr.every(obj=>obj.a>obj.b);
// p?console.log('its valid'):console.log('its invalid');

// 2)
// a)
// let arrNew=arr.map((el)=>{
//    return{
//     a: el.a,
//     b: el.b*el.b}});
// console.log(arrNew)

// b)через деструктуризацию
// let arrNew=arr.map(({a,b})=>{
//     return{
//      a: a,
//      b: b*b}});
//  console.log(arrNew);

// 3)
// let arrNew=[];
// let result=arr.reduce((acc,{a,b})=>{
//     arrNew.push(a);
//     arrNew.push(b);
//     return arrNew;
// },[])
// console.log(result);
//
// 4)
// function getTime(){
//   let time=0;
//   return ()=>{
//     time+=1000;
//     return time;
//   }
// }
// const next=getTime();
// persons.map((el)=>{
//     el.tech.forEach(lang=>setTimeout(()=>console.log(`${el.name} can ${lang}`),next()))
// });
// --------------------------------------------------
// --------------------------------------------------

// 5) 6) 7)
// const person = {
//   name: 'Mr. John',
//   age: 23,
//   isProgrammer: true,
//   tech: ['HTML', 'CSS', 'JS'],
//   becomeProgrammer() {
//     let a = this.isProgrammer;
//     return a ? a : (this.isProgrammer = true);
//   },
//   beOlder() {
//     return this.age++;
//   },
//   becomeMister() {
//     let b = this.name.slice(0, 3);
//     return b === 'Mr.' ? b : (this.name = 'Mr. ' + this.name);
//   },
// };

// const person2 = {
//   name: 'David',
//   age: 34,
//   isProgrammer: false,
//   tech: ['DIG', 'BUILD', 'RUN'],
//   becomeProgrammer() {
//     let a = this.isProgrammer;
//     return a ? a : (this.isProgrammer = true);
//   },
//   beOlder() {
//     return this.age++;
//   },
//   becomeMister() {
//     let b = this.name.slice(0, 3);
//     return b === 'Mr.' ? b : (this.name = 'Mr. ' + this.name);
//   },
// };

// person.becomeProgrammer();
// person.beOlder();
// person.becomeMister();
// console.log(person);

// const person = {
//   name: 'Mr. John',
//   age: 23,
//   isProgrammer: true,
//   tech: ['HTML', 'CSS', 'JS'],
//   //becomeProgrammer : becomeProgrammer,
//   //beOlder: beOlder,
//   becomeMister: becomeMister
// };

// const person2 = {
//   name: 'David',
//   age: 34,
//   isProgrammer: false,
//   tech: ['DIG', 'BUILD', 'RUN'],
//   // becomeProgrammer : becomeProgrammer,
//   // beOlder: beOlder,
//   becomeMister: becomeMister
// };

// function becomeProgrammer() {
//   this.isProgrammer = this.isProgrammer || true;
// };
// function beOlder() {
//   return this.age++;
// };
// function becomeMister () {
//   return this.name.slice(0, 3) === 'Mr.' ? this.name : 'Mr. ' + this.name;
// };

// или
// function becomeMister () {
//   this.name.split(' ').includes('Mr.')? this.name : this.name='Mr. ' + this.name;
// };

// person.becomeProgrammer = becomeProgrammer;
// person.beOlder = beOlder;
// person.becomeMister = becomeMister;
// person.becomeProgrammer();
// person.beOlder();
// person.becomeMister();

// person2.becomeProgrammer = becomeProgrammer;
// person2.beOlder = beOlder;
// person2.becomeMister = becomeMister;
// person2.becomeProgrammer();

// person2.beOlder();

// person2.becomeMister();
// console.log(person2);

// 8)
// const handleObject = function (obj, key, action) {
//   switch (action) {
//     case 'get':
//       return obj[key];
//     case 'add':
//       obj[key] = '';
//       return obj;
//     case 'delete':
//       delete obj[key];
//       return obj;
//     default:
//       return obj;
//   }
// };
// const student = {
//   name: 'Maxim',
//   programmingLanguage: 'JavaScript',
//   }
  
//   const result = handleObjects(student, 'programmingLanguage', 'delete');
//   console.log('result', result);

// ----------------------------------------------------------------------------

// const obj={
//   firstName:'Jhon',
//   _age:30,
//   language: 'EN'
// }

// // методы объектов
// // 1)
// // Object.preventExtensions(obj);//запрещает что-либо делать с объектом, но удалить можно. Необратим.

// // obj.city='Gome';
// // obj.postCode=246000;
// // console.log(obj)
// // 1-проверка)
// console.log(Object.isExtensible(obj));//проверяет можно ли изменять объект(на расширение)

// // 2)
// // Object.freeze()//заморозка
// // obj.city='Gome';
// // obj.postCode=246000;
// // delete obj.language
// // такой же как  1, только еще и удалить нельзя
// // 2-проверка на заморозку
// Object.isFrozen(obj);

// // 3)
// Object.seal(obj);// запечатывание : нельзя добавить, нельзя, удалить можно изменить
// obj.city='Gomel';
// obj.postCode=246000;
// delete obj.language;
// obj.firstName='David'
// console.log(obj)
// // 3 проверка
// console.log(Object.isSealed(obj));

// сеттеры и геттеры
// ------------------------------
// Object.defineProperty(obj,'age',{
//   get(){//сработает при вызове
//     return this._age
//   },
//   set (value){//сработавеыт при записи
//     this._age=value;
//   }

// })
// obj.age=50;
// console.log(obj.age);
// console.log(obj);
// console.log(Object.getOwnPropertyDescriptors(obj));

// добавление свойства
// ------------------------------
// 1)
// obj.city='Gomel';

// добавление свойства и методы и устанавливать флаг на перечисляемость(enumerable)
// Object.defineProperty(obj,'city',{
//   value: 'Boston',
//   enumerable: true
// })

// obj.city='Минск';
// console.log(obj);
// console.log(Object.getOwnPropertyDescriptor(obj));

// получение ключей
// 1)
// for (const key in obj){
//   console.log(`${key}`)
// }
// 2)
// const keys=Object.keys(obj);
// console.log(keys);

// const
// flower={
//   name:'Rose',
//   color:'purple'
// }

// Object.defineProperties(flower,{
//     name:{
//       writable: false,
//       configurable:false
//     },
//     color:{
//       enumerable:false
//     }
//   })
// дескрипторы:
// -----------------------------
// writable
// configurable
// enumerable

// console.log(Object.getOwnPropertyDescriptors(flower));//информация по объекту
// console.log(Object.getOwnPropertyDescriptor(flower,'name'));//информация только по name

// КОНСТРУКТОР
// ----------------------------------------------------------

//  const person1 = {
//     name: 'John',
//     age: 23,
//     isProgrammer: true,
//     tech: ['HTML', 'CSS', 'JS']
// };

// const person2 = {
//     name: 'David',
//     age: 34,
//     isProgrammer: false,
//     tech: ['DIG', 'BUILD', 'RUN']
// };

// const person3 = {
//     name: 'Peter',
//     age: 41,
//     isProgrammer: false,
//     tech: ['JUMP', 'SPEAK', 'READ']
// };

// const person4 = {
//     name: 'Gregory',
//     age: 54,
//     isProgrammer: true,
//     tech: ['JAVA', 'NGINX', 'PYTHON']
// };
// Чтобы не содавать много одинаковых объектов

// ФУНКЦИЮ-КОНСТРУКТОР НАЗЫВАЕМ С БОЛЬШОЙ БУКВЫ

// шаблон
// function Person(name,age,isProgrammer=false){
//   this.name=name;
//   this.age=age;
//   this.isProgrammer=isProgrammer;
//   this.sayHi=function(){//добавление метода
//     console.log(`Меня зовут ${this.name}`)
//   }
// }

// const person1=new Person('Vadim',40);//экземпляры. Унаследовали метод sayHi
// const person2=new Person('Egor',24);
// const person3=new Person('Julia',30);
// const person4=new Person('Sarah',18);
// console.log(person1 instanceof Person);
// console.log(person2);
// console.log(person3);
// console.log(person4);
// person1.sayHi();

// TASKS

// 1)
// function isPalindrom(str){
//    return str.toLowerCase()===str.toLowerCase().split('').reverse().join('')?console.log('Палиндром'):console.log('Не палиндром')
// }
// isPalindrom('арозаупаланалапуазора')
// 2)
// const car={
//   manufactory: 'ford',
//   model: '',
//   yearIssue: 2015,
//   avaregeSpeed: 120,
//   info(){
//     console.log(this);
//   },
//   time(distance){
//     return distance/this.avaregeSpeed;
//   }
// }
// 3)
// const obj={
//   key:'ff'
// }
// function isEmptyObj(obj){
//   return !Object.keys(obj).length?true:false;
// }
// console.group(isEmptyObj(obj));
// 4)
function Book(author, bookName, pageAmount) {
  this.author = author;
  this.bookName = bookName;
  this.pageAmount = pageAmount;
}
const book1 = new Book('Лев Толстой', 'Война и мир', 1300);
const book2 = new Book('Джордж Оруэлл', '1984', 320);
const book3 = new Book('Джеймс Джойс', 'Улисс', 672);
const book4 = new Book('Владимир Набоков', 'Лолита', 448);
const book5 = new Book('Уильям Фолкнер', 'Шум и ярость', 608);
const book6 = new Book('Ральф Эллисон', 'Невидимка', 399);
const book7 = new Book('Вирджиния Вульф', 'К маяку', 288);
const book8 = new Book('Гомер', 'Иллиада и Одиссея', 1304);

let books = Array.of(book1, book2, book3, book4, book5, book6, book7, book8);

// function getBiggerBook(booksArr) {
  // let maxIndex = 0;
  // let maxObjValue=booksArr[maxIndex].pageAmount;
  // for(let i=0;i<booksArr.length;i++){
  //   if(booksArr[i].pageAmount>maxObjValue){
  //     maxObjValue =booksArr[i].pageAmount;
  //     maxIndex=i;
  //   }
  // }

//   return booksArr[maxIndex]
// }

// console.log(getBiggerBook(books));
const maxObj=books.reduce((acc,carrentObj)=>{
  return acc.pageAmount>carrentObj.pageAmount?acc:carrentObj;
})
console.log(maxObj)