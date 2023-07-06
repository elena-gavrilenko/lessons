const board=document.querySelector('#board');

const SQUARES_NUMBER=900;

const COLORS=['#4b5f49','#A0C49D','#C4D7B2','#E1ECC8','#F7FFE5','#f5f7f2'];

for(let i=0; i<=SQUARES_NUMBER;i++){
    const square=document.createElement('div');
    square.classList.add('square');
        
    square.addEventListener('mouseover',setColor);
    square.addEventListener('mouseleave',removeColor);

    board.append(square);
}
 function setColor(event){
    const element = event.target;
    const color=getRandomColor();
    element.style.backgroundColor=color;
    element.style.boxShadow=`0 0 2px ${color},0 0 10px ${color}`
 }

 function removeColor(event){
    const element = event.target;
    element.style.backgroundColor=`#0b0a0a`;
    element.style.boxShadow=`0 0 2px #000`
 }


 function getRandomColor(){
    const index=Math.floor(Math.random()*COLORS.length);
    return COLORS[index]
 }
