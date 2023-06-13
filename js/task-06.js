const textInput = document.querySelector("#validation-input");

function validateInput(event) {
  if (textInput.classList.contains("valid")) {
    textInput.classList.remove("valid");
  }
  if (textInput.classList.contains("invalid")) {
    textInput.classList.remove("invalid");
  }
  textInput.value.length === Number(event.currentTarget.dataset.length)
    ? textInput.classList.add("valid")
    : textInput.classList.add("invalid");
}

textInput.addEventListener("blur", validateInput);
