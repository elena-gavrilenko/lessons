// spread может писаться в любом месте

// использование
// 1) быстро создать копию массива;
// let arr=[1,2,3,4,5,6];
// console.log(...arr);
// console.log([...arr]);

// 2) вставить в массив
// let arr=['will', 'love'];
// let data=['you', ...arr, 'spread'];
// console.log(data)

// 3) слияние массивов
// let arr1=['love','spread'];
// let arr2=['I','will']
// let res=[...arr2,...arr1];
// console.log(res);

// REST остаточный параметр, возвращает массив
// rest пишется только в конце
// function func(...args){
//     console.log(arguments)
//     console.log(args)
// }
// func(1,2,3)


// ДЕСТРУКТУРИАЦИЯ

// const profile=['Jhon','Doe','code.com'];

// // без деструктуризации
// const firstName=profile[0];
// const lastName=profile[1];
// const webSite=profile[2];

// // деструктуризация
// const [userName, subname,site]=profile;
// console.log(userName);
// console.log(subname);
// console.log(site)

// 1)
// let arr=[1,2,3,4,5];
// let max=Math.max(...arr);
// console.log(max);

// 2)
// let arr=[1,2,3,4,5];
// function getRandomElem(arr){
//    return arr[Math.floor(Math.random() * arr.length)];
// }
// console.log(getRandomElem(arr));