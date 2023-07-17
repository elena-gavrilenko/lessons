const counter=document.querySelector('.counter');
const dec=document.querySelector('.dec');
const reset=document.querySelector('.reset');
const inc=document.querySelector('.inc');
const btns=document.querySelectorAll('.btn');


// let number=0;
// counter.textContent=number;
function checkColor(){
    if(counter.textContent>0){
        counter.classList.add('green');
    }
    else if(counter.textContent<0){
        counter.classList.add('blue');
    }
    else {
        counter.classList.remove('blue');
        counter.classList.remove('green');
        // if (counter.classist.contains('blue)){
            // counter.classList.remove('blue');
    // }
    // } else{
    //     counter.classList.remove('green');
    // }
        
    }
}
// сделать через делегирование
dec.addEventListener('click',()=>{
    counter.textContent--;
    checkColor();
})

inc.addEventListener('click',()=>{
    counter.textContent++;
    checkColor();
})
reset.addEventListener('click',()=>{
    counter.textContent=0;
    checkColor();
})
// или просто положиьт кнопки в массив(если не обращаться к продителю)
// или чере класслист
btns.forEach(btn=>btn.addEventListener('mouseover',()=>{
    btn.style.backgroundColor='#3d1b07';
    btn.style.color='#fff';
    btn.style.border='1px solid #fff';
    btn.style.transitionDuration='0.5s'
}))
btns.forEach(btn=>btn.addEventListener('mouseleave',()=>{
    btn.style.backgroundColor='#fff';
    btn.style.color='#000';
    btn.style.transitionDuration='0.5s'
}))