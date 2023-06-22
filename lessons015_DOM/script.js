// BOM browser Object model
// DOM Document Object model
// API Application programm Interface


// console.log(navigator)
// console.log(location)
// console.log(screen)
// console.log(document.referrer)
// console.log(document.readyState)
// console.log(document.URL)
// console.log(document.domain);

document.write('Hello world from JS');

// DOM дерево состоит и узлов(node)
document.title='Title from JS';
// document.bgColor='yellow';
console.log(document.body);
console.log(document.head);

const items=document.querySelectorAll('.item');
const list=document.querySelector('.list');
const header=document.getElementById('header');
const elements=document.getElementsByClassName('list_item');
const tagNames=document.getElementsByTagName('li');
const byNname=document.getElementsByName('test');
// console.log(items);
// console.log(items.length);
// console.log(items[2]);
// console.log(header);
// console.log(list);
// console.log(elements);
// console.log(tagNames);
// console.log(byNname);

// Coderlessons.com
// trello

// ближайший
// const el= document.querySelector('.level-3');
// const elAncestor=el.closest('.level-1');
// console.log(elAncestor);


// contains проверяет на потомство
//  const lev1=document.querySelector('.level-1');
//  const lev2=document.querySelector('.level-2');

//  console.log(lev2.contains(lev1));
//  console.log(lev1.contains(lev2));


// list.style.color='orange';
// list.style.fontSize='32px';
// console.log(list.className);
// console.log(list.children);
// console.log(list.parentElement);
// console.log(list.previousElementSibling);
// console.log(list.nextElementSibling);


// [...list.children].forEach((elem)=>console.log(elem));

console.log(header.innerHTML);//все что внутри
console.log(header.textContent);// только текст
console.log(header.outerHTML);//все включая себя и все что внутри