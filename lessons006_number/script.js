// Задачи по методам строк
// ---------------------------------------
// let num=1375;
// let sum=0;
// let str=num.toString()
// for(let i=0; i<str.length;i++){
//     sum+=Number(str[i]);
// }
// console.log(sum)

// 7)
// let str='aaa@bbb@ccc';
// console.log(str.replaceAll('@','!'));

// 8) 
// let str='я учу javascript!';
// console.log(str.length);

// 5)
// let str='я учу javascript!';
// str=str[0].toUpperCase()+str.slice(1);
// str=str.relace(str[0],str[0].toUpperCase())
// console.log(str);


// 11)
// let str=prompt('Введите строку');
// let sum=0;
// for(let i=0; i<str.length;i++){
//     if (str[i]===str[i].toUpperCase()){
//         sum+=1;
//     }
// }
// console.log(sum);

// 13)
// let str=prompt('Ведите дробное число');
// if(str.includes('.')){
//     alert(`Вы ввели правильно`);
// }
// else {
//     alert('Вы ошиблись');
// }

// 12) 
// const carrentAnswer=6;
// for(;;){
//     let userAnswer=+prompt('Сколько будет 2+2*2')
//     if(userAnswer===carrentAnswer){
//         console.log('вы молодец');
//         break;
//     }
// }



// ---------------------------------------------------------
// Методы чисел
// ---------------------------------------------------------
// let a=10;
// let b=3;

// const result=a/b;
// console.log(result);
// console.log(typeof result);
// console.log(result.toFixed(2))//результат строка

// перевод строки в число
// ---------------------------------
// let str='13.24test';

// console.log(+str);
// console.log(Number(str));
// console.log(parseInt(str));//вернет только целые первое целое в строке '1234rtry145'=> 1234
// console.log(parseFloat(str)); //вернет первое число даже с дробной частью


// проверяет целое число и тип Number
// -----------------------------------------
// console.log(Number.isInteger(123));
// console.log(Number.isInteger(123.56));
// console.log(Number.isInteger('123'));

// проверяет  конечное ли число и тип Number
// --------------------------------------------
// console.log(Number.isFinite(123));
// console.log(Number.isFinite(123.56));
// console.log(Number.isFinite('123'));
// console.log(isFinite('123'));//происходит неявное преобразование в число

// let test=prompt('Enter value');
// isFinite(test)?console.log('Ok'):console.log('Not Ok');
// Number.isFinite(test)?console.log('Ok'):console.log('Not Ok');

// Округление до целого
// --------------------------------------
// const num=4.82;
// console.log(Math.ceil(num));//в большую сторону 5
// console.log(Math.floor(num));//в меньшую сторону 4
// console.log(Math.round(num));//по математике: после 5 в большую сторону, до 5 в меньшую=>5
// console.log(Math.trunc(num));//удаляет дробную часть=>4

// Возведение в степень
// --------------------------------------
// const num=2;
// console.log(Math.pow(num,3))//2 аргумента 1-й что возводим, 2-й в какую степень возводим

// Корень из числа
// --------------------------------------
// console.log(Math.sqrt(16))//=>4
// console.log(Math.floor(Math.sqrt(17)))//комбинирование методов

// Определение знака числа
// --------------------------------------
//происходит неявное преобразование в число

// console.log(Math.sign(2));//если положительно число получим 1
// console.log(Math.sign(-2));//если отрицательное число получим -1
// console.log(Math.sign(0));//если 0 число получим 0
// console.log(Math.sign(-0));//если -0 число получим -0
// console.log(Math.sign('123'));//если строка внутри которой число получим 1
// console.log(Math.sign('-123'));//если строка внутри которой отрицательное число получим -1
// console.log(Math.sign('dsg'));//если строка число получим NaN

// Минимальное и максимальное значение
// ---------------------------------------
// console.log(Math.max(1,2,45,7,6,8,-5));//=>45
// console.log(Math.min(1,2,45,7,6,8,-5));//=>-5

// Генерация рандомного числа с плавающей точкой от 0 до 1 не включая 1
// ----------------------------------------------------------------------
// console.log(Math.random());

// let min=5;
// let max=10;

// console.log(Math.floor((Math.random()*(max-min+1))+min));

// Генерация цвета
// -----------------------
// const randomColor=(Math.floor(Math.random()*16777215).toString(16));
// backgr.style.backgroundColor=`#${randomColor}`
// console.log('#'+randomColor)

//Генерация пароля
// -----------------
// console.log(Math.random().toString(36).slice(2,8));

// Задачи по Math
// 1) 
// let num1=+prompt('Введите первое число');
// let num2=+prompt('Введите второе число');
// let num3=+prompt('Введите третье число');
// let num4=+prompt('Введите четвертое число');

// console.log(`Минимальное из введенных вами чисел: ${Math.min(num1,num2,num3,num4)}`);

// 2)
// let num1=+prompt('Введите первое число');
// let num2=+prompt('Введите второе число');
// let num3=+prompt('Введите третье число');

// console.log(`Максимальное из введенных вами чисел: ${Math.max(num1,num2,num3)}`);

// 3)
let num1=+prompt('Введите первое число');
let num2=+prompt('Введите второе число');
let max=Math.max(num1,num2);
let min=Math.min(num1,num2);
let randomNumber=Math.floor(Math.random()*(max-min+1)+min);
console.log(`Случайное число в диапозоне между ${num1} и ${num2} будет ${randomNumber}`);