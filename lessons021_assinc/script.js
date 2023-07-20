// console.log('1');

// setTimeout(()=>{
//     console.log('1 sec')
// },1000)

// setInterval
// console.log('2');
// console.log('3');


// Для выполнения js кода нужен движок. Самый поулярный v8
// Для работы с асинхронным кодом испольуется promise


// Promise
//  Promise имеет три состоянияЖ
// 1) panding
// 2) fulfiled => выполнен успешно
// 3) rejected => отклонен

// const developer={
//     name: "Maxim",
//     isJSDev: true
// }


// const promise1=new Promise((resolve,reject)=>{
//     if (developer.isJSDev) {
//         setTimeout(()=>{
//             resolve(`${developer.name} является разработчиком`)
//         },2000)
//     } else {
//         reject(`${developer.name} НЕ является разработчиком`)    

//     }
// });
// // состояние promise выполняется один раз при выполнении
// console.log(promise1)

// //Методы promise:
// // then, catch, finally

// promise1
//     .then((message)=>{
//         console.log(message);
//     })
//     .catch((error)=>{
//         console.log(error);
//     })    
//     .finally(()=>{
//         console.log('finnaly')
//     })


    // fetch
    // фэйковый сервер jsonplaceholder
    // fetch вовращает promise

    // const TODOS_URL='https://jsonplaceholder.typicode.com/todos';

    // function createTodoElement(text){
    //     const todoElemement=document.createElement('li');
    //     const todoElementAnchor=document.createElement('a');
    //     todoElementAnchor.href='#';
    //     todoElementAnchor.textContent=text;
    //     todoElemement.append(todoElementAnchor);
    //     return todoElemement
    // }

    // const dataContainer=document.querySelector('#data-container');


    // const getAllTodos=()=>{
    //     const result=fetch(TODOS_URL,{
    //         metod:'GET'
    //     });

    // result
    // .then((response)=>{
    //     console.log(response);
    //     if(!response.ok){
    //         throw Error('Ошибка запроса');
    //     }
    //     return response.json()//возврвщаем декодированный ответ
    // })
    // .then((todos)=>{
    //     todos.forEach((todo) => {
    //         const todoHTML=createTodoElement(todo.title);
    //         dataContainer.append(todoHTML);
    //     });
    //     console.log(todos)//возвращает массив
    // })
    // .catch((error)=>{
    //     console.log(error);
    // })

    // }

    // getAllTodos()

    // json() декодировка данных(json -самый популярный язык обмена)
    
    // text()

    // result
    //     .then((response)=>{
    //         console.log(response);
    //         return response.text()//возврвщаем декодированный ответ
    //     })
    //     .then((todos)=>{
    //         console.log(todos)//возврщает как текст
    //     })
    
   

// const promise=new Promise((resolve,reject)=>{
//     if(Math.random()>0.5){
//         resolve('ok');
//     }
//     else{
//         reject('not ok');
//     }
// })

// promise
//     .then ((resp)=>{
//         console.log(resp);
//     })
//     .catch((error)=>{
//         console.log(error);
//     })

// -------------------------------------------------------
// Promise.all
// если у всех будет состояние fulfiled, то он возврвщает fulfilled, если хотя бы один будет rejected, то вернет reject и остальные данные учитываться не будут
// ----------------------------------------------------------

// Promise.all([
//     new Promise(),
//     new Promise(),
//     new Promise(),
// ])

// const TODOS_URL='https://jsonplaceholder.typicode.com/todos';
// const todosIds=[3,5,10,100,101];

// function createTodoElement(text){
//     const todoElemement=document.createElement('li');
//     const todoElementAnchor=document.createElement('a');
//     todoElementAnchor.href='#';
//     todoElementAnchor.textContent=text;
//     todoElemement.append(todoElementAnchor);
//     return todoElemement
// }

// const dataContainer=document.querySelector('#data-container');

// const getTodosByIds=(ids)=>{
//     const requests=ids.map((id)=>fetch(`${TODOS_URL}/${id}`));
//     Promise.all(requests)
//         .then((resonses)=>{
//             const dataResult=resonses.map((resonse)=>resonse.json());
//             console.log(dataResult);
//             return Promise.all(dataResult)
//         })
//         .then((todos)=>{
//             console.log(todos);
//             todos.forEach((todo) => {
//                 const todoHTML=createTodoElement(todo.title);
//                     dataContainer.append(todoHTML);
//                 });
//         })
//         .catch((error)=>{
//             console.log(error);
//         })
// }


// getTodosByIds(todosIds);

// ----------------------------------------------------------------------------
// Promise.race
// принимает массив и вернет самый быстровыполненный promise независимо от статуса
// ----------------------------------------------------------------------------
// Promise.race([
//     new Promise(),
//     new Promise(),
//     new Promise(),
// ])

// const p1 =new Promise((resolve)=>{
//     setTimeout(()=>{
//         resolve('promise1')
//     },1000);
// })
// const p2 =new Promise((resolve)=>{
//     setTimeout(()=>{
//         resolve('promise2')
//     },2000);
// })
// const p3 =new Promise((resolve)=>{
//     setTimeout(()=>{
//         resolve('promise3')
//     },500);
// })

// Promise.race([p1,p2,p3])
//     .then((result)=>{
//         console.log('result',result)
//     })
//     .catch((error)=>{
//         console.log('error',error)
//     })


// ___________________________________________________________
// Promise.allSettled
// --------------------------------------------------------------
// ждет всех и возвращает массив объектов у объекта 2 свойства: статус и результат 
// Promise.allSettled([
//         new Promise(),
//         new Promise(),
//         new Promise(),
//     ])

// const p1 =new Promise((resolve)=>{
//     setTimeout(()=>{
//         resolve('promise1')
//     },1000);
// })
// const p2 =new Promise((resolve)=>{
//     setTimeout(()=>{
//         resolve('promise2')
//     },2000);
// })
// const p3 =new Promise((resolve)=>{
//     setTimeout(()=>{
//         resolve('promise3')
//     },500);
// })

// const result=Promise.allSettled([p1,p2,p3]);


// result  
//     .then((data)=>{
//         data.forEach(({value})=>{
//          value && console.log(value)
//         })
//     })


// ------------------------------------------------------
// Promise.any
// _________________________________________________________
// Первый успешный promise среди переданных

// petstore swegger-сайт



// JSON

const hero={
    nickname:'BestHealerEver',
    lavel:7,
    age:141,
    race:'Gnome'
}


console.log(typeof hero);
//  JSON.stringify переводит в формат json- строка
let jsonHero=JSON.stringify(hero);


console.log(typeof jsonHero);
console.log(jsonHero);

// JSON.parse переводит в объект
let jsonToObj=JSON.parse(jsonHero);

console.log(typeof jsonToObj);
console.log(jsonToObj);

// mock api сайт потренироваться в промисах