/* Guarda en memoria el contenido de cada uno de los elementos en el dom */
const $video = document.querySelector("#video");
const $play = document.querySelector("#play");
const $player = document.querySelector(".player");
const $playerActions = document.querySelector(".player-actions");
const $playerProgress = document.querySelector(".player-progress");
const $pause = document.querySelector("#pause");
const $backward = document.querySelector("#backward");
const $forward = document.querySelector("#forward");
const $fullscreen = document.querySelector("#fullscreen");

/* Accdemos al metodo de escucha para poder realizar la accion del click */
$play.addEventListener("click", handlePlay);
$player.addEventListener("mousemove", handleMouseMove);
$fullscreen.addEventListener("click", handleFullscreen);

function handleFullscreen() {
  if ($video.requestFullscreen) {
    $video.requestFullscreen();
  } else if ($video.mozRequestFullScreen) {
    $video.mozRequestFullScreen();
  } else if ($video.webkitRequestFullscreen) {
    $video.webkitRequestFullscreen();
  } else if ($video.msRequestFullscreen) {
    $video.msRequestFullscreen();
  }
}

/* Realizas las acciones del evento click pasandose como paramentro al metodo */
function handlePlay() {
  $video.play();
  $play.hidden = true;
  $pause.hidden = false;
  console.log("le di click al boton de play");
}

$pause.addEventListener("click", handlePause);

function handlePause() {
  $video.pause();
  $play.hidden = false;
  $pause.hidden = true;
  console.log("Le di click al boton de pausa");
}

$backward.addEventListener("click", handleBackward);

function handleBackward() {
  $video.currentTime -= 10;
  console.log("Atrase 10 segundos", $video.currentTime);
}

$forward.addEventListener("click", handleForward);

function handleForward() {
  $video.currentTime += 10;
  console.log("Adelante 10 segundos", $video.currentTime);
}
const $progress = document.querySelector("#progress");
$video.addEventListener("loadedmetadata", handleLoaded);
$video.addEventListener("timeupdate", handleTimeUpdate);

function handleLoaded() {
  $progress.max = $video.duration;
  $video.duration;
  console.log("a cargado mi video");
}

function handleTimeUpdate() {
  $progress.value = $video.currentTime;
  console.log("Tiempo actual", $video.currentTime);
}

$progress.addEventListener("input", handleInput);

function handleInput() {
  console.log($progress.value);
  $video.currentTime = $progress.value;
}

let timer;

function handleMouseMove() {
  // Mostrar los botones y la barra de reproducción
  $playerActions.style.opacity = 1;
  $playerActions.style.pointerEvents = "auto";
  $playerProgress.style.opacity = 1;
  $playerProgress.style.pointerEvents = "auto";

  // Reiniciar el temporizador
  clearTimeout(timer);

  // Ocultar los botones y la barra de reproducción después de 3 segundos de inactividad
  timer = setTimeout(() => {
    $playerActions.style.opacity = 0;
    $playerActions.style.pointerEvents = "none";
    $playerProgress.style.opacity = 0;
    $playerProgress.style.pointerEvents = "none";
  }, 2000);
}
