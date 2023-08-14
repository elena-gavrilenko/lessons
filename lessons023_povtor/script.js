
// 1)
// const arr=[1,1,1,4,4,5,1,6,6,74,74,74,3];
//  function noRepeat(values){
//      return new Set(values.filter((el,i,arr)=>arr.indexOf(el)!==i));
//  }
//  из set сделать массив
//  console.log(noRepeat(arr))

// 2)
// function welcome(name, city, state){
//    console.log( `Hello, ${name.join(' ')}! Welcome to ${city}, ${state}!`);
// }

// welcome(['John', 'Smith'], 'Phoenix', 'Arizona');

// 3)
// function langthWord(str){
//    return str.split(' ').map(el=>el+' '+el.length)
// }
// console.log(langthWord('you will win'))

// 4)
// let user = [
//    {
//        name: "John",
//        age: 30
//    },
//    {
//        name: "Bob",
//        age: 21
//    },
//    {
//        name: "Anna",
//        age: 19
//    }
// ]

// let a;

// user.forEach(el=>{
//    if (el.name==='Bob'){
//       a=el;
//    }
// })

// console.log(a);
// const userBob=user.find(el=>el.name=='Bob');
// console.log(userBob);

// при приведении к Boolean будут false
// 1. null
// 2. ''
// 3. 0
// 4. false
// 5. NaN
// 6. undefined


// let num1=3;
// let num2=new Number(3);
// num1 не равно num2


// !! идентично Boolean()


function outer(){
   let arr=['a','b','c','d','f','g']
   let i=0;
   let str='';
   function inner(){
      str+=arr[i];
      console.log(str);
      i++;
      return {
         str,i
      }
   }
   return inner
}
const word=outer();
console.log(word());
console.log(word());
console.log(word());
console.log(word());
console.log(word());
console.log(word());
