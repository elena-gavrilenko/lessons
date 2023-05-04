let str='JavaScripta';


const str2='Hello';
// console.log(str.length)

// console.log(str.toLowerCase());
// console.log(str.toUpperCase());
// console.log(str2.concat(', ',str));

// console.log(str[5]);
// for(let i=0;i<str.length;i++){
//     console.log(str[i]);
// }
// последний символ строки
// console.log(str[str.length-1]);

// console.log(str.charAt(5));

// includes проверяет вхождение подстроки в строку
// let result=str.includes('Java');
// console.log(result);

// console.log(str.indexOf('a')); // первое вхождение
// console.log(str.lastIndexOf('a')) //посленее вхождение
// console.log(str.indexOf('w')); // вхождение отсутсвует возвращает -1

// console.log(str.startsWith('Ja'));//true
// console.log(str.endsWith('Ja'))//false

// console.log(str.search('Scr'));//вернет индекс начала первого вхождения

// let result=str.slice(4,8);
// console.log(result);//получаем новую строку, начиная с индекса 4 и аканчивая индексом 8  

// console.log(str.substring(3,8));//возвращает от 3 до 8
// console.log(str.substr(3,8));//возвращает от 3 8 символов(длиной 8) метод устарел

// console.log(str.padEnd(20,'*'))//добавляет в конец 
// console.log(str.padStart(12,'*'));//добавляет в начале

// возвращают новую строку, если не нашел вернет исодную строку
// console.log(str.replace('a','@'))//заменяет только первое вхождение
// console.log(str.replaceAll('a','@'))//заменяет все вхождения


// let newStr='#';
// console.log(newStr.repeat(5));


//удаление пробелов в строках trim - с двух сторон, trimStert - сначала, trimEnd - в конце
// let test=prompt('enter text')
// console.log(test.trim());

// tasks
// 1)
// let str3='world';
// let newStr=''
// for (let i=str3.length-1; i>=0; i--){
//      newStr=str3[i]
// }
// console.log(newStr)


// 2) 
// const userName=prompt('Введите имя');
// let surname=prompt('Введите фамилия');
// console.log(userName.concat(' ',surname))

// 3) 
let str5='bla';
for(let i=0; i<4;i++){
    console.log(str5.padEnd(str5.length+i*3,str5))
}