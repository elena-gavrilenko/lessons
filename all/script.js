// 1) Написать функцию, которая вернет массив только из тех чисел, которые повторялись в исходном.

// const numbers = [1, 1, 1, 4, 4, 5, 1, 6, 6, 74, 74, 74, 3];

// function repeatedNumbers() {
//     const res = [];
//     numbers.forEach((num) => {
//         if (numbers.indexOf(num) !== numbers.lastIndexOf(num)) {
//             if (!res.includes(num)) {
//                 res.push(num);
//             }
//         }
//     });
//     return res;
// }

// console.log(repeatedNumbers());




// 2) Создайте функцию, принимающую в качестве входных данных имя, город и штат, чтобы приветствовать человека.

// function welcome(name, city, state) {
//     return `Hello, ${name.join(' ')}! Welcome to ${city}, ${state}!`;
// }

// console.log(welcome(['John', 'Smith'], 'Phoenix', 'Arizona'));



// 3) Добавить длину в массив

// function addLength(str) {
//     const arrFromString = str.split(' ');
//     const result = arrFromString.map((word) => `${word} ${word.length}`);
//     return result;
// }

// console.log(addLength('you will win'));




// 4) Найти объект

// let users = [
//     {
//         name: "John",
//         age: 30
//     },
//     {
//         name: "Bob",
//         age: 21
//     },
//     {
//         name: "Anna",
//         age: 19
//     }
// ];

// const userBob = users.find((obj) => obj.name === 'Bob');

// console.log(userBob);


// console.log(1);

// setTimeout(() => console.log(2));

// Promise.resolve()
//     .then(() => console.log(3));

// Promise.resolve()
//     .then(() => setTimeout(() => console.log(4)));

// Promise.reject()
//     .then(() => console.log(5))
//     .catch(() => console.log('catch'));

// setTimeout(() => console.log(6));

// console.log(7);

// // 1
// // 7
// // 3
// // 5
// // 2
// // 6
// // 4




// 8 типов данных
// number
// string
// boolean
// null
// undefined
// bigInt
// symbol
// object



// console.log(a)
// let a = 2
// console.log(b)
// var b = 4
// const c = []


// console.log(typeof null)

// falsy
// ''
// 0
// undefined
// false
// null
// NaN

// Boolean()


// let num1 = 3

// let num2 = new Number(3)

// console.log('num1', num1)
// console.log('num2', num2)
// == - с приведением типа
// === - проверяет на идентичность и значение и тип
// console.log(num1 === num2)

// Идентично:
// !! === Boolean()

// parseInt('23423.6546546ggdfgdfg')
// parseFloat('dgfgdfh')

// console.log((10 / 0) + 1)

// console.log(2 + '1')


// if () {

// } else {

// }

// условие ? что-то если правда : что-то если ложь

// while (condition) {

// }

// do {

// } while (condition);

// for (let i = 0; i < 10; i++) {
//     // continue - пропустит текущую итерацию
//     // break - полностью прекратит дальнейшее выполнение
// }

// // массивы, строки, map, set
// for (const k of o) {

// }

// // объекты
// for (const k in o) {

// }

// let a = 40
// switch (a) {
//     case 10:
//         console.log('1')
//         break;
//     case 20:
//         console.log('2')
//         break;
//     case 30:
//         console.log('3')
//     default:
//         console.log('0')
// }


// let test ='string'
// console.log(test.split('').reverse().join(''))
// console.log(test.indexOf('s'))

// split
// indexOf
// replace
// replaceAll
// toUpperCase, toLowerCase
// slice
// trim


// Math

// let num4 = 3.14858543856
// console.log(num4.toFixed(3))

// random
// floor
// ceil
// pow
// sqrt
// round
// trunc
// max
// min
// abs

// Date


// function test () {

// }

// const test2 = function () {

// }

// нет псевдомассива arguments
// const test3 = () => {

// }


const arr = [2, 6, 8, 'abs'];

const arr2 = arr;

arr[0] = 'test';

// console.log(arr2[0]);
// console.log(arr2 === arr);


// проверка на массив
// console.log(Array.isArray(arr))

// split - МЕТОД СТРОКИ!
// push => добавляет и возвращает length
// pop => удалит удаленный элемент
// shift => удаляет
// unshift => добавляет
// indexOf
// lastIndexOf
// includes
// join
// reverse
// filter
// forEach
// map
// some
// every
// splice
// find
// slice
// reduce
// with
// toSpliced
// toReverced
// sort
// toSorted
// concat
// flat
// fill



// замыкания связывают данные с функцией
function outer() {
    // arr букв англ алфавита, штук 5
    // при каждом вызове внутр. собирать строку из букв по порядку
    let counter = 0;
    function inner() {
        counter += 1;
        console.log(counter);
    }
    return inner;
}


// глобальная
// функциональная
// блочная

const useCounter = outer();

useCounter();
useCounter();
useCounter();




// var a = 'Hello'
// function test4 () {
//     console.log(a)
//     var a = 'world'
//     console.log(a)
// }

// test4()

// undefined world