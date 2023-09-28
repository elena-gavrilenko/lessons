// без webpack можно селать nmp tsc -w
// настройка webpack medium.com
// чтобы добавить modul: npm install


// ts самонастраивающийся язык
// типы : типом может все что угодно
//  когда константа, то тип может быть то что написано после = , и оно же может быть типом по определению для let , делая из нее константу и это должно быть обосновано, делается это с помощью as  и называется кастовать

// 'any' лучше не использовать, потому что он как бы отключает  ts и включает js(динамически типизирован)

// типы через |  называется юнион как бы общий
// let userStatus: 'admin' | 'user' | 'none'='admin';
// тогда можно только из этих вариантов

// let user=undefined;
// тип unknow не дает видеть подсказки (методы, например), потому что не знает тип
// unknow можно испольовать только когда проверишь тип с помощью if

// let a:any='Kell';
// console.log(a.togiii())//можно писать всякую фигню

// тип enum тип перчисления
// const SIZIS={
//     S:'S',
//     L:'L',
//     XS:'XS',
//     XL:'XL',
//     M:'M'

// }

// enum Size{
//     S,
//     L,
//     XS,
//     XL,
//     M
// }
// let size: Size=Size.S


// function types
// type aliases,interface
// never|void
// arrays, tules
// duck


// const add=(a:number,b:string)=>{
//     return a+b;
// }
// другой синтаксис
// const add:(a:number,b:string)=>number=(a,b)=>{
//     return a+b;
// }
// yне лучший вариант
// const res=add(1,'as');
// знак ? после переменной означает, что аргумет может существовать, а может нет
// const add=(a:number,b?:string)=>{
//     return a+b;
// }
// const res=add(1);

// const func=(a:number)=>{
//     throw new Error('some custom error')
// }
// тип функции never, потому что нет return
// между never и любым другим типом вернет вседа другой тип


// const c=2;
// const d=3;
// const result =c<d ? 'hello':'goodbay';


// тип void
// void помечает результат функции у которой нет return
// const func = (a:number) =>{
//     console.log(a**2)
// }

// const res=func(3);
// console.log(res)


// arrays
// 1)
// если одного типа
// const arr: number[]=[2,3,4];

// const func=(arr:number[])=>{

// }

// если разного типа
// const arr: (number|string)[]=['as','ae',3,2]


// двухмерный массив
// const arr: (number|string)[][]=[[1,0],['sd',1]];

// 2)
// через дженерик
// const arr2:Array<number>=[2,3,4];
// предпочтительно первый


// tuple или кортеж(массив со строгоопределенным количеством элеметнов и строгоопределенного типа)
// const arr: [number,string, boolean]=[2,'as',true];

// arr.push(99); //ошибка typescripta
// console.log(arr)


// aliases

// const jhon={
//     name:'Jhon',
//     age:22,
//     city:'Boston'
// }
// если нужно много однотипных объектов

// type Person ={
//     name:string;
//     age:number;
//     city: string;
    // status: 'admin'|'user'|'none';  можно добавить
    // rograminSscills?: string[] -? означает, что поле может отсутствовать(опциональное)
    // run;(destination:string)=>void;//или
    // walk():void
// }
// Person это тип (описание). Обратиться к полям нельзя
// и тогда

// const peter:Person={
//     name:'Peter',
//     age:28,
//     city:'Gomel'
// }
// const valerchik={
//     username: 2,
//     name:'valerchik',
//     age:32,
//     city: 'Buda'
// }

// const arr:Person[]=[jhon,peter,valerchik];
// и даже если добавить правильные поля , typescript примет его это называется утиной типизацией duck


// интерфейсы

// буква I по договоренности
// interface IAnimal {
//     paws:number;
//     hasTail:boolean;
//     run? ():void; //поля в и нтерфейсе можно делать опциональными
//     walk?: (destination:string)=>void//или
// }

// const cat: IAnimal={
//     animalName: 'Murzik',
//     hasTail:true,
//     paws:4,
//     run() {},
//     walk() {},
// }
// отличия между интерфейсом и типом

// Если переопределить тип, то выдаст ошибкую Так делать нельзя

// interface IAnimal {
//     animalName: string
// }
// А  интерфейс объединяет два или несколько объявлений, расширяясь


// Union intersection for type

// для простых понятно number|string
// для сложных должно удовлетворять хотя бы одному типу полностью, остальные свойства по выбору

