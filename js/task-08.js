const formRef = document.querySelector(".login-form");

formRef.addEventListener("submit", formOption);

function formOption(event) {
  event.preventDefault();
  const formData = {};
  const {
    elements: { email, password },
  } = event.currentTarget;
  if (email.value === "" || password.value === "") {
    alert("Все поля должны быть заполнены!");
    return;
  }
  const formValue = new FormData(this);
  formValue.forEach((value, name) => {
    formData[name] = value;
  });
  console.log(formData);
  formRef.reset();
  return;
}
