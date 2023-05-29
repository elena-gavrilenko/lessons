// methods array
// -------------------------
// ---------------------------

// 1) copyWithin(target, start, end)
// -------------------------
// копирует последовательность элементов массива внутри него в позицию, начинающуюся по индексу target. Копия берётся по индексам, задаваемым вторым и третьим аргументами start и end. Аргумент end является необязательным и по умолчанию равен длине массива.
// не меняя размер массива
// const colors=['Green', 'Red','Blue','Pink'];
// colors.copyWithin(2,0);
// console.log(colors)

// 2) every()
// -------------------------
// проверяет все ли элементы подходят под условие
// возвращает true или false
// a)
// const arr=[2,6,7,1,3,10,9,-2];
// let result=arr.every(function(num){
//     return num>0;
// });
// console.log(result)
// b)
// const users=[
//     {name:'Anna',online: true},
//     {name:'Mihail',online:true},
//     {name:'Alex',online:true},
// ]
// const isAllUsersOnline=users.every((user=>{
//     // console.log(user);
//     return user.online;
// }))
// console.log(isAllUsersOnline)

// 3) some();
// -------------------------
// проверяет подходит ли под условие хотя бы один элемент
// // возвращает true или false
// const users=[
//         {name:'Anna',online: false},
//         {name:'Mihail',online: false},
//         {name:'Alex',online: false},
//     ]

//     let isSomeOnline=users.some((user)=>{
//         return user.online;
//     })
//     console.log(isSomeOnline);

// 4) find()
// -------------------------
// возвращает первый найденный элемент, если нет вернет undefined
// исходный не изменяет
// const arr=[1,2,3,5,7,6];
// const result=arr.find((element)=>{
//     return element===2;
// })
// console.log(result);

// 5) findIndex()
// -------------------------
// возвращает индекс первого найденного элемента
// const arr=[1,2,3,5,7,6];
// const result=arr.findIndex((element)=>{
//     return element===7;
// })
// console.log(result);

// 6) sort();
// изменяет исходный(мутирует)
// const arr=[1,2,3,5,7,6];
// arr.sort();
// без коллбэк-функции сортирует по возрастанию
// console.log(arr);

// const arr=[1,2,3,5,7,6];
// arr.sort((a,b)=>{
//     return b-a;
// });
// console.log(arr);

// 7) forEach();
// ничего не возвращает, просто пробегает по массиву. Можно вывести элементы и измененные элементы
// const arr=[1,2,3,5,7,6];
// const result=arr.forEach((num)=>{
//     const square= num*num;
//     console.log('Квадрат числа равен '+ square);
//     return square;
// });
// console.log(result);//undefined

// 8) map();
// не изменяет исходный
// производит манипуляции с исходным массивом и возвращает новый массив
// const arr=[1,2,3,5,7,6];
// const result=arr.map((num)=>{
//     return num*num;
// });
// console.log(arr);
// console.log(result);

// 9) filter();
// не меняет исходный массив, возвращает новый отфильтрованный массив
// const languages=['Java','Typescript','C#', 'JavaScript'];
// const jlanguages=languages.filter((language)=>{
//     return language.startsWith('J');
// });
// console.log(languages);
// console.log(jlanguages);

// 10) reduce();
// не меняет исходный массив
// a)
// const numbers=[1,2,3,5,7,6];
// const sum=numbers.reduce((currentSum, currentNumber)=>{
//     console.log(currentSum);
//     return currentSum+currentNumber;
// },0);
// console.log(numbers);
// console.log(sum);
// b)
// const students=[
//     {studentName:'Гриша',rating: 5},
//     {studentName:'Миша',rating: 2},
//     {studentName:'Петя',rating: 6},
//     {studentName:'Вася',rating: 11},
//     {studentName:'Георгий',rating: 3},
//     {studentName:'Матвей',rating: 9},
// ];

// const result=students.reduce((acc,currentStudent,index,arr)=>{
//     const sum=acc+currentStudent.rating;
//     if (index===arr.length-1){
//         return sum/arr.length;
//     }
//     else {
//         return sum
//     }
// },0);
// console.log(result);

// tasks
// 1)
// function getGreat(name){
//     return name.length<5?'Hello':'Hi';
// }
// console.log(getGreat('Ivan'));
// console.log(getGreat('Natasha'))

// 2) 4)
// let arr=[];
// for(let i=0;i<10;i++){
//     arr[i]=Math.floor(Math.random()*100);
// }
// console.log(arr);
// // let result=arr.filter((num)=>num%4===0);
// // console.log(result);
// let result=arr.reduce((acc, el)=>el%2===0?acc+=el:acc,0)
// console.log(result)


// 3)
// const arr = [
//   'Григорий',
//   'Светлана',
//   'Дмитрий',
//   'Сергей',
//   'Юрий',
//   'Семен',
//   'Ирина',
// ];
// 1способ
// let result = arr.filter((el) => el.toLowerCase() === 'семен');
// console.log(result.length > 0);

// 2способ
// console.log(arr.find((el) => el === 'Cемен'));


// 5)
// let arr = [];
// for (let i = 0; i < 5; i++) {
//   let num = prompt('Введите число');
//   arr.push(num);
// }
// console.log(arr);
// let result = arr.every((el) => !isNaN(+el) || !isNaN(parseInt(el)));
// console.log(result);

