// https://fakestoreapi.com/
// reqres.in

// const USERS_URL = 'https://fakestoreapi.com/users';
// const USER_CARD = 'https://fakestoreapi.com/carts/user';
// const PRODUCTS = 'https://fakestoreapi.com/products';

// const getDate=()=>{
//     fetch(USERS_URL)
//         .then((response)=>response.json()        )
//         .then((users)=>{
//             // console.log(users);
//             const firstUserId=users[0]?.id;
//             fetch(`${USER_CARD}/${firstUserId}`)
//             .then((response)=>response.json())
//             .then((carts)=>{
//                 console.log(carts);
//                 const productsIds=carts.reduce((acc,carrentCart)=>{
//                     return [...acc,...carrentCart.products]
//                 },[])
//                 // console.log(productsIds)
//                 const productsRequests=productsIds.map(({productId})=>fetch(`${PRODUCTS}/${productId}`));
//                 Promise.all(productsRequests)
//                     .then((response)=>{
//                         const dataResults=response.map((data)=>data.json());
//                         console.log(dataResults)
//                         return Promise.all(dataResults);
//                     })

//             })
//             .catch((error)=>{
//                 console.log(error);
//             })
//         })
//         .catch((error)=>{
//             console.log(error);
//         })
// }

// getDate();

// async/await
// try catch finally

// когда написали async функция вернет промис
// const getCardByUserId = async () => {
//   try {
//     // получаем пользователей
//     const response = await fetch(USERS_URL);
//     if (!response.ok) {
//       throw new Error('Ошибка получения пользователей');
//     }
//     const users = await response.json();
//     // взяли id пользователя
//     const firstUserId = await users[0]?.id;
//     console.log(firstUserId);
//     // получаем заказы по ID
//     const cartResponse = await fetch(`${USER_CARD}/${firstUserId}`);
//     if (!cartResponse.ok) {
//       throw new Error('Ошибка получения данных корзин польователей');
//     }
//     const firstUserCarts = await cartResponse.json();
//     console.log(firstUserCarts);
//   } catch (error) {
//     console.log(error);
//   } finally {
//     console.log('finally');
//   }
// };
// const promise = getCardByUserId();
// console.log(promise);

const USERS_URL = 'https://reqres.in/api/users?page=1';

// const getUserName = async () => {
//   try {
//     const response = await fetch(USERS_URL);
//     console.log(response);
//     if (!response.ok) {
//       throw new Error('Ошибка');
//     }
//     const result = await response.json();
//     console.log(result.data);
//     result.data.forEach(({ first_name }) => {
//       console.log(first_name);
//     });
//   } finally {
//     console.log('finally');
//   }
// };
// getUserName();

// II через then
// ---------------------
// fetch(USERS_URL)
//   .then((response) => {
//     console.log(response);
//     return response.json();
//   })
//   .then((result) => {
//     console.log(result.data);
//     result.data.forEach(({ first_name }) => {
//       console.log(first_name);
//     });
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// const TODO = 'https://jsonplaceholder.typicode.com/todos/1';

// const getTodo = () => {
//   fetch(TODO)
//     .then((response) => {
//       return response.json();
//     })
//     .then((todo) => {
//       console.log(todo);
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// };
// getTodo((todoItem) => {
//   console.log(todoItem);
// });

//  в function declaration async добавляется перед словом function
// в стрелке или exprassion пред скобками аргументов
// как только добавили async функция возвращаевт промис
// await вызывает ожидание на той строке, где стоит
// try/catch используют только в функции async

// Event loop -событийный цикл
// бесконечный цикл, в котором движок ожидает задачи и у него есть свой порядок выполнения и свои правила
//
// у движка есть сущность под названием Call Stack (стэк вызова)
// принципы:
// 1) Добавить в стэк
// 2)Запустить код
// 3) Удалить из стэка

// первый вошел первый вышел

// function sayHello(name){
//     console.log(`Hello ${name}`);
// }

// console.log('start');
// sayHello('Jhon');
// setTimeout(()=>{
//     sayHello('David');
// },0)
// sayHello('Marta');
// console.log('end');

