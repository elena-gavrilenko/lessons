const numbers=[2,5,9,4,7,5];


// with()- создание массива с заменой элемента
// const newArray=numbers.with(1,10);//индекс заменяемого элемента и на что менять
// console.log('ИСХОДНЫЙ', numbers);
// console.log('новый', newArray);


// numbers.sort()


// toSorted() создает отсортированный массив не меняя исходный
// const toSorted=numbers.toSorted();
// console.log(toSorted);


// toReversed() создает перевернутый массив не меняя исходный
// const reversedArr=numbers.toReversed();
// console.log(reversedArr);
// console.log(numbers);


// toSpliced(1,0,10)-создает массив с добавленным элементом не меняя исходный
const spliceArray=numbers.toSpliced(1,0,10)
console.log(spliceArray);
console.log(numbers);