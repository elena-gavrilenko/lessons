function sliderPlugin(activeSlide=2){
    const slides=document.querySelectorAll('.slide');
    slides[activeSlide].classList.add('active')


function clearActiveClass(){
    slides.forEach(slide=>slide.classList.remove('active'))
}

for(const slide of slides){
    slide.addEventListener('click',()=>{
        clearActiveClass();
        slide.classList.add('active');
    })
}
}
sliderPlugin()