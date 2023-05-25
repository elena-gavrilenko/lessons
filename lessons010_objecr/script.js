//содание с помощью литерала
// let person={
//     firstName:'Анрей',
//     lastName:'Сидоров',
//     age:35,
//     speak: function(){
//         console.log('person can speak');
//     },
//     // функцию можно записать без ключа
//     walk(){
//         console.log('person can walk');
//     },
//     hobbies:['рисование', 'спорт', 'шашки']
// }

// person.city='Gomel';

// person.speak();
// person.walk();
// person.firstName='Егор';
// console.log(person.firstName);
// console.log(person['lastName']);
// console.log(person);
// console.log(typeof person);//object
// delete person.hobbies;
// console.log(person);

//содание с помощью конструктора
// let obj1=new Object({name:'David',lastName:'Ivanov'});

// let obj2=Object.create({});//как в в примере с obj1 добавить элементы нельзя
// //нужно добавлять вручную
// obj2.name='Ivan';
// obj2.lastName='Ivanov';

// console.log(obj1);
// console.log(obj2);

let book={
    name: 'Golden calf',
    aгthors: ['ilf', 'petrov'],
    yearOfBirth: 2012,
    description: 'a work about adventures and travels, the characters of which are constantly moving, either dispersing or meeting again at various points in the novels space',
    publish: true,
    reserve(){
        console.log('can reserve')
    }
}
console.log(book)