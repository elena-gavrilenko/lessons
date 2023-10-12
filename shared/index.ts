// без webpack можно сделать nmp tsc -w
// настройка webpack medium.com
// чтобы добавить modules: npm install

// ts самонастраивающийся язык
// типы : типом может все что угодно
//  когда константа, то тип может быть то что написано после = , и оно же может быть типом по определению для let , делая из нее константу и это должно быть обосновано, делается это с помощью as  и называется кастовать

// 'any' лучше не использовать, потому что он как бы отключает ts и включает js(динамически типизирован)

// типы через |  называется union юнион как бы общий
// let userStatus: 'admin' | 'user' | 'none'='admin';
// тогда можно только из этих вариантов

// let user=undefined;
// тип unknown не дает видеть подсказки (методы, например), потому что не знает тип
// unknown можно использовать только когда проверишь тип с помощью if

// let a:any='Kell';
// console.log(a.toggle())//можно писать всякую фигню

// ---------------------------------------------
// ENUM
// ---------------------------------------------
// тип enum тип перечисления
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

// --------------------------------------------------------
// function types
// --------------------------------------------------------

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
// не лучший вариант
// const res=add(1,'as');
// знак ? после переменной означает, что аргумент может существовать, а может нет, называется: задан опционально
// const add=(a:number,b?:string)=>{
//     return a+b;
// }
// const res=add(1);
// console.log(res)

// const func=(a:number)=>{
//     throw new Error('some custom error')
// }
// тип функции never, потому что нет return
// между never и любым другим типом вернет всегда другой тип

// const c=2;
// const d=3;
// const result =c<d ? 'hello':'goodbye';

// -------------------------------------------------
// тип void
// -------------------------------------------------

// void помечает результат функции у которой нет return
// const func = (a:number) =>{
//     console.log(a**2)
// }

// const res=func(3);
// console.log(res)

// -------------------------------------------------------------------
// arrays
// -------------------------------------------------------------------

// 1)
// если одного типа
// ____________________
// const arr: number[]=[2,3,4];

// const func=(arr:number[])=>{

// }

// если разного типа
// ___________________
// const arr: (number|string)[]=['as','ae',3,2]

// двухмерный массив
// _________________________
// const arr: (number|string)[][]=[[1,0],['sd',1]];

// 2)
// через дженерик
// ---------------------
// const arr2:Array<number>=[2,3,4];
// предпочтительно первый
// _________________________

// --------------------------------------
// TUPLE
// --------------------------------------

// tuple или кортеж(массив со строгоопределенным количеством элеметнов и строгоопределенного типа)
// const arr: [number,string, boolean]=[2,'as',true];

// arr.push(99); //ошибка typescripta
// console.log(arr)//выводит с 99
// console.log(arr[3])//выдаёт ошибку

// --------------------------------------------------------
// aliases
// --------------------------------------------------------

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
// programInSkills?: string[] -? означает, что поле может отсутствовать(опциональное)
// run:(destination:string)=>void//или
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

// ----------------------------------------------
// интерфейсы
// ----------------------------------------------

// буква I по договоренности
// interface IAnimal {
//     paws:number;
//     hasTail:boolean;
//     run? ():void; //поля в интерфейсе можно делать опциональными
//     walk?: (destination:string)=>void//или
// }

// const cat: IAnimal={
//     animalName: 'Murzik',
//     hasTail:true,
//     paws:4,
//     run() {},
//     walk() {},
// }
// console.log(cat)
// отличия между интерфейсом и типом

// Если переопределить тип, то выдаст ошибку. Так делать нельзя

// interface IAnimal {
//     animalName: string
// }
// А  интерфейс объединяет два или несколько объявлений, расширяясь

// --------------------------------------
// Union intersection for type
// ------------------------------

// для простых понятно number|string
// для сложных должно удовлетворять хотя бы одному типу полностью, остальные свойства по выбору

// -----------------------------------------------
// UNION
// -----------------------------------------------

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

// лучше использовать или то или то

// type CaroMoped=Car|Moped;

// const buggle:CaroMoped = {
//     model: 'shmuggy',
//     engineVol: 2000,
//     hasSeat: false,
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
// const isCar = (val:CaroMoped, field: string) : val is Car =>{
//     return field in val;
// }
// function showModel (obj: CaroMoped){
//     if (isCar(obj, 'model')){
//         console.log(obj)
//     } else {
//         console.log('error')
//     }
// }
// showModel(buggle)

