// set - коллекция уникальные значения
// -----------------------------------------
// нет индексов
// ----------------------------------------------
// методы:
// 1. add()//добавляет элесменты
// 2. delete() -удаляет элементы
// 3. size() -  размер
// 4. has() - проверяет есть ли там элемент
// 5. clear() - очистить
// 6.  обход с помощью forEach и for...of
// const uniq=new Set();

// uniq.add(2);
// uniq.add('test');
// uniq.add(true);
// uniq.add([1,2,3]);
// uniq.add([1,2,3]);//добавится, потому что по ссылке
// uniq.add({fillName:'David',age:23});


// console.log(uniq);
// uniq.delete('test');
// console.log(uniq);
// console.log(uniq.size);
// console.log(uniq.has(true));


// uniq.forEach(el=>console.log(el));

// uniq.clear();
// console.log(uniq);

// ---------------------------------------------------------
// Map
// ---------------------------------------------------------
// map хранит любые данные в виде пар и ключом может быть ЧТО УГОДНО
// Методы повторяются как у set. Новые set и get.
// set - положить
// get - получить
// const collection=new Map();
// // в set передаются два значения
// collection.set(1,'Value 1 like a number');
// collection.set('1','Value 1 like a string');
// collection.set('1','Value 1 like ');
// collection.set([],'Array');

// const person={
//     age:20,
//     fullName:"Jhon"
// }

// collection.set({},'Object');
// collection.set(person,'obj was created');
// collection.set(null,undefined);
// collection.set(undefined,null);
// // с одинаковыми парами не добавляет, а если повторяется ключ, то значение перзаписывается


// collection.set(true)
// console.log(collection);
// console.log(collection.get(person));

// console.log(collection.has(1))//по ключу

// collection.delete(null)//удаление тоже по ключу

// collection.forEach((el)=>console.log(el))//выводит значения
// // collection.clear();
// // for(const [key,value]/*iterator*/ of collection){
// //     console.log(`ключ ${key} : значение ${value}`)
// // } 
// console.log(collection);


// -------------------------------------------------------
// РЕГУЛЯРНЫЕ ВЫРАЖЕНИЯ
// -------------------------------------------------------

// const patten1=new RegExp(шаблон,флаг);
// const pattern = /шаблон/флаг;

// const patten1=new RegExp('hello','g');
const pattern = /\w+l{2}\w+/;
const str='hello world hello';
console.log(pattern.test(str));//вернет true или false
console.log(pattern.exec(str));//вернет массив с совпадением и доп информацией