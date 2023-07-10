// 1)
// function letterPosition(letter){
//     let alpha='abcdefghijklmnopqrstuvwxyz';
//     let pos=alpha.toLowerCase().indexOf(letter.toLowerCase());
//     // findIndex
//     return `Позиция алфавита: ${pos+1}`;
// }
// console.log(letterPosition('S'));

// 2)
//     Array.prototype.square=function() {
//         return this.map(el=>el**2);
//     }
//     Array.prototype.cube=function() {
//         return this.map(el=>el**3);
//     }
//     Array.prototype.average=function(){
//         return this.reduce((acc,el)=>acc+el,0)/this.length;
//     }
//     Array.prototype.sum=function(){
//         return this.reduce((acc,el)=>acc+el,0);
//     }
//     Array.prototype.even=function(){
//         return this.filter((el)=>el%2===0);
//     }
//     Array.prototype.odd=function(){
//         return this.filter((el)=>el%2!==0);
//     }

// const arr=[1,2,3,4,7];
// console.log(arr);
// console.log(arr.even());
// console.log(arr);
// console.log(arr.odd());
// console.log(arr);

const check=document.getElementById('check');
const btn=document.getElementById('btn');


btn.addEventListener('click',function(){
    // console.log('it works');
    console.log(check.getAttribute('type'));//значение атрибута
    console.log(check.hasAttribute('type'));//проверить налличие
    check.setAttribute('type','radio');// установить (название, значение)
    
})

check.addEventListener('click',function(){
    btn.disabled=!btn.disabled;
    if(check.checked){
        console.log('ITS CHECKED')
    }
       else{
        console.log('ITS NOT CHECKED')
    }
})

const list=document.getElementById('list');

const goods=[
    {
        name:'noski',
        price: 3
    },
    {
        name:'monitor',
        price: 20
    },
    {
        name:'stanok',
        price: 2
    },
    {
        name:'gazirovka',
        price: 4
    },
    {
        name:'shampoo',
        price: 10
    },
]


function createElement(goodName,goodrice){
    const elem=document.createElement('li');
    elem.textContent=goodName;
    elem.setAttribute('data-price',goodrice);
    // elem.dataset.price=goodprice
    return elem;
}

goods.forEach(({name,price})=>{
    list.append(createElement(name,price))
})

list.addEventListener('click', function(event){
    console.log(event.target.getAttribute('data-price'));
    console.log(event.target.hasAttribute('data-price'));
    console.log(event.target.dataset.price);
})

// удалить delete elem.dataset.price


// ---------------------------------------------
// DEBUG
// ------------------------------------------------

// F12 SOURES(источники)
// 1)
// let sum;

// const numberOfElements = 10;

// for (let i = 1; i < numberOfElements; i++) {
//     sum += i;
// }

// const theHalfOfSum = sum / 2;
// console.log('the half of sum', theHalfOfSum);


//   точку остановки можнос делать словом debagger

// 2)
const developerName = 'Maxim'
const programmingLanguage = 'JavaScript'


const programmingLanguages = {
    javaScript: 'javaScript',
    nodeJS: 'NodeJS'
}
// точку, слева на панели Run and Debug, по шагам 
if (programmingLanguage === programmingLanguages.javaScript) {
    console.log(`${developerName} является Front-end разработчиком`)
} else if (programmingLanguage === programmingLanguages.nodeJS) {
    console.log(`${developerName} является Back-end разработчиком`)
} else {
    console.log(`Язык программирования у ${developerName} неопределен`)
}
