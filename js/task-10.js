function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector("#controls>input");
const createBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("button[data-destroy]");
const boxesContainer = document.querySelector("#boxes");

// setting basic styles for boxes container
boxesContainer.style.display = "flex";
boxesContainer.style.flexWrap = "wrap";
boxesContainer.style.gap = "10px";
boxesContainer.style.marginTop = "20px";
boxesContainer.style.alignItems = "center";

createBtn.addEventListener("click", handleCreate);
destroyBtn.addEventListener("click", handleDestroy);

function handleCreate() {
  createBoxes(input.value);
}

// function creates boxes with inline styling
function createBoxes(amount) {
  // clearing container before creating new boxes to prevent overlapping
  boxesContainer.innerHTML = "";

  let divString = "";
  let widthAndHeight;

  for (let i = 0; i < amount; i += 1) {
    widthAndHeight = 30 + i * 10;
    divString += `<div style="width: ${widthAndHeight}px; 
    height: ${widthAndHeight}px; 
    border: 1px solid black;
    background-color: ${getRandomHexColor()};"></div>`;
  }
  boxesContainer.insertAdjacentHTML("afterbegin", divString);
}

function handleDestroy() {
  boxesContainer.innerHTML = "";
}
