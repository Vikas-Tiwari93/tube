function playpause() {
  let playbtn = document.getElementById("play");
  playbtn.classList.toggle("play");
  playbtn.classList.toggle("pause");
}
function sound() {
  let sound = document.getElementById("volumeon");
  sound.classList.toggle("pause");
  sound.classList.toggle("play");
}
function set() {
  let settings = document.getElementById("settingopt");
  settings.classList.toggle("settingoptV");
  settings.classList.toggle("settingopt");
  console.log("vikas");
}
function playy() {
  let video = document.getElementById("vid");
  video.play();
}
function pausee() {
  let video = document.getElementById("vid");
  video.pause();
}
function reload() {
  let video = document.getElementById("vid");
  video.src =
    "./assets/video/THe Art of Living - Surya Namaskar-Part 1 for beginners - YouTube.mp4";
  video.src =
    "./assets/video/THe Art of Living - Surya Namaskar-Part 1 for beginners - YouTube.mp4";

  video.load();
}

function mutee() {
  let video = document.getElementById("vid");
  video.volume = 0;
  video.muted = false;
}
function unmutee() {
  let video = document.getElementById("vid");
  video.volume = 0.5;
}
function soundval() {
  let soundval = document.getElementById("progressin").value;
  let video2 = document.getElementById("vid");
  video2.volume = soundval / 100;
}
let video = document.getElementById("vid");
video.muted = true;
video.autoplay = true;

setTimeout(function duration() {
  let video = document.getElementById("vid");
  let durations = document.getElementById("duration");
  durations.innerHTML =
    Math.floor(video.duration / 60) +
    ":" +
    Math.round((video.duration % 60) * 10);
}, 1000);

setInterval(function current() {
  let video = document.getElementById("vid");
  let currenttime = document.getElementById("currenttime");
  currenttime.innerHTML =
    Math.floor(video.currentTime / 60) +
    ":" +
    Math.round(video.currentTime % 60) +
    "/";
}, 1000);
setInterval(function mainrange() {
  let mainrange = document.getElementById("mainrange");
  let video = document.getElementById("vid");
  mainrange.max = video.duration;
  mainrange.value = video.currentTime;
}, 1000);
function clickprogress() {
  let mainrange = document.getElementById("mainrange");
  let video = document.getElementById("vid");
  video.currentTime = mainrange.value;
}
function speed() {
  let speedlist = document.getElementById("speed");
  let settings = document.getElementById("settingopt");
  speedlist.classList.toggle("speedV");
  speedlist.classList.toggle("speed");
  settings.classList.toggle("settingopt");
  settings.classList.toggle("settingoptV");
}
function quality() {
  let quality = document.getElementById("quality");
  let settings = document.getElementById("settingopt");
  quality.classList.toggle("qualityV");
  quality.classList.toggle("quality");
  settings.classList.toggle("settingopt");
  settings.classList.toggle("settingoptV");
}
function qualityin() {
  let quality = document.getElementById("quality");
  quality.classList.toggle("quality");
  quality.classList.toggle("qualityV");
}
function speedin() {
  let speedlist = document.getElementById("speed");
  speedlist.classList.toggle("speed");
  speedlist.classList.toggle("speedV");
}

function loop() {
  let video = document.getElementsByTagName("video");
  let loop = document.getElementById("loop");
  if (video.loop == "true") {
    video[0].removeAttribute("loop");
    loop.style.backgroundColor = "white";
  }
  video[0].setAttribute("loop", "true");
}
