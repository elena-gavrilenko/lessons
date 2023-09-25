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

const jhon={
    name:'Jhon',
    age:22,
    city:'Boston'
}
// если нужно много однотипных объектов

type Person ={
    name:string;
    age:number;
    city: string;
}
// Person это тип (описание)ю Обратиться к полям нельзя
// и тогда

const peter:Person={
    name:'Peter',
    age:28,
    city:'Gomel'
}
const valerchik={
    username: 2,
    age:'28'
}

const arr:Person[]=[jhon,peter,valerchik];
// и даже если добавить правильные поля , typescript примет его это называется утиной типизацией duck