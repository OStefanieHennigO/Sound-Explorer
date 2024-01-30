window.addEventListener("keydown", function (e) {
  toggleSound(e.keyCode);
});

function toggleSound(keyCode) {
  const audio = document.querySelector(`audio[data-key='${keyCode}']`);

  if (audio) {
    if (audio.paused) {
      audio.currentTime = 0;
      audio.play();
    } else {
      audio.pause();
      audio.currentTime = 0;
    }
  }
}

const keybordkey = document.querySelectorAll(".key");

function changeColor(event) {
  const newColor = red;
  event.target.style.backgroundcolor = newColor;
}

keybordkey.forEach(function (element) {
  element.addEventListener("keydown", changeColor);
});
