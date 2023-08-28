const form=document.querySelector('.form')
const userNameInput = document.querySelector('.form__name');
const password1 = document.querySelector('.form__password1');
const password2 = document.querySelector('.form__password2');
const emailInput = document.querySelector('.form__email');
const btn = document.querySelector('.form__btn');

const EMAIL_REGEXP =
  /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;


  form.addEventListener('submit',(event)=>{
  event.preventDefault();
})

// // все паттрены лучше вынести в отдельный объект
// const PASSWORD_PATTERN=/^[a-z0-9]{6,16}$/i;

// function varifyUserName(){
//   const userName=userNameInput.value
//   return /[a-z]/i.test(userName);
// }

// function verifyPass1(){
//   const pass1=password1.value;
//   return PASSWORD_PATTERN.test(pass1);
// }

// function verifyPass2(){
//   const pass2=password1.value;
//   return PASSWORD_PATTERN.test(pass2);
// }

// function varifyPasswords(){
//   return password1.value=password2.value
// }

// function varifyEmail(){
//   const email=emailInput.value;
//   return EMAIL_REGEXP.email.test(email)
// }

// function varifyForm(){
//   if (!varifyUserName()){
//     console.log('Enter correcet name')
//   }
//   else if(!(verifyPass1() && verifyPass2)){
//     console.log('Enter correct password')
//   }
//   else if(!varifyPasswords()){
//     console.log('Paasword not the same');
//   }
//   else if(!varifyEmail()){
//     console.log('Enter correct emai')
//   }
//   else {
//     console.log('OK!')
//     form.submit
//   }
// }
// btn.addEventListener('click', varifyForm)

btn.addEventListener('click', () => {
  if (!/^[a-z]{3,}$/g.test(userNameInput.value) || userNameInput.value.length === 0) {
    alert('Ошибка в имени');
  } else if (password1.value.length < 6) {
    alert('Ошибка в пароле');
  } else if (password2.value !== password1.value) {
    alert('Пароли не совпадают');
  } else if (!EMAIL_REGEXP.test(emailInput.value)) {
    alert('Неверный email');
  }
  else {
    console.log('ok')
    form.submit}
});
