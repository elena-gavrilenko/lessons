// set - коллекция уникальные значения
// -----------------------------------------
// нет индексов
// ----------------------------------------------
// методы:
// 1. add()//добавляет элесменты
// 2. delete() -удаляет элементы
// 3. size() -  размер
// 4. has() - проверяет есть ли там элемент
// 5. clear() - очистить
// 6.  обход с помощью forEach и for...of
// const uniq=new Set();

// uniq.add(2);
// uniq.add('test');
// uniq.add(true);
// uniq.add([1,2,3]);
// uniq.add([1,2,3]);//добавится, потому что по ссылке
// uniq.add({fillName:'David',age:23});


// console.log(uniq);
// uniq.delete('test');
// console.log(uniq);
// console.log(uniq.size);
// console.log(uniq.has(true));


// uniq.forEach(el=>console.log(el));

// uniq.clear();
// console.log(uniq);

// ---------------------------------------------------------
// Map
// ---------------------------------------------------------
// map хранит любые данные в виде пар и ключом может быть ЧТО УГОДНО
// Методы повторяются как у set. Новые set и get.
// set - положить
// get - получить
// const collection=new Map();
// // в set передаются два значения
// collection.set(1,'Value 1 like a number');
// collection.set('1','Value 1 like a string');
// collection.set('1','Value 1 like ');
// collection.set([],'Array');

// const person={
//     age:20,
//     fullName:"Jhon"
// }

// collection.set({},'Object');
// collection.set(person,'obj was created');
// collection.set(null,undefined);
// collection.set(undefined,null);
// // с одинаковыми парами не добавляет, а если повторяется ключ, то значение перзаписывается


// collection.set(true)
// console.log(collection);
// console.log(collection.get(person));

// console.log(collection.has(1))//по ключу

// collection.delete(null)//удаление тоже по ключу

// collection.forEach((el)=>console.log(el))//выводит значения
// // collection.clear();
// // for(const [key,value]/*iterator*/ of collection){
// //     console.log(`ключ ${key} : значение ${value}`)
// // } 
// console.log(collection);


// -------------------------------------------------------
// РЕГУЛЯРНЫЕ ВЫРАЖЕНИЯ
// -------------------------------------------------------

// const patten1=new RegExp(шаблон,флаг);
// const pattern = /шаблон/флаг;

// const patten1=new RegExp('hello','g');
// const pattern = /\w+l{2}\w+/;
// const str='hello world hello';

// test
// ------------------------------------
// console.log(pattern.test(str));//вернет true или false

// exec
// ----------------------------------------
// console.log(pattern.exec(str));//вернет массив с совпадением и доп информацией

// match
// ------------------------------------------------
// let str = "The quick brown fox jumps over the lazy dog.";
// const pattern = /the/gi;
// let result = str.match(pattern);//возвращвет массив совпадений
// console.log(result);

// replace
// -----------------------------------------------------
// let str = "Привет, мир!";
// const pattern = /мир/;

// let str2='Hello world';

// let newstr = str.replace(pattern, "земля");//возвращает измененную строку с заменой
// let res=str2.replace(/\w+$/,'home')
// console.log(res);

// console.log('Исходная строка:',str);
// console.log('Новая строка:',newstr);

// const str3='Hello world hello';
// const res2 = str3.replace(/\w+l{2}\w+/g,'buy');
// console.log(res2);

// ----------------------------------
// сайт regex101.com проверка регулярки
// ---------------------------------------


// task
// 1)
// let str='First, I wake up. Then, I get dressed. I walk to school. I do not ride a bike. I do not ride the bus. I like to go to school at 13.00. It rains. I do not like rain. I eat lunch. I eat a sandwich and an apple.'
// 2)
// let res=str.replace(/apple/g, 'potato');
// console.log(res);
// let res2=str.replace(/\.[^0]/g,'!').replace(/\.$/,'!')
// console.log(res2);
// 3)
// const text='Lorem ipsum dolor, sit amet consectetur adipisicing elit.'
// let res=/[a-z]+/ig.test(text);
// console.log(res);

// -------------------------------------------
// ПАТТЕРНЫ ПРОЕКТИРОВАНИЯ
// ------------------------------------------
// сайт refactoring curu

// 1) Singleton будет только один класс
// class Person{
//     constructor(name){
//         if (Person.instance){
//             return Person.instance;
//         }
//         this.name=name;
//         Person.instance=this;
//     }
//     run(){
//         console.log(`${this.name} runs`);
//     }
// }
// const p1= new Person('Oleg');
// const p2= new Person('Egor');

// p1.run();
// p2.run();

// console.log(p1===p2)

// 2) factry

// class Transport{
//     constructor(type,width,height){
//         this.type=type;
//         this.width=width;
//         this.height=height;
//     }
//     transport(to){
//         console.log(`You delivery to ${to} ${this.type}`);
//     }
// }

