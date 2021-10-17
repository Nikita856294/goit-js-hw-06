function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const spanRef = document.querySelector(".color");
const buttonRef = document.querySelector(".change-color");
const bodyRef = document.querySelector("body");
buttonRef.addEventListener("click", changeColor);

function changeColor(event) {
  bodyRef.style.backgroundColor = getRandomHexColor();
  spanRef.textContent = getRandomHexColor();
}