// 6)
// let arr = ['Григорий', 'Дмитрий', 'Сергей', 'Юрий', 'Семен', 'Игорь'];

// let result = arr.map((el) => (el = 'Mr. ' + el));
// console.log(arr);
// console.log(result);


// tasks(2)
// 1)
// const methods = [
//     'push()',
//     'pop()',
//     'shift()',
//     'unshift()',
//     'slice()',
//     'splice()',
//     'foreach()',
//     'map()',
//     'find()',
//     'findIndex()',
// ];
// methods.forEach(elem=>console.log(`Метод ${elem}`))

// 2)
// const computers = [
//     {
//         name: 'MacBook Pro 13',
//         price: 4000
//     },
//     {
//         name: 'MacBook Pro 14',
//         price: 5000
//     },
//     {
//         name: 'MacBook Pro 16',
//         price: 7000
//     },
// ];

// let result=computers.find(el=>el.name==="MacBook Pro 16");
// console.log(result);

// 3)
// const arrayNumbers = [10, 15, 5, 100, 50, 101, 203, 800];
// const isMoreThenHundred=arrayNumbers.some(el=>el>100);
// console.log(arrayNumbers);
// console.log(isMoreThenHundred);

// 4)
// const arrayNumbers = [10, -2, -3, 0, 1, 30, 25];
// console.log(arrayNumbers);
// let result=arrayNumbers.sort();
// console.log(result);

// 5)
// const names = ['Александр', 'Ян', 'Оля ', 'Вячеслав', 'Маша', 'Анатолий'];
// console.log(names);
// let filteredNames=names.filter(el=>el.length>=5);
// console.log(filteredNames);

// 6)
// const arrayNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let sum=arrayNumbers.reduce((sum,el)=>sum+el,0);
// let average=Math.round(arrayNumbers.reduce((sum,el)=>sum+el,0)/arrayNumbers.length,0);
// console.log(sum,arrayNumbers.length);
// console.log(average);

// 7)
// const coffees = ['Latte', 'Cappuccino', 'Americano'];
// let coffeeName=prompt('Поиск кофе по названию:');
// let result=coffees.findIndex(el=>el.toLowerCase()===coffeeName.trim().toLowerCase());
// result!==-1?alert (`Держите ваш любимый кофе ${coffees[result]}. Он ${result+1} по популярности в нашей кофейне.`):alert('К сожалению, такого вида кофе нет в наличии.')
   
// 8)
// const coffees = ['Latte', 'Cappuccino', 'Americano'];
// const prices = [1.5, 1, 2];
// let updatedPrices=prices.map(el=>el+0.5);
// coffees.forEach((el,i)=>alert(`Кофе ${el} сейчас стоит ${updatedPrices[i]} евро`));

// 9)
// let clientsEstimations=[];
// function askClientToGiveEstimation(){
//     const ball=+prompt('Как вы оцениваете нашу кофейню от 1 до 10?');
//     if(ball>=1&&ball<=10){
//         clientsEstimations.push(ball);
//      }
// }

// for (let i=0;i<5;i++){
// askClientToGiveEstimation();
// }

// console.log(clientsEstimations);
// let goodEstimations=clientsEstimations.filter(el=>el>5).length;
// let notGoodEstimations=clientsEstimations.length-goodEstimations;

// alert(`Всего положительных оценок: ${goodEstimations}; Всего отрицательных оценок:
//     ${notGoodEstimations}`);

// 10)
// const numbers = [10, 4, 100, -5, 54, 2];
// const cubes=numbers.reduce((acc,el)=>acc+Math.pow(el,3),0);
// console.log(cubes);

// 11)
const matrix = [
    [ 1, 2, 3 ],
    [ 4, 5, 6 ],
    [ 7, 8, 9 ],
    ];

let newArray=[].concat(...matrix);
console.log(newArray)


// ____________________________________
// DATE
// _______________________________________
//  const date=new Date();
// чтобы получить сразу getTime
// let date=Date.now();
//  console.log(date);
// аргументы:
// (year, month, data, hours, minute,second,ms)


//  МЕТОДЫ DATE
// _____________________
// у первых трех можно вводить аргументы (язык-локация, опции) язык в виде en-US, опции в виде объекта
// console.log(date.toLocaleDateString());//дата

// console.log(date.toLocaleTimeString());//время

// console.log(date.toLocaleString());//дата и время через апятую и све это строки

// console.log(date.getFullYear());//год

// console.log(date.getMonth()); //0-январь

// console.log(date.getDate()); //число

// console.log(date.getDay()); //день недели 0-6; 0-воскресенье, 6-суббота

// console.log(date.getHours());// часы

// console.log(date.getMinutes()); //минуты

// console.log(date.getSeconds());//секунды

// console.log(date.getMilliseconds());//миллисекунды
// по Гринвичу добавляется UTC после get
// библиотеки moments.com

// console.log(date.getTime())//показывает , сколько прошло времени с 1970 года до сегодняшнего дня

// для установки времени те же методы, где вместо get вставляется set

// date.setFullYear(2022);
// console.log(date);