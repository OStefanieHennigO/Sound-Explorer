window.addEventListener("keydown", function (e) {
  const audio = document.querySelector(`audio[data-key='${e.keyCode}']`);
  audio.currentTime = 0;
  audio.play();
});

const keybordkey = document.querySelectorAll(".key");

function changeColor(event) {
  const newColor = red;
  event.target.style.backgroundcolor = newColor;
}

keybordkey.forEach(function (element) {
  element.addEventListener("keydown", changeColor);
});
