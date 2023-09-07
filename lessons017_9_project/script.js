const outputList= document.querySelector('ingr-out');
const ingrids=document.querySelector('.ingredients')

const MAX_INGRIDS_COUNT=2

const order={
    ingredients:[]
}


ingrids.addEventListener('click',(event)=>{
    if(event.target.classList.contains('ingrediens__button')){
        newIngred=event.target.getAttribute('data-ingr');
        if(order.ingredients.length===MAX_INGRIDS_COUNT){
            order.ingredients.shift();
            outputList.removeChild(outputList.getElementsByTagName('li')[0])
        }
        
        order.ingredients.push(newIngred)
        createOrderListItem(newIngred)
       
    }
})

function createOrderListItem(text){
    const orderItem=document.createElement('li');
    orderItem.textContent=text;
    outputList.append(orderItem)
}