
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

// замыкание
// function outer(){
//    let arr=['a','b','c','d','f','g']
//    let i=0;
//    let str='';
//    function inner(){
//       str+=arr[i];
//       console.log(str);
//       i++;
//       return {
//          str,i
//       }
//    }
//    return inner
// }
// const word=outer();
// console.log(word());
// console.log(word());
// console.log(word());
// console.log(word());
// console.log(word());
// console.log(word());

// 1)
// function maxMin(arr){
//    const max=Math.max(...arr);
//    const min=Math.min(...arr);
//    console.log(max,min)
//    return {max,min}
// }
// console.log(maxMin([1,2,3]));

// 2)
// function sumNumber(number){
//    let str=`${number}`;
//    if (str.length===1){
//       return +str
//    }
//    else{
//       return +str[0]+sumNumber(str.slice(1))
//    } 
// }
// console.log(sumNumber(1574));

// 3) 
// class Dictionary{
//    constructor(name) {
//       this.name=name,
//       this.words={}
//    }
//    add(word,descrition){
//       if (!this.words[word]){
//         this.words[word]={word,descrition}
//       }
      
//    }
//    remove(word){
//       delete this.words[word]
//    }
//    get(word){
//       return this.words[word]
//    }
//    showAllWords(){
//       Object.values(this.words).forEach((worditem=>console.log(`${worditem.word} - ${worditem.descrition}`)))

//    }
// }

// const dictionary = new Dictionary('Толковый словарь');
// dictionary.add('JavaScript', 'популярный язык программирования');
// console.log(dictionary)
// dictionary.add('Веб-разработчик', 'Человек, который создает новые сервисы и сайты или поддерживает и дополняет существующие');
// console.log(dictionary)
// dictionary.remove('JavaScript');
// dictionary.showAllWords();

// 4)

const student={
   stack:['HTML'],
   level:1,
   improveLevel(){
      this.level+=1;
      if (this.level===2){
         this.stack.push('CSS')
      }
      else if (this.level===3){
         this.stack.push('JavaScript')
      }
      else if (this.level===4){
         this.stack.push('React')
      }
      else if (this.level===5){
         this.stack.push('NodeJS');
      }
      else{
         console.log('Студент выучил все технологии!');
         console.log(this);
      }
      return this

   }

}
student
.improveLevel()
.improveLevel()
.improveLevel()
.improveLevel()
.improveLevel()