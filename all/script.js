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


// const arr = [2, 6, 8, 'abs'];

// const arr2 = arr;

// arr[0] = 'test';

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
// function outer() {
//     // arr букв англ алфавита, штук 5
//     // при каждом вызове внутр. собирать строку из букв по порядку
//     // let counter = 0;
//     const arr = ['a', 'b', 'c', 'd', 'e'];
//     let ind = 0;
//     let alphabet = '';
//     function inner() {
//         alphabet += arr[ind];
//         ind++;
//         return {
//             alphabet,
//             ind
//         }
//         // counter += 1;
//         // console.log(counter);
//     }
//     return inner;
// }

// Области видимости
// глобальная
// функциональная
// блочная

// const useCounter = outer();

// console.log(useCounter())
// console.log(useCounter())
// console.log(useCounter())
// console.log(useCounter())



// var a = 'Hello'
// function test4 () {
//     console.log(a)
//     var a = 'world'
//     console.log(a)
// }

// test4()

// undefined world


// function test5(a, b) {
//     return a + b
// }

// console.log(test5(5, 10))



// let b = 15 + null // 15
// console.log(b)


// let c = 15 + undefined // NaN
// console.log(c)


// let a = null + undefined // NaN
// console.log(a)


// console.log(100 * 'aaa') // NaN


// console.log(this)



// Сделайте функцию, которая параметром будет принимать массив с числами и возвращать максимальное и минимальное значение


// const numbers = [2, 5, 7, 12, 9, 10, 6, 34, -3];

// function getMinAndMax(arr) {
//     const max = Math.max(...arr)
//     const min = Math.min(...arr)
//     return {
//         max,
//         min
//     }
// }

// console.log(getMinAndMax(numbers))



// function sum(number) {
//     let str = `${number}`
//     console.log(str)
//     if (str.length === 1) {
//         return +str
//     }
//     console.log(+str[0])
//     return +str[0] + sum(str.slice(1))
// }

// console.log(sum(1357))


// class Dictionary {
//     constructor(name) {
//         this.name = name;
//         this.words = {};
//     }
//     add(word, description) {
//         if (!this.words[word]) {
//             this.words[word] = {
//                 word,
//                 description
//             };
//         }
//     }
//     remove(word) {
//         delete this.words[word];
//     }
//     get(word) {
//         return this.words[word];
//     }
//     showAllWords() {
//         Object.values(this.words).forEach((wordItem) => {
//             console.log(`${wordItem.word} - ${wordItem.description}`)
//         });
//     }
// }

// const dictionary = new Dictionary('Толковый словарь');

// dictionary.add('JavaScript', 'популярный язык программирования');

// dictionary.add('Разработчик', 'Человек, который создает новые сервисы и сайты');

// console.log(dictionary);
// dictionary.remove('JavaScript');
// dictionary.showAllWords();



// const student = {
//     stack: ['HTML'],
//     level: 1,
//     improveLevel() {
//         this.level += 1;
//         if (this.level === 2) {
//             this.stack.push('CSS');
//         } else if (this.level === 3) {
//             this.stack.push('JavaScript');
//         } else if (this.level === 4) {
//             this.stack.push('React');
//         } else if (this.level === 5) {
//             this.stack.push('NodeJS');
//         } else {
//             console.log('Студент выучил все технологии!');
//             console.log(this);
//         }
//         return this;
//     }
// };

// student
//     .improveLevel()
//     .improveLevel()
//     .improveLevel()
//     .improveLevel()
//     .improveLevel()



// console.log(typeof('1' + 2))


// console.log(typeof('Vasia'.toUpperCase().length.toString()))



// const s1 = ['a', 'b', 'c']
// const s2 = ['d', 'e', 'f']

// const result = s1.concat(s2).join('+')

// console.log(result)


// function test () {
//     console.log('1')
//     setTimeout(() => console.log('2'), 0);
//     setTimeout(() => console.log('3'), 0);
//     console.log('4')
// }


// test()

// var o = {
//     name: 'John',
//     getName: function () {
//         console.log(this)
//         console.log(this.name)
//     }
// }

// var getName = o.getName
// window.name = 'David'

// getName()


// const arr = ['John', 'David', 'Petya'];

// console.log(arr[3])

// arr[10] = 'Anton'

// console.log(arr[9]) // undefined
// console.log(arr)

// деструктуризация массива
// const [a, b, c, d = 'Maxim', e] = arr;

// console.log(e)

// null, undefined, empty


// const obj = {
//     name: 'John',
//     age: 22,
//     city: 'Homel',
//     country: 'Belarus'
// };

// Дескрипторы
// console.log(Object.getOwnPropertyDescriptors(obj))
// console.log(obj)

// const obj2 = new Object({ name: 'David', age: 33 });

// const obj3 = Object.assign(obj, obj2);

// console.log(obj3);





// console.log(Object.keys(obj))
// console.log(Object.values(obj))
// console.log(Object.entries(obj))




// const { age, test, city } = obj;

// console.log(age);
// console.log(city);
// console.log(test);


// let object = {
//     lastName: 'John'
// }

// function getName () {
//     console.log(this.lastName)
// }

// // object.getName()


// function getName2 (obj) {
//     console.log(obj.lastName)
// }

// getName2(object)


// function Developer (name, age, city) {
//     this.name = name
//     this.age = age
//     this.city = city
// }

// const dev1 = new Developer('John', 20, 'Minsk')
// const dev2 = new Developer('David', 40)

// console.log(dev1)
// console.log(dev2)


// const user = {
//     name: 'John',
//     age: 3,
//     sayHello: (x) => {
//             console.log(`Hello, my name is ${x.name}`)
//     }
// }

// bind - вернет функцию
// call - привяжет контекст и будет вызван , , , 
// apply - привяжет контекст и будет вызван []

// user.sayHello()


// function test6 (y) {
//     return this.x + y
// }

// const objX = {
//     x: 10
// }

// console.log(test6.bind(objX, 2)())
// console.log(test6.apply(objX, [2]))
// console.log(test6.call(objX, 2))


// function some () {
//     let a = 10;
// }

// some.b = function () {
//     console.log('from some func b')
// }

// some.b()



function add (a, b, c) {
    return a + b + c
}


add(3,4,6)

add(3)(4)(6)
add(3)(4, 6)

function curAdd (a) {
    return function (b, c) {
        return a + b + c
        return function (c) {
            return a + b + c
        }
    }
}

