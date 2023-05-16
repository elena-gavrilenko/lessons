// как объявляется функция

// 1)function declaration -простое объявление функции

// function greeting(параметр){
//     // тело функции - блок кода, который будет выполняться при вызове функции
//     console.log('Hello from function')
// }

// greeting(аргумент)

// function greeting(text){
//     // тело функции - блок кода, который будет выполняться при вызове функции
//     console.log(`${text} from function`)
// }

// greeting('Hi');
// greeting('Hello');
// greeting('Good morning');
// greeting('Приветик');


// function sum(a,b){
//     const result=a+b;
//     // console.log(result);
//     return result;
// }
// //  все что находится после return в функции НЕ РАБОТАЕТ, поэтому return пишут перед закрывающейся скобкой
// const resultFunc=sum(2,6);
// console.log(resultFunc);


// fanction decaration можно вывать до объявления
// -------------------------------------------------


// 2)function Expression функциональное выражение

// функции анонимные
// const func=function(test){
//     console.log(test);
//     console.log('Hello from func expression');
// }
// func('Hi');

// function Expression можно вызвать только после объявления
// -------------------------------------------------------------


// параметры функции доступны только внутри функции

// функция это объект, при typeof выводит function

// функция это объект первого класса:
// - функции можно присваивать переменным
// - функции можно передавать как аргумент функции
// - функции можно возвращать из других функций



// let a=5;
// let b=10
// function sum(a,b){
//         // const result=a+b;
//         a+=10
//         console.log(a+b);
//         console.log(arguments);//псевдомассив у него нет методов массива. Есть только индексы и длина. По длине arguments можно проверять количество переданных параметров и обращаться к ним по индексам.
        // return result;
        // внешнюю переменную а не трогает, а изменяет внутреннюю
    // }

    // sum(a,b)
// console.log(a);//выведет 5


// дефолтные параметры пишутся:
// function sum(a=0,b=0){}
// в старых версиях это не поддерживается и задается внутри функции
// let a==a||0




// 3) Arrow Function
// если аргумент один, можно писать без скобок
// если return в одну строку можно убрать фигурные скобки
// const func1=()=>{
//     console.log('Hello from Arrow Function');
// }

// func1();



// task
// 1)
// function checkNumber(str){
//    let isNumber=Number(str)
//    return (!!isNumber)?true:false;
// }

// console.log(checkNumber('123ff'))

// 2)
// function getEverageBall(ball1,ball2,ball3,ball4){
//     return (ball1+ball2+ball3+ball4)/4;
// }
// console.log(getEverageBall(4,7,2,9));

// 3)
// function win(w,f){
//     return `побед ${w/(w+f)*100}%, поражений ${f/(w+f)*100}%`
// }
// console.log(win(4,6))

// 4)
function getSumOfNumbers(number,type){
    let sum=0;
    if(type=='odd'){
        for(let i=0; i<=number;i++){
            i%2!==0?sum+=i:sum;
        }
        
    }
    else if(type=='even'){
        for(let i=0; i<=number;i++){
            i%2==0?sum+=i:sum;
        }
    }
    else{
        for(let i=0; i<=number;i++){
            sum+=i;
        }
        
    }
    return sum;
}
console.log(getSumOfNumbers(10,'odd'));
console.log(getSumOfNumbers(10,'even'));
console.log(getSumOfNumbers(10,''));