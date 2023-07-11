const counter=document.querySelector('.counter');
const dec=document.querySelector('.dec');
const reset=document.querySelector('.reset');
const inc=document.querySelector('.inc');
const btns=document.querySelectorAll('.btn');

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
    }
}


dec.addEventListener('click',function(){
    counter.textContent--;
    checkColor();
})

inc.addEventListener('click',function(){
    counter.textContent++;
    checkColor();
})
reset.addEventListener('click',function(){
    counter.textContent=0;
    checkColor()
})
btns.forEach(btn=>btn.addEventListener('mouseover',function(){
    btn.style.backgroundColor='#3d1b07';
    btn.style.color='#fff';
    btn.style.transitionDuration='0.5s'
}))
btns.forEach(btn=>btn.addEventListener('mouseout',function(){
    btn.style.backgroundColor='#fff';
    btn.style.color='#000';
    btn.style.transitionDuration='0.5s'
}))