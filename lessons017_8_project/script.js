const words=['apple','renault','spider','academy'];
const gameWord=document.querySelector('.game__word');
const btn= document.querySelector('.game__button');
const input=document.querySelector('.game__input')
const imageWrapper=document.getElementsByClassName('game__img')[0]

let secretWord=getRandomWord();
console.log(secretWord);
let counter=1;
let countOf_=secretWord.length;

function getRandomWord(){
    let randomword=words[Math.floor(Math.random()*words.length)];
    return randomword.split('')
}

createSpan();

function createSpan(){
    for(let i=0; i<secretWord.length;i++){
    const span=document.createElement('span');
    span.innerHTML='_';
   gameWord.append(span)
}

}
 function clearInput(){
    input.value='';
    input.focus();
 }
btn.addEventListener('click',btnHandler)

function 

function btnHandler(){
    const spans=gameWord.children
    const userLetter=input.value;
    if (secretWord.includes(userLetter)){
        secretWord.forEach((letter,i)=>{
            if (letter.toLocaleLowerCase()===userLetter.toLocaleLowerCase()){
                spans[i].textContent=userLetter;
                --countOf_
            }
            
        })
        if (countOf_==0){
            document.body.style.backgroundColor='green';
        }
    } else {
        counter++;
        imageWrapper.children[0].src=`./img/${counter}.png`;
        if (counter==6){
            document.body.style.backgroundColor='red';
            input.style.opacity=0;
            btn.style.opacity=0
        }
       
    }
    clearInput()
}