// setInterval и setTimeout это WEb API или API браузера
// Callback queue (очередь вызовов)
// первый вошел первый вышел

// порядок выполнения
// начинаем
// в промисе
// заканчиваем
// возвращаем из промиса
// 1 сек timeout
// timeout ждет дольше

// console.log('начинаем');

// setTimeout(()=>{
//     console.log('1 сек timeout');
// },1000);

// const pr=new Promise((resolve)=>{
//     console.log('в промисе');

//     resolve('возвращаем из промиса');
// })

// setTimeout(()=>{
//     console.log('timeout ждет дольше');
// },2000);

// pr.then((res)=>{
//     console.log(res);
// })
// console.log('заканчиваем');

// есть более приоритетная очередь , которая называется microtasks queue (очередь микрозадач)

// микрозадачи это код который находится в then, catch, finallly

// Порядок вызовов event look
// 1. выполняется макрозадача (самая главная - выполнять код от  начала до конца)
// когда код дойдет до последней строки макрозадача будет выполнена
// 2. вызвать все сто есть в очереди микрозадач
// после выполнения всего кода, движок идет выполнять очередь микрозадач
// если там есть задачи. они по порядку удаляются

// 3. Вызвать все что есть в очереди вызовов т.е.

// fetch('https://reqres.in/api/users')
// .then((response)=>{
//     console.log(response.status)
// });

// const obj={
//     name: 'Oleg',
//     job: 'Molodets'
// }

// fetch('https://reqres.in/api/users',{
//     method: "POST",
//     body:JSON.stringify(obj)
// })
// .then((response)=>{
//     console.log(response.status);
//     if (response.status===201) {
//         alert('молодец, ты добавил пользователя')
//     }
//     return response.json();
// })
// .then((data)=>{
//     console.log(data)
// })

// ---------------------------------------
// TASK
// ---------------------------------------

const btn = document.querySelector('.btn');
const users = document.querySelector('.users');

const getUsers = () => {
  fetch('https://reqres.in/api/users?page=2', {
    method: 'GET',
  })
    .then((response) => {
      console.log(response);
      return response.json();
    })
    .then((users) => {
      console.log(users);
      users.data.forEach(({ first_name, last_name, avatar }) =>
        addPhoto(first_name, last_name, avatar)
      );
      // prepod
      // .then((users) => {
      //   console.log(users);
      //   users.data.forEach((user) =>wrapper.append(creatCard(user))
      //   );

      btn.removeEventListener('click',getUsers);
    })
    .catch((error) => {
      console.log(error);
    });
};

function addPhoto(first_name, last_name, avatar) {
  const user = document.createElement('div');
  user.classList.add('user');
  
  const img = document.createElement('div');
  img.classList.add('user__img');
  
  const photo = document.createElement('img');
  
  const name = document.createElement('div');
  name.classList.add('user__name');
  
  const first = document.createElement('p');
  first.classList.add('first_name');
  first.textContent = first_name;

  const last = document.createElement('p');
  last.classList.add('last_name');
  last.textContent = last_name;
  users.append(user);
  user.append(img);
  user.append(name);
  img.append(photo);
  // можно сразу аппендить несколько элементов через запятую
  photo.setAttribute('src', avatar);
  // или photo.src=avatar;
  name.append(first);
  name.append(last);
}

btn.addEventListener('click', getUsers);

// prepod

// function createCard({ first_name, last_name, avatar }){
//   const cardWrapper=document.createElement('div');
//   cardWrapper.classList.add('card');

//   const imgWrapper=document.createElement('div');
//   imgWrapper.classList.add('img__wrapper');

//   const ava=document.createElement('img');
//   ava.src=avatar;

//   imgWrapper.append(ava);
  
//   const firstName=document.createElement('div');
//   firstName.textContent=first_name;

//   const lastName=document.createElement('div');
//   lastName.textContent=last_name;

//   cardWrapper.append(imgWrapper,firstName,lastName);
//   return cardWrapper;
// }
