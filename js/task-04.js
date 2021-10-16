let counterValue = 0;
const counterRef = document.querySelector("#counter");
const counterValueRef = document.querySelector("#value");
const decrementRef = document.querySelector("button[data-action='decrement']");
const incrementRef = document.querySelector("button[data-action='increment']");
const increm = () => {
  counterValue += 1;
  counterValueRef.textContent = counterValue;
};
const decrem = () => {
  counterValue -= 1;
  counterValueRef.textContent = counterValue;
};
incrementRef.addEventListener("click", increm);
decrementRef.addEventListener("click", decrem);
