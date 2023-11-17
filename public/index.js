const burgerEl = document.querySelector('#burger');
const menuEl = document.querySelector('#menu');

burgerEl.addEventListener('click', () => {
  menuEl.classList.toggle('hidden');
});
