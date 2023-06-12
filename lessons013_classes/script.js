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

function Auto(brand,color){
    this.brand=brand;
    this.color=color;
    // this.drive=function(){
    //     console.log(`${this.brand} can drive`)
    // }
}
const bmw=new Auto('BMW','black');
const nissan=new Auto('Nissan','white');

// bmw.drive();
// nissan.drive();
// console.log(bmw.drive===nissan.drive);//false т.е. каждый раз создается новая функция


// Прототипное наследование
// 2-й принцип ООП - наследование
// ------------------------------------------------------

// prototype или _proto_ 
Auto.prototype.drive=function(){
    console.log(`${this.brand} can drive`)
}

bmw.drive();
nissan.drive();
console.log(bmw.drive===nissan.drive);
console.log(bmw);

// принципы ООП:
// 1) Наследование
// 2) Инкапсуляция
// 3) Абстракция
// 4) Полиморфизм

// полиморфизм: одно действие несколько реализаций(в данном случае животные идают звуки, но разные)
class Animal{
    constructor(name){
        this.name=name;
    }
    makeSound(){

    }
}

class Dog extends Animal{
    constructor(name){
        super(name);
    }
    makeSound(){
        console.log('Гав-гав');
    }
}
class Horse extends Animal{
    constructor(name){
        super(name);
    }
    makeSound(){
        console.log('Иго-го');
    }
}


// абстракция - описание методов без деталей только те которые нужны
class FBPlayer{
    constructor(name, clab){
        this.name=name;
        this.clab=clab;
    }
    shot(){}
    pass(){}
    celebrate(){}
}

class GK extends FBPlayer{
    constructor(name, clab){
        super(name,clab)
    }
    shot(){
        console.log('Не оч сильный удар')
    }
    pass(){
        console.log('Вообще не умеет')
    }
    celebrate(){
        console.log('Ну так себе');
    }
}