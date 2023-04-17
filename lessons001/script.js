// //мой люимый js-однострочный коммент
// /* многострочный коммент
// */ 
// // ' ' одинарные кавычки
// // " " двойные
// // ` ` обратные или бэктики

// //регистрозависимый язык

// //точки с запятой лучше ставить
// let c=2; 
// //типы перменных

// // 1. string
// // 2. => бе кавычек 12, 36, 23.6
// // 3. boolen: nrue or false
// // 4. null => ничего тип object
// // 5. indefind => ничего
// // 6. Simbol
// // 7. Begint => 123n
// // 8. object=> {ключ: 'значение'}

// let a=2;
// a='stroka';

// const b ='My name';
// //ошибочно
// //b='js';
// const MAIN_COLOR='fff000';
// const SECOND__COLOR='ffffff';

// console.log(b);


// //как выводить

// //alert('Привет, пользователь');=> undefind
// //prompt('Введите ваш год рождения'); => преоразует введенные данные в строку. Если ничего не ввести, строка пустая. При нажатии отмена, мы получаем null.
// //confirm('Вам есть 18 лет?') при ok true, при отмена false



// //` `- temlate string
// // console.log(`Адрес сервера: ${MAIN_COLOR}`);

// // const result=alert('Привет, пользователь');
// // const result=prompt('Введите ваш год рождения');
// // console.log(typeof(result));
// // console.log(result);

// // let f;
// // console.log(f);


// //экранирование символов \
// let userName='Daria\'s book';
// console.log(userName);
// // пренос строки \n
// let userName1='Daria\n book';
// console.log(userName1);

// //код выполняется по порядку

// alert(1);
// alert(2);
// alert(3);

// console.log('Запускаем таймер');
// alert('5');
// alert('4');
// alert('3');
// alert('2');
// alert('1');
// alert('0');
// console.log('Отсчет закончен');


// const myName='Helen';
// const mySurname='Gavrilenko';
// let myFavoriteDrink='beer';
// let myFavoriteAnimal='cat';

// console.log('Моё имя', myName);
// console.log('Моя фамилия', mySurname);
// console.log('Любимый напиток', myFavoriteDrink);
// console.log('Моё любимое животное', myFavoriteAnimal);


// const a=8;
// const b=4;
// const result1=a-b;
// const result2=a+b;
// const result3=a*b;
// const result4=a/b;
// const result5=a**b; //возведение в степень
// const result6=a%b; //остаток от деления

// console.log(result1);
// console.log(result2);
// console.log(result3);
// console.log(result4);
// console.log(result5);
// console.log(result6);

// let c=3;
// console.log(c++);//покажет потом увеличит
// console.log(++c); //сначала увеличит и покажет

// console.log(c--);
// console.log(--c);

//на 0 делить можно в js
// let c=4/0;
// console.log(c); //Infinity или -Infinity

//NaN - not a number 
//+ перевод строки в число
//Number(n) перевод строки в число
//String(value) приведение к строке
//проверка на число: функция isNaN
//сложение строк наывается конкатенация
//+= прибавляет 

let d=prompt('Enter your name');
let a=prompt('Enter your surname');
let full=d+' '+a;
console.log(`Добро пожаловать, дорогой ${full}`);

