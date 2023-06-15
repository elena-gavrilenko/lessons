// КЛАССЫ
// -----------------------------------------------

// function User(name,age){//устарело es5
    // this.name=name;
    // this.age=age;
// }

// es6
// class User{
//     // constructor - инициализация полей
//     // #birthDay=2002

//     static initialValue={
//         name:'David',
//         age:30
//     }
//     constructor(name,age){
//         this.name=name || User.initialValue.name;
//         this.age=age || User.initialValue.age;
//     }
//     sayHi(){
//         console.log(`${this.name} say hi`);
//     }
//     // showBirth(){
//     //     console.log(`${this.#birthDay}`);
//     // }
// }
// const user1= new User('Jhon', 20);
// const user2=new User();
// console.log(user1);
// console.log(user1.age);
// user1.sayHi();

// console.log(user2);
// console.log(user2.initialValue);

// const date=new Date(); //уже есть класс Date и мы создаем экемпляр(instence) класса
// console.log(date.getDate());
// то что экемпляр может пользоваться методами класса Date наывпается наследование
// в классе не используются запятые как в оъекте

// по умолчанию все поля публичные(pablic)
// приватные поля вносятся с помощью # (private)
// к приватным полям можно обратиться только вн=утри класса из вне нет
// console.log(user1.name)//синтаксическая ошибка - приватное поле

// console.log(user1.#birthDay)//ошибка
// console.log(user1.birthDay)//ошибка

// class Device{
//     constructor()
// }

// СТАТИЧЕСКИЕ ПОЛЯ И МЕТОДЫ
// --------------------------------------------------


// сколько экемпляров класса можно создать
// class User{
//     static #MAX_INSTANCE=2;
//     static #instances=0;
  
//     constructor(name){
//         User.#instances++
//         if (User.#instances>User.#MAX_INSTANCE){
//             console.log('невозможно создать экемпляр класса')
//         }
//         this.name=name;
//     }
//     static isUser (user){
//         return user instanceof User
//     }
//     walk(){
//         console.log(`${this.name} can walk`)
//     }
//     // если в методе используется this, то static добавлять нельзя
// }

// const user1=new User('Печорин');
// new User('Бэла');
// // new User('Грушницкий');

// const isUser=User.isUser(user1);
// console.log(isUser);

// наследование
// ------------------------------------------
// class Person{
//     constructor(name,age){
//         this.name=name;
//         this.age=age;
//     }
//     walk(){
//         console.log(`${this.name} can walk`);
//     }
// }

// class Programmer extends Person{
//     // constructor(expYears,name,age){
//         // если не знаем количество параметров
//         constructor(expYears,...params){//rest
//         // инициализация родителя
//         // super(name,age);
//         // super вызывается первым!!!
//         super(...params);//spread
//         this.expYears=expYears;
//     }
//     code(){
//         console.log(`${this.name} cam write code`)
//     }
// }
// // сначала ищет методы у себя, а потом у родителя
// const prm1=new Programmer('2','Peter',35);
// prm1.code();
// prm1.walk();
// console.log(prm1);

// function Auto(brand,color){
//     this.brand=brand;
//     this.color=color;
    // this.drive=function(){
    //     console.log(`${this.brand} can drive`)
    // }
// }
// const bmw=new Auto('BMW','black');
// const nissan=new Auto('Nissan','white');

// bmw.drive();
// nissan.drive();
// console.log(bmw.drive===nissan.drive);//false т.е. каждый раз создается новая функция


// Прототипное наследование
// 2-й принцип ООП - наследование
// ------------------------------------------------------

// prototype или _proto_ 
// Auto.prototype.drive=function(){
//     console.log(`${this.brand} can drive`)
// }

// bmw.drive();
// nissan.drive();
// console.log(bmw.drive===nissan.drive);
// console.log(bmw);

// принципы ООП:
// 1) Наследование
// 2) Инкапсуляция
// 3) Абстракция
// 4) Полиморфизм

// полиморфизм: одно действие несколько реализаций(в данном случае животные идают звуки, но разные)
// class Animal{
//     constructor(name){
//         this.name=name;
//     }
//     makeSound(){

//     }
// }

// class Dog extends Animal{
//     constructor(name){
//         super(name);
//     }
//     makeSound(){
//         console.log('Гав-гав');
//     }
// }
// class Horse extends Animal{
//     constructor(name){
//         super(name);
//     }
//     makeSound(){
//         console.log('Иго-го');
//     }
// }


// абстракция - описание методов без деталей только те которые нужны
// class FBPlayer{
//     constructor(name, clab){
//         this.name=name;
//         this.clab=clab;
//     }
//     shot(){}
//     pass(){}
//     celebrate(){}
// }

