window.addEventListener("keydown", function (e) {
  toggleSound(e);
});

function toggleSound(e) {
  const key =e.key;
  const audio = document.querySelector(`audio[data-key='${key}']`);

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
