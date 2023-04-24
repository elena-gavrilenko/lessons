const age=20;
console.log(`age: ${age}, type: ${typeof age}`);

const str='Hellow, world';
console.log(`str: ${str}, type: ${typeof str}`);

const b=true;
console.log(`b: ${b}, type: ${typeof b}`);

const num=12345n;
console.log(`snum: ${num}, type: ${typeof num}`);

const  obj={name: 'Helen',
            surname: "Gavrilenko"};
console.log(`obj: ${obj}, type: ${typeof obj}`);            

let a;
console.log(`a: ${a}, type: ${typeof a}`);

const c=null;
console.log(`c: ${c}, type: ${typeof c}`);



const clientName='Игорь';
let clientSpentForAllTime=110;
let discount;

let clientSpentToday=25;

clientSpentForAllTime+=clientSpentToday;
if (clientSpentForAllTime>100 && clientSpentForAllTime<=300){
    discount=10;
    alert(`Спасибо, ${clientName}! К оплате ${clientSpentToday-clientSpentToday/100*discount}.
За все время в нашем ресторане вы потратили ${clientSpentForAllTime}.`);
} else if (clientSpentForAllTime>300 && clientSpentForAllTime<=500){
    discount=20;
    alert(`Спасибо, ${clientName}! К оплате ${clientSpentToday-clientSpentToday/100*discount}.
    За все время в нашем ресторане вы потратили ${clientSpentForAllTime}.`);
} else if (clientSpentForAllTime>500){   
    discount=30;
}
