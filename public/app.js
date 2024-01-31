document.addEventListener('click', (event) => {
    if (event.target.dataset.type === 'remove') {
        const id = event.target.dataset.id
        console.log('remove ID:', id)
        // event.target.parentNode.remove();
        // верхний хуже, потому что если кнопка будет в div, то удалит див, а не заметку
        // event.target.closest('li').remove();
        remove(id)
            .then(()=>{
                event.target.closest('li').remove();
            })
    }
    if (event.target.dataset.type ==='edit'){
        const id=event.target.dataset.id
        const title=event.target.dataset.title
        const newTitle=prompt('Enter new title', title);
        if(newTitle!==null){
            update({id,title:newTitle})
                .then(()=>{
                    event.target.closest('li').querySelector('span').innerText=newTitle;
                })
        }
    }
})
async function remove(id){
    await fetch(`/${id}`,{method:'DELETE'})
}

async function update(newNote){
    await fetch(`/${newNote.id}`,{
        method:'PUT',
        body: JSON.stringify(newNote),
        headers: {
            'Accept': 'application/json',
            'Content-type':'application/json'
        }
    })
}