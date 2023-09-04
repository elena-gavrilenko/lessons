const slider=document.querySelector('.slider');
const prevButton=document.querySelector('.prev-button');
const nextButton=document.querySelector('.next-button');

const slides=Array.from(slider.querySelectorAll('img'));


const slidesCount=slides.length;
let slideIndex=0;

prevButton.addEventListener('click',showPrevSlide);
nextButton.addEventListener('click',showNextSlide);

function showPrevSlide(){
    slideIndex=slideIndex-1;
    if (slideIndex<0){
        slideIndex=slidesCount-1
    }
    updateSlide();
}


function showNextSlide(){
    slideIndex=slideIndex+1;
    if (slideIndex>=slidesCount){
        slideIndex=0
    }
    updateSlide();
}


function updateSlide(){
slides.forEach((slide,index)=>{
    if (index===slideIndex) {
        slide.style.display='block';
        
    }
    else{
        slide.style.display='none';
    }
})
}