const carModel='Opel';
const carOwner='Jhon';
let carrentCarspeeed=120;

console.log(`Модель авто: ${carModel}, Владелец авто: ${carOwner}, текущая скорость: ${carrentCarspeeed}`);

carrentCarspeeed=145;

console.log(`Скорость была изменена на: ${carrentCarspeeed}`);
let newCarrentSpeed=180;
console.log(`Скорость была изменена на: ${newCarrentSpeed-carrentCarspeeed}`);

// неявное преобразование
console.log(2>3);

// явное преобраование
console.log(typeof +'2');

let num=1354;
let strNum='1354';

console.log(num==strNum);//=>true проиощло неявное преобраование типов
console.log(num===strNum);//=>false

// ! -логическое не
console.log(num!=strNum);//=>false
console.log(num!==strNum);//=>true

console.log('3'>'13');

console.log(String(2));


//&& и 
// || или
// ! не

// let age=20;

// //если хотя бы одно false вернет false
// console.log(age>20 && age<30);

// //если хотя бы одно true вернет true
// console.log(age>20 || age<30);


// console.log(!0);//=> true
// console.log(!!0);//=> false эквивалентно проверке boolen


// let age=10;

// if (age>18){
//     console.log('ok')
// }else{
//     console.log('not ok')
// }

// вид switch
// switch(key){
//     case value:

//     break;

//     defoult:
//     break;
// }
//пример
// let age=18;

// switch(age){
//     case 18:
//         console.log('bingo 18');
//         break;
//     case 20:
//         console.log('bingo 20');
//         break;
//     case 24:
//     case 25:
//         console.log('bingo 24/25');
//         break;
     
//     default:
//         console.log(error);
//         break;
// }


//тернарный оператор ? заменяет if else - короткая запись

// let age=18;

// age > 18?console.log('ok'):console.log('not ok'); 


//1
// let age1=+prompt('введите свой возраст');
// let age2=+prompt('введите свой возраст');

// age1===0||age2===0?console.log('error'):age1>age2?console.log(age1):console.log(age2);

//2


// let age3=+prompt('введите свой возраст');

// if (age3<=10) {
//            console.log('привет мальчик');
//        }
//     else if (age3 > 10 && age3<=18) {
//         console.log('привет подросток');
//     }
//     else if (age3 > 18 && age3<=40) { 
//         console.log('здарова пацан');
//         }    
//     else if (age3 > 40 && age3 <= 80) { 
//         console.log('добрый вечер');
//         }    
//     else if (age3 > 80 && age3<=100){
//         console.log('здравия желаю');
//        }   else {
//         console.log('ну фсе')
       
// }

//3. 
// let num1=+prompt('введите число');
// let num2=+prompt('введите число');
// let num3=+prompt('введите число');

// if (num1>num2 && num1>num3){
//     console.log(num1);
// } else if(num2>num1 && num2>num3){
//     console.log(num2);
// } else {
//     console.log(num3);
// }

// 4.
// let num1=+prompt('введите число');
// let num2=+prompt('введите число');
// let num3=+prompt('введите число');

// if (typeof(num1)==='number'&&typeof(num2)==='number'&&typeof(num1)==='number') {
//     console.log((num1+num2+num3)/3);
// }
// else {
//     console.log('ошибка, вы ввели строку')
// }

// 5.

// let color='green';

// switch (color) {
//     case 'red':
//         console.log(1);
//         break;
//     case 'blue':
//         console.log(2);
//             break;
//     case 'orange':
//         console.log(3);
//         break;
//     case 'gray':
//         console.log(4);
//         break;
//     case 'salmon':
//         console.log(5);
//         break;
    
//     default:
//         console.log('error')
//         break;
// }


// 6.
// let month=+prompt('введите номер месяца')

// switch (month) {
//     case 1:
//         console.log('январь');
//         break;
//     case 2:
//         console.log('февраль');
//         break;
//     case 3:
//         console.log('март');
//         break;
//     case 4:
//         console.log('апрель');
//         break;
//     case 5:
//         console.log('май');
//         break;
//     case 6:
//         console.log('июнь');
//         break;
//     case 7:
//         console.log('июль');
//         break;
//     case 8:
//         console.log('август');
//         break;
//     case 9:
//         console.log('сентябрь');
//         break;
//     case 10:
//         console.log('октябрь');
//         break;
//     case 11:
//         console.log('ноябрь');
//         break;
//     case 12:
//         console.log('декабрь');
//         break;
//     default:
//         console.log('ошибка')
//         break;
// }

// 7.

// let fed=prompt('введите возраст первого мальчика');
// let met=prompt('введите возраст второго мальчика');

// if (fed===''||
//     met===''||
//     fed===null||
//     met===null||
//     isNaN(fed)||
//     isNaN(met)
// ){
//     console.log('введите правильно возраст')
// }
// else {
//     if (fed>met){
//         console.log(`Федя старше Мити на ${fed-met}`);
//     }
//     else if (fed<met){
//         console.log(`Митя старше Феди на ${met-fed}`);
//     }
//     else {
//         console.log('мальчики одного возраста')
//     }

// }
// 8.
// let number=+prompt('введите число');

// number > 0 ?console.log('число положительное'):number<0?console.log('число отрицательное'):console.log('число равно 0');

// 9.
let planet=prompt('введите навание планеты');
if (planet==='Земля'|| planet==='земля'){
    console.log(planet);
}
else {
    console.log('Привет, инопланетянин')
}