// -----------------------------------------------
// UNION
// type Car ={
//     model: string;
//     engineVol:number;
// };

// type Moped={
//     hasSeat:boolean;
//     wheels:number;
// }

// с интерфейсом работает точно также

// interface Car {
//     model: string;
//     engineVol:number;
// };

// лучше испольовать или то или то
// type Moped ={
//     hasSeat:boolean;
//     wheels:number;
// }
// type CaroMoped=Car|Moped;

// const buggle:CaroMoped = {
//     model: 'shmuggy',
//     engineVol: 2000,
//     hasSeat: false
// }


//  in  бинарный строка in объект проверяет наличие поля строка в объекте, а если нет, идет дальше в прототип 
// function showModel (obj: CaroMoped){
//     if ('model' in obj){
//         console.log(obj)
//     } else {
//         console.log(obj)
//     }
// }
// функция-предикат возвращает булево значение

// const isCar = (val:CaroMoped) : val is Car =>{
//     return 'model' in val;
// } 
// function showModel (obj: CaroMoped){
//     if (isCar(obj)){
//         console.log(obj)
//     } else {
//         console.log(obj)
//     }
// }

// ----------------------------------------------------------

// Intersection
// должны присутствовать все поля

// type Car ={
//     price: number;
//     model: string;
//     engineVol:number;
// };

// type Moped={
//     // price: string;
//     hasSeat:boolean;
//     wheels:number;
// }

// type CaroMoped=Car & Moped;

// const buggle:CaroMoped = {
//     model: 'shmuggy',
//     engineVol: 2000,
//     hasSeat: false,
//     wheels: 2,
//     price:2
// }

// const isCar = (val:CaroMoped) : val is Car =>{
//     return 'model' in val;//проверить на тип
// } 
// function showModel (obj: CaroMoped){
//     if (isCar(obj)){
//         console.log(obj)
//     } else {
//         console.log(obj)
//     }
// }
// если два поля одинаковые пишется один раз, а если они разного типа, то выдает ошибку type never.
// тогда в предикате нужно проверять не только наличие поля, но его typeOf

// для интерфейсов валидно union и Intersection

// interface IShip {
//     height: number;
//     width: number;
    
// }
// interface ISwimingShip extends IShip {
//        swim():void;
// }
// type SwimmingShip = IShip & {swim():void};

// const obj: SwimmingShip = {
//     swim() =>{},
//     height: 2,
//     width: 1,
    
// }

// ---------------------------------------------

// keyof 
// слева от keyof должен стоять тип

// interface IUser {
//     name:string;
//     age:number;
// }

// type Smth = keyof IUser;

// // Smth это тип для какого-нибудь поля User

// const key: Smth = 'age';
// const user: IUser = {
//     age: 23,
//     name: 'Jhon'

// };

// console.log(user[key]);

// ----------------------------------------------------------
// typeof
// смысл typeof на основании значения вернуть тип

// const person = {
//     name: 'Peter',
//     age:2,
//     stack: [2,1,3,4]
// }
// typeof возвращает тип
// type Person =typeof person;

// должны быть такие же поля
// const person2: Person = {
//     name: 'valerchik',
//     age:5,
//     city: 'Gomel',// выдает ошибку, потому что такого поля нет
//     stack: [2,1,3,4]
// }


// получение ключей из неизвепстногшо объекта
// const person = {
//     name: 'Peter',
//     age:2,
//     stack: [2,1,3,4]
// }

// type PersonKey = keyof typeof person;// определяем тип ключей

// const key: PersonKey = 'stack';

// console.log(person[key])


// сервисные типы(как будто вспомогательные функции, которые будут помогать создавать типы)

// const person = {
//     name: 'Peter',
//     age:2,
//     stack: [2,1,3,4]
// }

// function add (a:number,b:number){
//     return [a+b];
// }
// типа функция импортируемая и мы не знаем, что она возвращает

// type A =typeof add;//возвращает всю функцию
// type A = ReturnType<typeof add>; // возвращает тип того, что возвращет функция

// type B = Parameters<typeof add>; возвращет типы параметров



// new Promise<number>((res)=>{
//     res(2);
// }).then((val)=>{})


type Programmer = {
    name: string;
    age: number;
    stack:string[];
    amountOfVygoranie: number;
}

type Person = Omit<Programmer, 'stack'>;
// используется для исключения полей