// class GK extends FBPlayer{
//     constructor(name, clab){
//         super(name,clab)
//     }
//     shot(){
//         console.log('Не оч сильный удар')
//     }
//     pass(){
//         console.log('Вообще не умеет')
//     }
//     celebrate(){
//         console.log('Ну так себе');
//     }
// }
// function Student(name, age) {
//     this.name = name;
//     this.age = age;
//     this.technologies = [];
//     this.status = 'Junior';
//     this.setTechnologies = function (technologies) {
//         this.technologies = [
//             ...this.technologies,
//             ...technologies,
//         ];
//     };
//     this.setNewStatus = function (newStatus) {
//         this.status = newStatus;
//     };

// }
// 1)
// class Student{
//     constructor(name,age){
//         this.name = name;
//         this.age = age;
//         this.technologies = [];
//         this.status = 'Junior';
//     }
//     setTechnologies(technologies) {
//         this.technologies = [
//             ...this.technologies,
//             ...technologies,
//         ];
//     };
//     setNewStatus(newStatus) {
//         this.status = newStatus;
//     };
// }
// const student = new Student('Maxim', 20);
// student.setTechnologies(['HTML', 'CSS', 'JavaScript']);
// student.setNewStatus('Middle');
// console.log(student);

// 2)
// class Developer{
//     constructor(fullName,age, position){
//         this.fullName=fullName;
//         this.age=age;
//         this.position=position;
//         this.technologies=[]
//     }
//     code(){};
//     learnNewTechnology(technology){
//         this.technologies=[...this.technologies,...technology]
//         // this.technologies.push(technology)
//     }
// }

// class JuniorDeveloper extends Developer{
//     constructor(fullName,age,position='Junior'){
//         super(fullName,age,position);
//         this.technologies=['HTML', 'CSS', 'JavaScript']
//     }
//     code(){
//         console.log('Junior разработчик пишет код...');
//     }
    
// }
// class MiddleDeveloper extends Developer{
//     constructor(fullName,age){
//         super(fullName,age,'Middle');
//         this.technologies=['HTML', 'CSS', 'JavaScript', 'React']
//     }
//     code(){
//         console.log('Middle разработчик пишет код...');
//     }
    
// }
// class  SeniorDeveloper extends Developer{
//     constructor(fullName,age,){
//         super(fullName,age,'Senior');
//         this.technologies=['HTML', 'CSS', 'JavaScript', 'React', 'NodeJS'];
//     }
//     code(){
//         console.log('Senior разработчик пишет код...');
//     }
  
// }

// const juniorDeveloper = new JuniorDeveloper('Анастасия', 20)
// const middleDeveloper = new MiddleDeveloper('Игорь', 25)
// const seniorDeveloper = new SeniorDeveloper('Максим', 30)

// juniorDeveloper.code(); // Junior разработчик пишет код...
// middleDeveloper.code(); // Middle разработчик пишет код…
// seniorDeveloper.code(); // Senior разработчик пишет код...

// console.log(juniorDeveloper.fullName, juniorDeveloper.age, juniorDeveloper.position,juniorDeveloper.technologies); // 'Анастасия', 20, 'Junior'

// console.log(middleDeveloper.fullName, middleDeveloper.age, middleDeveloper.position,middleDeveloper.technologies); // 'Игорь', 25, 'Middle'
// seniorDeveloper.learnNewTechnology('redax')
// console.log(seniorDeveloper.fullName, seniorDeveloper.age, seniorDeveloper.position,seniorDeveloper.technologies); // 'Максим', 30, 'Senior'


// 3)
// class Device{
//     constructor(){
//         this.isSwitchedOn=false;
//     }
//     switch(){
//         this.isSwitchedOn=!this.isSwitchedOn;
//     }
// }
// class Smartphone extends Device{
//     constructor(model,price,){
//         super();
//         this.model=model;
//         this.price=price;
//     }
//     #battery=100;
//     callSmbd(name){
//         if(this.isSwitchedOn && this.#battery>0){
//             this.#battery-=20;
//             if(this.#battery===0){
//                 this.isSwitchedOn=false;
//             }
//         console.log(`you are calling ${name}`)}
//         else{console.log("your device is switched off, you can't call anyone")
//     }
//     }
//     charge(){
//         setTimeout(()=>{
//             this.#battery=100;
//             this.isSwitchedOn=true;
//             console.log(this);
//         },2000)
//     }

// }
// const honor=new Smartphone('Honor p30 light',250);
// console.log(honor);
// honor.callSmbd('Jhon');
// honor.switch();
// honor.callSmbd('Nastya');
// honor.callSmbd('Nastya');
// honor.callSmbd('Nastya');
// honor.charge();
// setTimeout(()=>
// honor.callSmbd('call after charge'),3000);
// honor.callSmbd('Nastya');