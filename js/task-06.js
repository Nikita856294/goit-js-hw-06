const itemRef = document.querySelector("#validation-input");

function validation(event) {
  if (event.currentTarget.value.length === parseInt(itemRef.dataset.length)) {
    event.currentTarget.classList.add("valid");
    event.currentTarget.classList.remove("invalid");
  } else {
    event.currentTarget.classList.add("invalid");
    event.currentTarget.classList.remove("valid");
  }
}

itemRef.addEventListener("blur", validation);
