const slider = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

//here setting default text font size according to slider to prevent text size jumping on first slider movement
text.style.fontSize = slider.value + "px";

function changeFont(event) {
  text.style.fontSize = event.currentTarget.value + "px";
}

slider.addEventListener("input", changeFont);
