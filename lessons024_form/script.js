const btn_add=document.getElementsByClassName('btn')[0];
const btn_get=document.getElementsByClassName('btn')[1];


const userName=document.querySelector('.user_name');
const firstName=document.querySelector('.first_name');
const lastName=document.querySelector('.last_name');
const userEmail=document.querySelector('.user_email');
const userPassword=document.querySelector('.user_password');
const userPhone=document.querySelector('.user_phone');


// btn_add.addEventListener('click',()=>{
//     console.log(userName.value);
//     console.log(firstName.value);
//     console.log(lastName.value);
//     console.log(userEmail.value);
//     console.log(userPassword.value);
//     console.log(userPhone.value);
// })

btn_add.addEventListener('click',()=>{
    fetch('https://petstore.swagger.io/v2/user',{
        method:'POST',
        body: JSON.stringify({
            id: 1,
            username: `${userName.value}`,
            irstName: `${firstName.value}`,
            lastName: `${lastName.value}`,
            email: `${userEmail.value}`,
            password: `${userPassword.value}`,
            phone: `${userPhone.value}`,
            userStatus: 0
          }),
          headers:{
            "accept": "application/json",
            "Content-type":"application/json"
          }
    })
    .then((response)=>{
        return response.json()})
    .then((data)=>{
        console.log(data)
    })
    .catch((error)=>{
        console.log(error)
    })
})

btn_get.addEventListener('click',()=>{
   fetch('https://petstore.swagger.io/v2/user/'+`${userName.value}`,{
    method:"GET",
    headers:{
        "accept": "application/json",
        "Content-type":"application/json"
    }
   }) 
   .then((resp)=> {
    return resp.json()})
    .then((data)=>{
        console.log(data)
    })
    .catch((error)=>{
        console.log(error)
    })
})