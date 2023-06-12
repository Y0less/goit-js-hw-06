const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

function changeOutputName(event) {
  nameOutput.textContent = event.currentTarget.value.trim();
  if (!event.currentTarget.value) {
    nameOutput.textContent = "Anonymous";
  }
}

nameInput.addEventListener("input", changeOutputName);
