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