// ----------------------------------------------------------
// Intersection
// ----------------------------------------------------------

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
// ---------------------------------------------

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
// ---------------------------------------------------------

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

// получение ключей из неизвестного объекта
// const person = {
//     name: 'Peter',
//     age:2,
//     stack: [2,1,3,4]
// }

// type PersonKey = keyof typeof person;// определяем тип ключей

// const key: PersonKey = 'stack';

// console.log(person[key])

// -----------------------------------------------------------------------------------------
// сервисные типы(как будто вспомогательные функции, которые будут помогать создавать типы)
// --------------------------------------------------------------------------------------------

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
// type A = ReturnType<typeof add>; // возвращает тип того, что возвращает функция
// console.log(add(2,4))
// type B = Parameters<typeof add>; возвращает типы параметров

// new Promise<number>((res)=>{
//     res(2);
// }).then((val)=>{})

// type Programmer = {
//     name: string;
//     age: number;
//     stack:string[];
//     amountOfVygoranie: number;
// }

// type Person = Omit<Programmer, 'stack'>;
// используется для исключения полей

// type Person = Omit<Programmer, 'stack' | 'amountOfVygoranie'>;
// // используется для исключения определенных полей

// type Person2 = Pick<Programmer, 'stack' | 'amountOfVygoranie'>;
// // используется для выбирания конкретных полей

// type Person3 = Partial<Programmer>;
// // делает все поля опциональными

// type Person4 = Required<Programmer>;
// // делает все поля обязательными

// -----------------------------------------------------------
// дженерики
// -----------------------------------------------------------

// interface IPerson<T>{
//     name:string;
//     age: number;
//     job: string;
//     skills:T[]
// }
// const person1: IPerson<{tech:string,expYears:number}>={
//     name: 'John',
//     age: 23,
//     job: 'programmer',
//     skills: [{tech: 'css', expYears:2},{tech: 'html', expYears:4}]
// }
// const person2: IPerson<{zernoType:string,usedPechka:boolean}>={
//     name: 'Valerchik',
//     age: 12,
//     job: 'pekar',
//     skills: [{zernoType:'psheno',usedPechka:true}]
// }
// const person3: IPerson<string>={
//     name: 'Oeg',
//     age: 35,
//     job: 'shkolnik',
//     skills: ['progulivat urok','fortnite']
// }

// дженерик-функции
// function mergeObj <T>(obj1,obj2(){}//для expression
// const kot ={
//     klichka: 'murzik',
//     isShalun: true
// }

// const pes ={
//     pesName: 'bobik',
//     speed:3
// }
// const ziraf ={
//     sheya:200,
//     nogi:1
// }
// const mergeObj=<T extends object,U extends object>(obj1:T,obj2:U)=>{
//     return Object.assign(obj1,obj2)
// }

// const kotoPes=mergeObj<typeof kot,typeof pes>(kot,pes);

// const kotoZiraf=mergeObj(kot,ziraf);
// console.log(kotoZiraf.nogi)//подсказывает поля

// const raiseByJne = <T extends object,U extends keyof T>(obj:T,key:U) =>{
//     if (typeof obj[key]==='number'){
//         return {...obj, [key]: (obj[key] as number)+1};
//     }
// }
// console.log(raiseByJne(ziraf,'nogi'));
// raiseByJne(pes,'speed');

// -----------------------------------------------------
// classes
// -----------------------------------------------------

//  первый синтаксис
// _________________________
// class Person{
//     userName:string;
//     age:number;
//     city: string;
//     isProgrammer= false;

//     constructor (userName:string, age:number, city:string){
//         this.userName=userName;
//         this.age=age;
//         this.city=city;
//     }
// }
// второй синтаксис
// ____________________________

// class Person{
//     isProgrammer= false;
// если добавить protected isProgrammer=false то он становится доступным только в классе и подклассе
// если сделать private то это поле доступно только в пределах класса

//     constructor (public userName:string,public age:number,public city:string){

//     }
// }
// класс тоже может быть дженериком
// let p1=new Person('Oleg', 2, 'Gomel');
// p1.city='Boston';

// class footballPlayer extends Person {
//     medals: number;

//     constructor(medals:number, ...args:[string, number, string]){
//         super(...args);
//         this.medals=medals;
//         this.isProgrammer=false;
//     }
// }

