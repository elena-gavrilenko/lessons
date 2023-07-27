// добавить setItem(ключ,значение)
localStorage.setItem('name','Jhon');
// если добавить с тем же ключом , но другим значением , то перезапишет по ключу
localStorage.setItem('name','David');
// еще один способ добавить запись
localStorage['userName']='David2023'

// получить(прочитать из хранилища) getItem
// если указать несуществующий ключ, вернет null
const fromLocalStorage=localStorage.getItem('name');
// console.log(fromLocalStorage);
// получить тоже можно через [ ]
// console.log(localStorage['userName'])


// удалять пару ключ-значение removeItem
// localStorage.removeItem('userName');
// или
//  delete localStorage['userName'];

// очистить полностью clear
// localStorage.clear();

// узнать количество пар
// console.log(localStorage.length);

// получить ключ можно по индексу
// console.log(localStorage.key(0))//ключ
// console.log(localStorage[localStorage.key(0)]);//значение

// по хранилищу можно пройти циклом 

for (let i=0; i<localStorage.length;i++){
    // получаем ключ
    const key=localStorage.key(i);
    // получаем значение
    const value=localStorage[key];
    // console.log(`${key} - ${value}`);
}

// для sessioStorage те же методы

sessionStorage.setItem('key','value');

window.addEventListener('storage',(event)=>{
    console.log(event)
})


const obj={
    name:'Egor',
    age: 20,
    sayHello(){
        console.log('hello')
    }
}

const objCopy=JSON.parse(JSON.stringify(obj));
// методы и функции не копируются, только свойства

console.log(obj);
console.log(objCopy);
console.log(obj===objCopy);//false, значит копия


// чтобы добавить объект нужно  его перевести в формат JSON 
localStorage.setItem('user',JSON.stringify(obj));
const userfromLocalstorage=localStorage.getItem('user');
// чтобы получить объект, нужно распарсить
console.log(JSON.parse(userfromLocalstorage));




