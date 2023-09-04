const start=document.querySelector('#start');
const screens=document.querySelectorAll('.screen');
const timeList=document.querySelector('#time-list');
const timeEl=document.querySelector('#time');
const board=document.querySelector('#board');
const difList=document.querySelector('#dif-list');
const restartBtn=document.querySelector('#restart')

let time=0;
let score=0;
let dif;
let intervalID;
let minCircleSize;
let maxCircleSize;
let missClicks=0;


const COLORS=['#15cdb8','#8dcd15','#154fcd','#cd1590','#cd8d15','#cd1515'];

start.addEventListener('click',(event)=>{
    event.preventDefault();
    screens[0].classList.add('up');
})

difList.addEventListener('click',(event)=>{
    if (event.target.classList.contains('dif-btn')){
        dif=event.target.getAttribute('data-dif')
         screens[1].classList.add('up');
    }
})

timeList.addEventListener('click',(event)=>{
    if (event.target.classList.contains('time-btn')){
        time=parseInt(event.target.getAttribute('data-time'))
        screens[2].classList.add('up');
        startGame()
    }
})



board.addEventListener('click',(event)=>{
   if (event.target.classList.contains('circle')){
    score++;
    event.target.remove();
    createRandomCircle()
   } else {
    missClicks++;
   }
})

restartBtn.addEventListener('click',()=>{
    score=0;
    missClicks=0;
    screens.forEach(el=>el.classList.remove('up'));
    timeEl.parentNode.classList.remove('hide');
    board.innerHTML='';
    restartBtn.classList.add('hide');
})
function startGame(){
    if (dif==='easy'){
        minCircleSize=40;
        maxCircleSize=60;
    } else if (dif==='standart'){
        minCircleSize=20;
        maxCircleSize=40;
    } else{
        minCircleSize=10;
        maxCircleSize=20;
    }
    intervalID=setInterval(gecreasTime,1000)
    createRandomCircle();
    setTime(time);
}

function gecreasTime(){
    if(time===0){
        finishGame();
   }
    else{
        let current=--time;
        if (current<10){
            current=`0${current}`;
        }
        setTime(current);
    }
}

function setTime(value){
    timeEl.innerHTML=`00:${value}`
}

function finishGame(){
    timeEl.parentNode.classList.add('hide');
    board.innerHTML=`<h2><span class="primary">Счет: </span>${score}</h2>
    <h2><span class="miss">Мимо </span>${missClicks}</h2>
    <h2><span class="primary">Точность: </span>${(score/(score+missClicks)*100).toFixed(2)}%</h2>`
    clearInterval(intervalID);
    restartBtn.classList.remove('hide');
}

function createRandomCircle(){
    const circle=document.createElement('div');
    const size=getRandomNumber(minCircleSize,maxCircleSize);
    const {width, height}= board.getBoundingClientRect();
    const posX=getRandomNumber(0,width-size);
    const posY=getRandomNumber(0,height-size);
    const circleColor=getRandomColor();
    circle.classList.add('circle');
    circle.style.backgroundColor=circleColor;
    circle.style.width=`${size}px`;
    circle.style.height=`${size}px`;
    circle.style.left=`${posX}px`;
    circle.style.top=`${posY}px`;
    board.append(circle);
}


function getRandomColor(){
    return COLORS[Math.floor(Math.random()*COLORS.length)]
}

function getRandomNumber (min,max){
    return Math.round(Math.random()*(max-min)+min)
}

// function WINNER(){
//     function circleKiler(){
//         const circle=document.querySelector('.circle');
//         if (circle){
//             circle.click();
//         }
//     }
//     setInterval(circleKiler,100)
// }
// WINNER()