// function logme(obj:Person){}
// let fb1=new footballPlayer(2,'Peter',12,'Volotova');
// fb1.isProgrammer=true;
// console.log(fb1)

// абстрактный классы

// interface IEngine {
//     type: 'fuel' | 'electric';
//     power: number
// }
// abstract class Car{
//     abstract engine: IEngine;
//     model:string;

//     constructor(model:string){
//         this.model=model;
//     }
//     ride(){
//         console.log(`${this.model} rides`)
//     }

//     abstract openWindows(windowNumber:number):void;
// }

// от абстрактного класса нельзя создать инстенс, только экстендить

// те поля который обычные будут одинаковые у всех инстенсов, а те которые абстрактные гарантировано будут у всех, но только разные

// class Tesla extends Car {
//     engine: IEngine = {power:200, type:'electric'};

//     openWindows(windowNumber: number): void {
//         console.log(`opening ${windowNumber} window`)
//     }
// }

// const tesla=new Tesla('ж');

// tesla.ride();

// ----------------------------
// метод override
// ----------------------------
// override это перопределение метода
// overload это перегрузка метода

// class Tesla extends Car {
//     engine: IEngine = {power:200, type:'electric'};

// затирает предыдущий ride

// слово override ничего не вносит, просто предупреждает пользователей, что метод переписывается с тем же названием, но должен сохранятся предыдущий метод через метод super-а
//     override ride() {
//         console.log('FAST');
//         super.ride();//это метод астрактного родителя
//     }

//     openWindows(windowNumber: number): void {
//         console.log(`opening ${windowNumber} window`)
//     }
// }
// class lada extends Car {
//     engine: IEngine={power:100, type:'fuel'};
//     openWindows(windowNumber: number): void {
//         const actualWindowNumber=(Math.random()*windowNumber);
//         console.log(`opening ${actualWindowNumber} window`)
//     }
// }

// const tesla=new Tesla('ж');
// const vesta=new lada('vesta');

// tesla.ride();
// vesta.ride();

// ---------------------------
// overload
// ---------------------------

// перегрузка функции защищает от использование неправильных аргументов
// function add(a:number,b:number):number;
// function add(a:string,b:string):string;

// function add(a:number|string,b:number|string){

//     if (typeof a==='string' && typeof b==='string')  {
//         return a+b;
//     }
//     else if (typeof a==='number' && typeof b==='number'){
//         return a+b;
//     }
// }

// const res=add(2,1);
// const res2=add('one','two');
// const res3=add(2,'smth');//выдает ошибку, что использованы неправильные типы аргументов,
// если убрать первые две строки описания, то рарешит, но потом где-нибудь выдаст ошибку
// также можно поступать с методами класса

// задачи
// ----------------------------------------

// 1) Могут ли три линии сформировать треугольник

// class Point {
//     x:number;
//     y:number;

//     constructor(x:number,y:number){
//         this.x=x;
//         this.y=y;
//     }

// }
// class Line {
//     p1:Point;
//     p2:Point;

//     constructor(p1:Point,p2:Point){
//         this.p1=p1;
//         this.p2=p2;
//     }

// getlength(){
//     const katet1=this.p1.x-this.p2.x
//     const katet2=this.p1.y-this.p2.y

//     return Math.sqrt(katet1**2+katet2**2)

// }
// или

// get length(){
//     const katet1=this.p1.x-this.p2.x
//     const katet2=this.p1.y-this.p2.y

//     return Math.sqrt(katet1**2+katet2**2)
// }

// для метода getlength
// static canformTriangl (l1:Line,l2:Line,l3:Line){
//     const l1length = l1.getlength();
//     const l2length = l2.getlength();
//     const l3length = l3.getlength();
//    return l1length + l2length > l3length &&
//     l2length + l3length > l1length &&
//     l3length + l1length > l2length
// }
//     static canformTriangl (l1:Line,l2:Line,l3:Line){
//         const l1length = l1.length;
//         const l2length = l2.length;
//         const l3length = l3.length;
//        return l1length + l2length > l3length &&
//         l2length + l3length > l1length &&
//         l3length + l1length > l2length
//     }
// }

// const t1=new Point(62,75);
// const t2=new Point(65,48);
// const t3=new Point(85,1);
// const t4=new Point(88,35);
// const t5=new Point(98,12);
// const t6=new Point(53,1);
// const l1=new Line(t1,t2);
// const l2=new Line(t2,t4);
// const l3=new Line(t3,t5);

