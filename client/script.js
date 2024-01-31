fetch('http://localhost:8000/notes')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data)
})