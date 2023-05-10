// задачи на строки
// 1)
// let str1=prompt('Ведите первую строку');
// let str2=prompt('Ведите вторую строку');
// if(str1.length>str2.length){
//     console.log('1');
// }
// if(str1.length<str2.length){
//     console.log('-1');
// }
// else {
//     console.log('0');
// }

// 2)
// let str=prompt('Введите число из трех символов');

// let sum=0;
// for(let i=0;i<3;i++){
//  sum+=+str[i]
// }
// console.log(sum);


// 3)
// let str='Я-учу-javascript!';

// console.log(str.replaceAll('-', ' '));

// МАССИВЫ(ARRAY)


// const arr=[1,2,3];//создание массивов с помощью литерала

// const arr2=new Array(3) //в скобках длина

// const arr3=Array.of('one','two',...);//в скобках аргументы

// const arr4=Array.from();//один аргумент, если 'hello', то массив букв


// console.log(typeof arr);
// arr.length=50;
// arr[0]=[2,3];
// console.log(arr);

// const arr1=[1,2,3];
// const arr2=[1,2,3];
// const arr3=arr1;
// console.log(arr1==arr2);
// console.log(arr1==arr3);

//исходные данные лучше не менять
// ссылочный тип
// arr3[3]=4;
// console.log(arr1);
// console.log(arr3);

// const arrCopy=[];
// for(let i=0; i<arr1.length;i++){
//     arrCopy[i]=arr1[i];
// }
// console.log(arrCopy);

// const movies=['Гарри Потер', 'Властелин колец','Железный человек'];

// for(let i=0;i<movies.length;i++){
//     console.log(movies[i]);
// }
// delete movies[1];//плохой способ, сохраняет длину и пустую ячейку с undefind
// console.log(movies)
// Проверка на массив Array.isArray()
// console.log(Array.isArray(movies));

// .split()
//  метод строки возвращает массив - вариант сделать массив
// const str='Я учу Javascript';
// называется опциональная цепочка
// let result=str.split(' ').reverse().join(' ');//аргумент -сепаратор(разделитель) для будущих элементов массива
// console.log(result);


// .push()
// возвращает новую длину массива и мутирует массив, добавляет элементы в конец массива
// let arrPush=movies.push('Форсвж','Человек-паук');
// console.log(arrPush)

// .pop()
// возвращает удаленный элемент, удаляет последний элемент, мутирует исходный массив
// let arrPop=movies.pop();
// console.log(movies);
// console.log(arrPop)

// .shift()
// возвращает удаленный элемент, удаляет первый элемент, мутирует исходный массив
// let arrShift=movies.shift();
// console.log(arrShift);
// console.log(movies);

// .unshift()
// возвращает новую длину массива, добавляет элемент в начало массива, изменяет длину и мутирует исходный
// let arrUnshift=movies.unshift('Форсвж','Человек-паук');
// console.log(arrUnshift);

// .concat()
// возвращает новый массив и исходный не мутирует
// let arrConcat=movies.concat('Семейка Адамс')
// console.log(arrConcat);

// .join()
// возвращает новую строку, содержащую элементы массива
// let arrJoin=movies.join();
// console.log(arrJoin);

// .slice()
// возвращает новый массив(неравный исходному), исходный не мутирует
// два аргумента: копирует элементы из массива от первого аргумента до второго: второй не включает
// без аргументов копирует весь массив
// один аргумент: от первого аргумента и до конца массива
// отрицательный агргумент: считает от конца
// let arrSlice=movies.slice(1,2);
// console.log(arrSlice);
// console.log(arrSlice==movies);//false

// .indexOf()
// .lastIndexOf()- последнее вхождение
// возвращает индекс искомого элемента массива
// без аргумента и если элемент не найден вернет -1
// let arrIndexOf=movies.indexOf('Железный человек');
// console.log(arrIndexOf);

// .includes()
// возвращает true или false
// второй аргумент указывает с какого начинать искать
// let arrIncludes=movies.includes('Железный человек')
// console.log(arrIncludes);

// .reverse()
// меняет порядок элементов на обратный и мутируент исходный маассив
// let arrReverse=movies.reverse();
// console.log(arrReverse);
// console.log(arrReverse==movies);//true


// .at()
// возвращает элемент по индексу
// если отрицательный, то считает с конца
// let arrAt=movies.at(-1);
// console.log(arrAt);

// .fill()
// запоняет массив элементами в скобках
// можно указать откуда и докуда заполнить
// если вызвать на массиве с данными, то он перепишет их, т.е. он мутирует масссив
// const fillArr=new Array(5).fill(2);
// console.log(fillArr);
// console.log(movies.fill(1));

// .splice()
// если без арргументов возвращает новый пустой массив
// если один аргумент: возвращает новый массив с удаленными аргументами, начиная с укуазанного
// если два: возвращает новый массив с первого длинной второго аргумента
// если три: первый: откуда вырезает, второй: сколько вырезает, третий: вставляет на место вырезки

const movies=['Гарри Потер', 'Властелин колец','Железный человек','Форсаж'];
let arrSplice=movies.splice(1,2,'Ура');
console.log(arrSplice);
console.log(movies);