// // супер класс
// class Logistics{
//     constructorTransport(type){
//         if (type==='sea') {
//             return new Transport(type,300,200);
//         }
//         else{
//             return new Transport(type,150,40);
//         }
//     }
// }

// const fabriclogistics=new Logistics();

// const fura=fabriclogistics.constructorTransport('ground');
// const korablic=fabriclogistics.constructorTransport('sea');

// fura.transport('Minsk');
// korablic.transport('Mogilev')


// ------------------------------------------------
// 3) Abatract factory фабрика фабрик
// --------------------------------------------

// у фабрик должно совпадать кодичество параметров
// ---------------------------------------------------------
// class WaterTransport{
//     constructor(type,speed,displacment){
//         this.type=type;
//         this.speed=speed;
//         this.displacment=displacment
//     }
//     transport(to){
//                 console.log(`You delivery to ${to} by ${this.type} with ${this.speed} sea miles`);
//             }
// }

// class GroundTransport{
//     constructor(type,speed,wheels){
//         this.type=type;
//         this.speed=speed;
//         this.wheels=wheels
//     }
//     transport(to){
//                 console.log(`You delivery to ${to} by ${this.type} with ${this.speed} kmph`);
//             }
// }

// function getWaterTypeTransport(type){
//     if (type==='sea') {
//         return new WaterTransport(type,100,3000)
//     } else if (type==='river') {
//         return new WaterTransport(type,200,400)
//     }
// }

// function getGroundTypeTransport(type){
//     if (type==='asphalt') {
//         return new GroundTransport(type,120,10)
//     } else if (type==='sand') {
//         return new GroundTransport(type,40,6)
//     }
// }

// function transportProducer(type){
//     return type==='water'?getWaterTypeTransport:getGroundTypeTransport;
// }


// const waterFactory=transportProducer('water');
// const groundFactory=transportProducer('ground');


// const korablic=waterFactory('sea');
// const lodka=waterFactory('river');

// korablic.transport('Gomel');
// lodka.transport('dobrush');

// const fura=groundFactory('asphalt');
// const buggle=groundFactory('sand');

// fura.transport('Selmash');
// buggle.transport('zlobin');


// -------------------------------------
// 4) Прокси(заместитель)
// -------------------------------------

// class Person {
//     constructor (name) {
//     this.name = name;
//     }
//     walk (to) {
//     console.log(`${this.name} walks to ${to}`);
//     }
//     sleep (hours) {
//     console.log(`${this.name} sleeps ${hours} hours`);
//     }
// }

// class HumanProxy {
//     constructor (human) {
//     this.human = human;
//     }
//     walk (to) {
//     if (to === 'bar') {
//     console.log('he does not go anywhere!')
//     } else {
//     this.human.walk(to);
//     }
//     }
//     sleep (hours) {}
// }
        
// const proxiedHumen=new HumanProxy(new Person('Oeg'));
// proxiedHumen.walk('bar');
// proxiedHumen.walk('home');



// tasks

// 1)
// function removeVowels(str){
//     let letters=['a', 'e', 'i', 'o', 'u'];
//     return str.split('').filter(el=>!letters.includes(el)).join('');
// }
// console.log(removeVowels("drake")) // => "drk"
// console.log(removeVowels("aeiou")) // => ""


// 2)
// const Calculator={
//     add(a,b){
//         return a+b; 
//     },
//     subtract(a,b){
//         return a-b
//     },
//     multiply(a,b){
//         return a*b
//     },
//     divide(a,b){
//         return b===0?false:a/b;
//     }
// }
// console.log(Calculator.add(2,5));
// console.log(Calculator.subtract(2,5))
// console.log(Calculator.multiply(2,5))
// console.log(Calculator.divide(2,0))

// 3)
// class Timer{
//     constructor(){
//         this.counter=0;
//         this.timerIDs=[];
//     }
//     start(){
//            const timerID=setInterval(()=>{
//               this.counter+=1;
//               console.log(this.counter);
           
//         },1000)
//             this.timerIDs.push(timerID);
//     }
//     stop(){
//         clearInterval(this.timerIDs[0])
//     }
//     reset(){
//         this.counter=0
//     }
// }
// const timer1=new Timer();
// const timer2=new Timer();
// timer1.start();
// setTimeout(() => {
//     timer1.stop()
// }, 5000);

// setTimeout(() => {
//     timer1.start()
// }, 7000);
// setTimeout(() => {timer2.start()},10000);

// setTimeout(() => {
//     timer1.stop();
//     timer1.reset()
// }, 10000);

// setTimeout(() => {
//     timer2.stop();
// },2000);

// 4)
function noRepeat(str){
      for (let elem of str){
       if(str.indexOf(elem)===str.lastIndexOf(elem)){
           return elem;
       }
    }
}
console.log(noRepeat("aabbccdde")) // => "e"
console.log(noRepeat("wxyz")) // => "w"
console.log(noRepeat("testing")) // => "e"