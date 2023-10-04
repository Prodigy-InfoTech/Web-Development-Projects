const btnIncrease = document.querySelector('.counter__button--increase');
const btnDecrease = document.querySelector('.counter__button--decrease');
const btnReset = document.querySelector('.counter__button--reset');
const countValue = document.querySelector('.counter__count');

let count = 0;

const increaseCounter = () => {
  count++;
  updateCounter();
};

const decreaseCounter = () => {
  count > 0 ? count-- : 0;
  updateCounter();
};

const resetCounter = () => {
  count = 0;
  updateCounter();
};

const updateCounter = () => {
  countValue.textContent = count;
};

btnIncrease.addEventListener('click', increaseCounter);
btnDecrease.addEventListener('click', decreaseCounter);
btnReset.addEventListener('click', resetCounter);
