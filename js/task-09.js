function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const widgetRef = document.querySelector(".widget");
const spanRef = document.querySelector(".color");
const buttonRef = document.querySelector(".change-color");
buttonRef.querySelector("click", changeColor);

function changeColor(event) {
  event.currentTarget;
}
