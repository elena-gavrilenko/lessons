// 1)
// const randomNumber = document.querySelector('.randomNumber');
// const btn = document.querySelector('.btn');

// btn.addEventListener(
//   'click',
//   () => (randomNumber.textContent = Math.floor(Math.random() * (100 + 1)))
// );

// 2)
// const container = document.querySelector('.container');
// const board = document.createElement('div');
// container.append(board);
// const screenWidth = window.innerWidth;
// const screenHeight = window.innerHeight;

// function showBoard(offsetX, offsetY) {
//   board.classList.add('show');
//   if (offsetX > screenWidth / 2 && offsetY > screenHeight / 2) {
//     board.style.setProperty('--letterX', offsetX - 140 + 'px');
//     board.style.setProperty('--letterY', offsetY - 50 + 'px');
//   }
//   if (offsetX > screenWidth / 2 && offsetY < screenHeight / 2) {
//     board.style.setProperty('--letterX', offsetX - 140 + 'px');
//     board.style.setProperty('--letterY', offsetY + 20 + 'px');
//   }
//   if (offsetX < screenWidth / 2 && offsetY > screenHeight / 2) {
//     board.style.setProperty('--letterX', offsetX + 20 + 'px');
//     board.style.setProperty('--letterY', offsetY - 50 + 'px');
//   }
//   if (offsetX < screenWidth / 2 && offsetY < screenHeight / 2) {
//     board.style.setProperty('--letterX', offsetX + 20 + 'px');
//     board.style.setProperty('--letterY', offsetY + 20 + 'px');
//   }
// }
// container.addEventListener('mousemove', (event) => {
//   showBoard(event.offsetX, event.offsetY);
//   board.textContent = `x: ${event.offsetX}, y: ${event.offsetY}`;
// });

// container.addEventListener('click', (event) => {
//   showBoard(event.offsetX, event.offsetY);
//   board.textContent = `нажата левая`;
// });
// container.addEventListener('contextmenu', (event) => {
//   showBoard(event.offsetX, event.offsetY);
//   board.textContent = `нажата правая`;
// });

// 3)
// const button = document.querySelector('.button');
// const text = document.querySelector('.text');

// button.addEventListener('click', () => {
//   text.classList.toggle('text_show');
// });
