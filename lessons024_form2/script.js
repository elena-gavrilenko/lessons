const userName = document.querySelector('.form__name');
const password1 = document.querySelector('.form__password1');
const password2 = document.querySelector('.form__password2');
const email = document.querySelector('.form__email');
const btn = document.querySelector('.form__btn');

const EMAIL_REGEXP =
  /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

btn.addEventListener('click', () => {
  console.log(EMAIL_REGEXP.test(email.value));
  if (!/^[a-z]{3,}$/g.test(userName.value) || userName.value.length === 0) {
    alert('Ошибка в имени');
  } else if (password1.value.length < 6) {
    alert('Ошибка в пароле');
  } else if (password2.value !== password1.value) {
    alert('Пароли не совпадают');
  } else if (!EMAIL_REGEXP.test(email.value)) {
    alert('Неверный email');
  }
});
