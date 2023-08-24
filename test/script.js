const btn_add = document.getElementsByClassName('btn')[0]
const btn_get = document.getElementsByClassName('btn')[1]

const userName = document.getElementsByClassName('user_name')[0]
const firstName = document.getElementsByClassName('first_name')[0]
const lastName = document.getElementsByClassName('last_name')[0]
const userEmail = document.getElementsByClassName('user_email')[0]
const userPassword = document.getElementsByClassName('user_password')[0]
const userPhone = document.getElementsByClassName('user_phone')[0]


// btn_add.addEventListener('click', () => {
//     console.log(userName.value);
//     console.log(firstName.value);
//     console.log(lastName.value);
//     console.log(userEmail.value);
//     console.log(userPassword.value);
//     console.log(userPhone.value);
// })


btn_add.addEventListener('click', () => {
    fetch('https://petstore.swagger.io/v2/user', {
        method: 'POST',
        body: JSON.stringify({
            id: 1,
            username: `${userName.value}`,
            firstName: `${firstName.value}`,
            lastName: `${lastName.value}`,
            email: `${userEmail.value}`,
            password: `${userPassword.value}`,
            phone: `${userPhone.value}`,
            userStatus: 0
        }),
        headers: {
            "accept": "application/json",
            "Content-type": "application/json"
        }
    })
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        console.log(data)
    })
    .catch((error) => {
        console.log(error)
    })
})

btn_get.addEventListener('click', () => {
    fetch('https://petstore.swagger.io/v2/user/'+`${userName.value}`, {
        method: 'GET',
        headers: {
            "accept": "application/json",
            "Content-type": "application/json"
        }
    })
    .then((resp) => resp.json())
    .then((data) => {
        console.log(data)
    })
    .catch((error) => {
        console.log(error)
    })
})