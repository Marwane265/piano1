const pianoKeys = document.querySelectorAll(".key");

function playSound(newURL) {
  console.log(newURL);
  new Audio(newURL).play();
}

pianoKeys.forEach((pianoKey, i) => {
  const number = i < 9 ? "0" + (i + 1) : i + 1;
  const newURL = "./24-keys/key" + number + ".mp3";
  pianoKey.addEventListener("click", () => playSound(newURL));
});
