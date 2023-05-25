// methods array
// -------------------------
// ---------------------------

// 1) copyWithin()
// -------------------------
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
// возвращет первый найденный элемент, если нет вернет undefined
// исходный не изменяет
// const arr=[1,2,3,5,7,6];
// const result=arr.find((element)=>{
//     return element===2;
// })
// console.log(result);

// 5) findIndex()
// -------------------------
// вовращает индекс первого найденного элемента
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
// производит манипуляции с исходным массивом и вовращает новый массив
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
// не меняет исхоный массив
// a)
// const numbers=[1,2,3,5,7,6];
// const sum=numbers.reduce((carrentSum, carrentNumber)=>{
//     console.log(carrentSum);
//     return carrentSum+carrentNumber;
// },0);
// console.log(numbers);
// console.log(sum);
// b)
// const students=[
//     {studentName:'Гриша',raiting: 5},
//     {studentName:'Миша',raiting: 2},
//     {studentName:'Петя',raiting: 6},
//     {studentName:'Вася',raiting: 11},
//     {studentName:'Георигий',raiting: 3},
//     {studentName:'Матвей',raiting: 9},
// ];

// const result=students.reduce((acc,carrentStudent,index,arr)=>{
//     const sum=acc+carrentStudent.raiting;
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

// 2)
// let arr=[];
// for(let i=0;i<10;i++){
//     arr[i]=Math.floor(Math.random()*100);
// }
// console.log(arr);
// let result=arr.filter((num)=>num%4===0);
// console.log(result);

// 3)
// let arr=['Григорий','Светлана']
