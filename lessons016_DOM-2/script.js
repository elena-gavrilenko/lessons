const card=document.querySelector('.card');
// console.log(card);
// console.log('innerHTML',card.innerHTML);
// console.log('outerHTML',card.outerHTML);

// // включая скрытые элементы
// console.log('textContent',card.textContent);


// innerText покаывает текст только видимых элементов
// console.log('innerText',card.innerText);

// card.textContent='New text';

// card.innerHTML='<h2>Header from</h2>'

// ---------------------------------
// СОЗДАНИЕ ЭЛЕМЕНТОВ
// ------------------------------
// createElement- создать элемент

// const newDiv=document.createElement('div');
// newDiv.textContent='Text for new div from JS';

// append-добавляет в конец узла
// card.append(newDiv);

// prepend-добавляет в начало узла
// card.prepend(newDiv);

// before- вставляет перед узлом
// card.before(newDiv);

// after- вставляет после узла
// card.after(newDiv);

// replaceWith -заменяет узел
// card.replaceWith(newDiv);

// function createElem(content,type){
//     const newElem=document.createElement(type);
//     newElem.textContent=content;
//     return newElem;
// }

// card.before(createElem('Text for new div from JS','div'));

//вставляет элемент
// card.insertAdjacentElement('afterbegin',newDiv);

// разбивает по тегам
// card.insertAdjacentHTML('afterbegin','<p>Hello from afterbegin</p>');//после открывающего тега
// card.insertAdjacentHTML('afterend','<p>Hello from afterend</p>');//после закрывающего тега


// card.insertAdjacentText('beforebegin','<p>Hello from beforebegin</p>');//перед открывающимся тегом
// card.insertAdjacentText('beforeend','<p>Hello from beforeend</p>');//перед закрывающимся тегом

// --------------------------------------------
// УДАЛЕНИЕ
// ---------------------------------------------
// remove -удаление

// const liveLis=document.getElementsByClassName('list_item');//живая коллекция
// const deadlis=document.querySelectorAll('.list_item');//мертвая коллекция

// document.getElementsByClassName('list_item')[2].remove()

// console.log(liveLis);//живая коллекция сразу реагирует на удаление
// console.log(deadlis);//у мертвой нужно обновить
// console.log(deadlis[2].textContent);

// function show(){
//     const carrentCollection=document.querySelectorAll('.list_item');
//     console.log(carrentCollection);
//     console.log(carrentCollection[2].textContent);
// }
// show();

// -----------------------------------
// АТРИБУТЫ
// ------------------------------------

// hasAttribute => true or false проверяет наличие атрибута
// console.log(card.hasAttribute('id'));
// console.log(card.hasAttribute('class'));

// getAttribute-получить имя атрибута
// console.log(card.getAttribute('class'));

// setAttribute-добавляет атрибут
// card.setAttribute('name','from_JS');

// removeAttribute-удаляет атрибут
// card.removeAttribute('name','from_JS');


// attributes- получить список всех атрибутов
// console.log(card.attributes);

// -------------------------------------
// Работа с классами элементов
// ---------------------------------
// амена класса elem.className="любой другой"
// card.className='active';

// elem.classlist.add('newclass)-добавляет класс
// card.classList.add('active');
// card.classList.add('new');

// elem.classlist.remove('newclass)-уаляет класс
// card.classList.remove('active');

// card.classList.contains('new')- проверка на наличие класса
// console.log(card.classList.contains('new'));
// console.log(card.classList.contains('test'));

// card.classList.toggle('test2')-если класса нет, то добавит, если есть - удалит
// card.classList.toggle('test2');
// card.classList.toggle('test2');
// console.log(card.classList);

// ------------------------------------
// УПРАВЛЕНИЕ СТИЛЯМИ  ЧЕРЕЗ style
// ---------------------------------------

// elem.style.
// card.style.fontSize='32px'


// ----------------------------------------
// -------------------------------------------
// СОБЫТИЯ
// ---------------------------------------------
// ---------------------------------------------


// const btn=document.querySelector('.btn');

// функция-обраbотчик события 
// btn.onclick=function(){
//     btn.classList.toggle('test');
//     console.log('click happend')
// }

// btn.ondblclick=function(){
//     console.log('dblclick happend')
// }
// btn.onmousemove=function(){
//     console.log('mouse move happend')
// }
// btn.onmouseenter=function(){
//     console.log('mouse enter happend')
// }
// btn.onmouseleave=function(){
//     console.log('mouse leave happend')
// }
// console.log(btn);

// addEventListener -слушатель события
// btn.addEventListener('click',function(){
//         btn.classList.toggle('test');
//         console.log('click happend');
// })
// btn.addEventListener('click',function(){
//      console.log('another click happend');
// })

// правильная запись
// function clickHeander(event){
//     btn.classList.toggle('test');
//     // console.log('click happend');
//     console.log(event.target.innerText);
// }
// // function secondclickHeander(){
// //       console.log('another click happend');
// // }
// btn.addEventListener('click',clickHeander);
// btn.addEventListener('click',secondclickHeander);


// ----------------------------------------
// удаление обработчика события
// -------------------------------------

// btn.removeEventListener('click',clickHeander);//удаляет только при отдельносозданной функции с названием


// событие с клавиатурой
// ------------------------------------
// document.body.addEventListener('keydown',(event)=>{
//     console.log(event.code);
//     console.log(event.key);
//     console.log(event.keyCode);
// })

// КОЛЕСО МЫШИ
// --------------------------------------
// document.body.addEventListener('wheel',(event)=>{
//     console.log(event);
   
// })


// const input=document.querySelector('.inp');
// // input.oninput=function(){
// //     this.textContent=this.value;
// //     console.log(this.textContent);
// // }
// input.onchange=function(){
//     this.textContent=this.value;
//     console.log(this.textContent);
// }

// task part1
// const body=document.querySelector('body');
// body.innerHTML=`<form class="create-user-form">
// <label>
//     Имя
//     <input type="text" name="userName" placeholder="Введите ваше
// имя">
// </label>
// <label>
//     Пароль
//     <input type="password" name="password" placeholder="Придумайте
// Пароль">
// </label>
// <button type="submit">
//     Подтвердить
// </button>
// </form>`


// task part2
const body=document.querySelector('body');
body.innerHTML='';
const form=document.createElement('form');
form.classList.add('create-user-form');

function setAttributes(el, options) {
    Object.keys(options).forEach(function(attr) {
    el.setAttribute(attr, options[attr]);
    })
    }
function createElem(textTegMain,options){
    let tegMain=document.createElement('label');
    tegMain.textContent=textTegMain;
    let input=document.createElement('input');
    setAttributes(input,options);
    tegMain.append(input);
    return tegMain;
}
function createButton(type, text){
    let btn=document.createElement('button');
    btn.innerText=text;
    btn.setAttribute('type',type)
    return btn;
}
// console.log(createElem('Имя',{'type':'text', 'name':'userName', 'placeholder':'Введите ваше имя'}));


body.append(form);
form.append(createElem('Имя',{'type':'text', 'name':'userName', 'placeholder':'Введите ваше имя'}));
form.append(createElem('Пароль',{'type':'password', 'name':'password', 'placeholder':'Придумайте Пароль'}));
form.append(createButton('submit','Подтвердить'))