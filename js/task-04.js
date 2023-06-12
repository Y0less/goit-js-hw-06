const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');
const indicator = document.querySelector("#counter > span");
let counter = 0;

// Prettier як на мене це криво форматує, мав би кожен вираз бути лаконічно в один рядок
decrementBtn.addEventListener(
  "click",
  () => (indicator.textContent = counter -= 1)
);

incrementBtn.addEventListener(
  "click",
  () => (indicator.textContent = counter += 1)
);
