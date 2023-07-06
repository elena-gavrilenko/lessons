// const form=document.querySelector('form');
// const div=document.querySelector('.division');
// const p=document.querySelector('.paragraph');
// const btn=document.querySelector('.btn');

// form.addEventListener('click', function(){
//     console.log('click form');
// });

// div.addEventListener('click', function(){
//     setTimeout(()=>{
//         console.log('click div');
//     },1000)
    
// });

// p.addEventListener('click', function(event){
//     event.stopPropagation();//отменяет всплытие
//     event.stopImmediatePropagation();//отменяет всплытие и работу других обработчиков на этом событии
//     setTimeout(()=>{
//         console.log('click p');
//     },2000)
// });

// p.addEventListener('click', function(){
//     setTimeout(()=>{
//         console.log('second click p');
//     },3000)
// });

// btn.addEventListener('click', function(event){
//     console.log('carrent target', event.currentTarget);//где висит слушатель
//     console.log('target', event.target);//непосредственно элемент на который кликнули
//     console.log(event.currentTarget.textContent);
// })
// // проверить всплытие по свойству bubbles
// // отмена действия по умолчанию брауера event.preventDefault()

// document.querySelector('#list').addEventListener('click',function(e){
// if(e.target && e.target.nodeName==='LI'){
//     console.log(e.target.textContent);
// }
// })



const allElements=document.querySelectorAll('*');
console.log(allElements);

// allElements.forEach((element)=>{
//         element.addEventListener('click',(event)=>{
//         event.stopPropagation()// чтобы отмениеть всплытие
//         alert(`всплытие ${element.tagName}`);
//     });
// погружение или перехват
    // element.addEventListener('click',()=>{
    //     alert(`погружение ${element.tagName}`);
    // },true);
    // третий аргумент в слушателе указывает нужно ли перехватывать событие
    // передается или как true или как объект {capture:true}, по умолчалнию false
// });

const username=document.getElementById('username');
const form=document.getElementById('form');
const submit=document.getElementById('subm');

// заглушает кнопку
submit.disabled=true;

submit.addEventListener('click',(event)=>{
    event.preventDefault();
    if (isNaN(username.value)){
        console.log('OK!');
        form.submit();
    }
    else {
        console.log('NOT OK!');
    }
})

username.addEventListener('input',({target})=>{
    console.log(target.value.length);
    if (target.value.length>6){
        submit.disabled=false;
        target.style.border='3px solid green'
    }
})