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

    const TODOS_URL='https://jsonplaceholder.typicode.com/todos';

    function createTodoElement(text){
        const todoElemement=document.createElement('li');
        const todoElementAnchor=document.createElement('a');
        todoElementAnchor.href='#';
        todoElementAnchor.textContent=text;
        todoElemement.append(todoElementAnchor);
        return todoElemement
    }

    const dataContainer=document.querySelector('#data-container');


    const getAllTodos=()=>{
        const result=fetch(TODOS_URL,{
            metod:'GET'
        });

    result
    .then((response)=>{
        console.log(response);
        if(!response.ok){
            throw Error('Ошибка запроса');
        }
        return response.json()//возврвщаем декодированный ответ
    })
    .then((todos)=>{
        todos.forEach((todo) => {
            const todoHTML=createTodoElement(todo.title);
            dataContainer.append(todoHTML);
        });
        console.log(todos)//возвращает массив
    })
    .catch((error)=>{
        console.log(error);
    })

    }

    getAllTodos()

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
    
   


    