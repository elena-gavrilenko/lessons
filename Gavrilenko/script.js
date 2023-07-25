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

// const USERS_URL = 'https://reqres.in/api/users?page=1';

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
