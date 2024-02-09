var x = document.getElementById("pronunciation");
var pronounceButton = document.getElementById("pronounce");

function playAudio() {
  x.play();
}

function pauseAudio() {
  x.pause();
}

pronounceButton.onclick(playAudio());