// console.log(l1.getlength());
// console.log(l2.getlength());
// console.log(l3.getlength());

// console.log(Line.canformTriangl(l1,l2,l3));

// 2)
class ShopItem {
  itemName: string;
  price: number;
  amount: number;
  isOnSale: boolean;

  constructor(
    itemName: string,
    price: number,
    amount: number,
    isOnSale: boolean
  ) {
    this.itemName = itemName;
    this.price = price;
    this.amount = amount;
    this.isOnSale = isOnSale;
  }
  getPriceOfProduct() {
    return this.price;
  }
  setPriceOfProduct(value: number) {
    if (value < 0) {
      throw new Error('Цена не может быть отрицательной');
    }
    this.price = value;
  }
  getAmountOfProduct() {
    return this.amount;
  }
  setAmountOfProduct(value: number) {
    if (value < 0) {
      throw new Error('Количество не может быть отрицательным');
    }
    this.amount = value;
  }
}
enum Size {
  'S' = 's',
  'M' = 'M',
  'L' = 'L',
  'XL' = 'XL',
}
class Clothes extends ShopItem {
  size: Size;
  material: string;
  color: string;
  constructor(
    size: Size,
    material: string,
    color: string,
    ...args: [string, number, number, boolean]
  ) {
    super(...args);
    this.size = size;
    this.material = material;
    this.color = color;
  }
  getSizeOfProduct() {
    return this.size;
  }
  setSizeOfProduct(value: Size) {
    console.log(Object.keys(Size));
    if (!Object.keys(Size).includes(value)) {
      throw new Error('Такого размера нет');
    }
    this.size = value;
  }
  static changeColor(cloth: Clothes, color: string) {
    console.log(cloth.color);
    return cloth.color = color;
  }
}

class TV extends ShopItem {
    
  constructor(
    readonly diagonal: number,
    readonly withSmartTV: boolean,
    ...args: [string, number, number, boolean]
  ) {
    super(...args);
    this.diagonal = diagonal;
    this.withSmartTV = withSmartTV;
  }
  // setDiagonalOfTV(value: number) {
  //   throw new Error(`Нельзя менять размер диагонали`);
  // }

}


class Shop {
  shopItems: ShopItem[];
  totalProfit: number;
  constructor(shopItems: ShopItem[], totalProfit: number) {
    this.shopItems = shopItems;
    this.totalProfit = totalProfit;
  }

  setSales(discountPercent: number) {
    this.shopItems.forEach((item) => {
      item.isOnSale = true;
      item.price = item.price * (100 - discountPercent) * 0.01;
    });
  }
  purchaseItem(itemName: string) {
   
    let needItem = this.shopItems.find((item) => item.itemName === itemName);
    console.log(needItem)
    try {if (needItem && needItem.amount>0) {needItem.amount--;}
    else {
      throw new Error
    }}
    catch {
      console.log(`Product ${needItem?.itemName} is out of stock` )
    }
    return needItem ? (this.totalProfit += needItem.price) : this.totalProfit;
   
  }
}

const tv1 = new TV(45, true, 'Panasonic', 1200, 3, false);
const tv2 = new TV(32, false, 'LG', 800, 7, true);
const tv3 = new TV(15, false, 'Samsung', 600, 10, true);
const cloth1 = new Clothes(Size.M, 'silk', 'red', 'Dress', 120, 12, false);
const cloth2 = new Clothes(Size.XL, 'wool', 'brown', 'Suit', 350, 8, true);
const cloth3 = new Clothes(Size.M, 'cotton', 'blue', 'Shorts', 60, 20, false);

const shop1 = new Shop([tv1, tv2, tv3, cloth1, cloth2,cloth3], 0);
// tv1.diagonal=32;
console.log(tv1.diagonal);
console.log(cloth1.getAmountOfProduct());
shop1.setSales(25);

Clothes.changeColor(cloth2,'green');

shop1.purchaseItem('Dress');
shop1.purchaseItem('Panasonic');
shop1.purchaseItem('Panasonic');
shop1.purchaseItem('Panasonic');
shop1.purchaseItem('Panasonic');
console.log(tv1.amount);
console.log(cloth1.amount);
console.log(shop1.totalProfit);
console.log(cloth2.color)
