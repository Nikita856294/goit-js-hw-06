const itemRef = document.querySelector("#name-input");
const spanRef = document.querySelector("#name-output");
itemRef.addEventListener("input", function enterName(event) {
  if (event.currentTarget.value === "") {
    spanRef.textContent = "Anonymous";
  } else {
    spanRef.textContent = event.currentTarget.value;
  }
});
