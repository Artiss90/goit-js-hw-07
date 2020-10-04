const counterValueRef = document.querySelector('#value');
// console.log(Number(counterValueRef.textContent));

const btnDecrementRef = document.querySelector(
  'button[data-action="decrement"]',
);
const btnIncrementRef = document.querySelector(
  'button[data-action="increment"]',
);

const decrement = () =>
  (counterValueRef.textContent = Number(counterValueRef.textContent) - 1);
const increment = () =>
  (counterValueRef.textContent = Number(counterValueRef.textContent) + 1);

btnDecrementRef.addEventListener('click', decrement);
btnIncrementRef.addEventListener('click', increment);
console.log(counterValueRef);
console.log(Number(counterValueRef.textContent));
