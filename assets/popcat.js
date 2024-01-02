const cat = document.getElementById("cat");
const score = document.getElementById("score");
let sc = 0;

function onCatMouseDown() {
  cat.src = "./assets/img/waaaa.png";

  const audio = new Audio("./assets/pop.mp3");
  audio.play();

  sc += 1;
  score.innerText = sc;
}

function onCatMouseUp() {
  cat.src = "./assets/img/normal.png";
}

cat.addEventListener("mousedown", onCatMouseDown);
cat.addEventListener("mouseup", onCatMouseUp);
