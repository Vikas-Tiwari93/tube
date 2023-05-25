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
  let speed = document.getElementById("speed");
  if (speed.className === "speedV") {
    speed.classList.toggle("speedV");
    speed.classList.toggle("speed");
  }
  let quality = document.getElementById("quality");
  if (quality.className === "qualityV") {
    quality.classList.toggle("qualityV");
    quality.classList.toggle("quality");
  }
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
}
function unmutee() {
  let video = document.getElementById("vid");
  video.volume = 0.5;
  video.muted = false;
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
  durations.innerText =
    Math.floor(video.duration / 60) +
    ":" +
    Math.round((video.duration % 60) * 10);
}, 1000);

setInterval(function current() {
  let video = document.getElementById("vid");
  let currenttime = document.getElementById("currenttime");
  let currenttimemin = Math.floor(video.currentTime / 60);
  let currenttimesec = Math.round(video.currentTime % 60);
  if (currenttimesec < 10) {
    currenttimesec = "0" + currenttimesec;
    currenttime.innerHTML = currenttimemin + ":" + currenttimesec + " / ";
  }
  currenttime.innerHTML = currenttimemin + ":" + currenttimesec + " / ";
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
function qualityin1080() {
  let quality = document.getElementById("quality");
  quality.classList.toggle("quality");
  quality.classList.toggle("qualityV");
  document.getElementById("displayquality").innerHTML = "1080p";
  document.getElementById("qualitychk").removeAttribute("id");
  event.currentTarget.querySelector("img").setAttribute("id", "qualitychk");
  console.log(event.target.querySelector("img"));
  console.log(event.currentTarget.querySelector("img"));
}
function qualityin720() {
  let quality = document.getElementById("quality");
  quality.classList.toggle("quality");
  quality.classList.toggle("qualityV");
  document.getElementById("displayquality").innerHTML = "720p";
  document.getElementById("qualitychk").removeAttribute("id");
  event.target.querySelector("img").setAttribute("id", "qualitychk");
  console.log(event.target.querySelector("img"));
  console.log(event.currentTarget.querySelector("img"));
}
function qualityin480() {
  let quality = document.getElementById("quality");
  quality.classList.toggle("quality");
  quality.classList.toggle("qualityV");
  document.getElementById("displayquality").innerHTML = "480p";
  document.getElementById("qualitychk").removeAttribute("id");
  event.target.querySelector("img").setAttribute("id", "qualitychk");
  console.log(event.target.querySelector("img"));
  console.log(event.currentTarget.querySelector("img"));
}
function qualityin240() {
  let quality = document.getElementById("quality");
  quality.classList.toggle("quality");
  quality.classList.toggle("qualityV");
  document.getElementById("displayquality").innerHTML = "240p";
  document.getElementById("qualitychk").removeAttribute("id");
  event.target.querySelector("img").setAttribute("id", "qualitychk");
  console.log(event.target.querySelector("img"));
  console.log(event.currentTarget.querySelector("img"));
}
function qualityin144() {
  let quality = document.getElementById("quality");
  quality.classList.toggle("quality");
  quality.classList.toggle("qualityV");
  document.getElementById("displayquality").innerHTML = "144p";
  document.getElementById("qualitychk").removeAttribute("id");
  event.target.querySelector("img").setAttribute("id", "qualitychk");
  console.log(event.target.querySelector("img"));
  console.log(event.currentTarget.querySelector("img"));
}
function qualityinauto() {
  let quality = document.getElementById("quality");
  quality.classList.toggle("quality");
  quality.classList.toggle("qualityV");
  document.getElementById("displayquality").innerHTML = "Auto";
  document.getElementById("qualitychk").removeAttribute("id");
  event.target.querySelector("img").setAttribute("id", "qualitychk");
  console.log(event.target.querySelector("img"));
  console.log(event.currentTarget.querySelector("img"));
}

function speedin() {
  let speedlist = document.getElementById("speed");
  speedlist.classList.toggle("speed");
  speedlist.classList.toggle("speedV");
}
function speedin025() {
  let speedlist = document.getElementById("speed");
  speedlist.classList.toggle("speed");
  speedlist.classList.toggle("speedV");
  document.querySelector("video").playbackRate = 0.25;
  document.getElementById("displayspeed").innerHTML = "0.25 X";
  document.getElementById("speedchk").removeAttribute("id");
  event.target.querySelector("img").setAttribute("id", "speedchk");
}
function speedin050() {
  let speedlist = document.getElementById("speed");
  speedlist.classList.toggle("speed");
  speedlist.classList.toggle("speedV");
  document.querySelector("video").playbackRate = 0.5;
  document.getElementById("displayspeed").innerHTML = "0.5 X";
  document.getElementById("speedchk").removeAttribute("id");
  event.target.querySelector("img").setAttribute("id", "speedchk");
}
function speedin075() {
  let speedlist = document.getElementById("speed");
  speedlist.classList.toggle("speed");
  speedlist.classList.toggle("speedV");
  document.querySelector("video").playbackRate = 0.75;
  document.getElementById("displayspeed").innerHTML = "0.75 X";
  document.getElementById("speedchk").removeAttribute("id");
  event.target.querySelector("img").setAttribute("id", "speedchk");
}
function speedin100() {
  let speedlist = document.getElementById("speed");
  speedlist.classList.toggle("speed");
  speedlist.classList.toggle("speedV");
  document.querySelector("video").playbackRate = 1;
  document.getElementById("displayspeed").innerHTML = "Normal";
  document.getElementById("speedchk").removeAttribute("id");
  event.target.querySelector("img").setAttribute("id", "speedchk");
}
function speedin125() {
  let speedlist = document.getElementById("speed");
  speedlist.classList.toggle("speed");
  speedlist.classList.toggle("speedV");
  document.querySelector("video").playbackRate = 1.25;
  document.getElementById("displayspeed").innerHTML = "1.25 X";
  document.getElementById("speedchk").removeAttribute("id");
  event.target.querySelector("img").setAttribute("id", "speedchk");
}
function speedin150() {
  let speedlist = document.getElementById("speed");
  speedlist.classList.toggle("speed");
  speedlist.classList.toggle("speedV");
  document.querySelector("video").playbackRate = 1.5;
  document.getElementById("displayspeed").innerHTML = "1.5 X";
  document.getElementById("speedchk").removeAttribute("id");
  event.target.querySelector("img").setAttribute("id", "speedchk");
}
function speedin175() {
  let speedlist = document.getElementById("speed");
  speedlist.classList.toggle("speed");
  speedlist.classList.toggle("speedV");
  document.querySelector("video").playbackRate = 1.75;
  document.getElementById("displayspeed").innerHTML = "1.75 X";
  document.getElementById("speedchk").removeAttribute("id");
  event.target.querySelector("img").setAttribute("id", "speedchk");
}
function speedin200() {
  let speedlist = document.getElementById("speed");
  speedlist.classList.toggle("speed");
  speedlist.classList.toggle("speedV");
  document.querySelector("video").playbackRate = 2;
  document.getElementById("displayspeed").innerHTML = "2 X";
  document.getElementById("speedchk").removeAttribute("id");
  event.target.querySelector("img").setAttribute("id", "speedchk");
}
function classreset() {
  let speedlist = document.getElementById("speed");
  let quality = document.getElementById("quality");
  let settings = document.getElementById("settingopt");
  let video = document.getElementById("vid");
  let btn = document.getElementById("play");
  if (
    speedlist.className === "speed" &&
    quality.className === "quality" &&
    settings.className === "settingopt"
  ) {
    if (btn.className === "pause") {
      video.pause();
      document.getElementById("play").classList.toggle("pause");
      document.getElementById("play").classList.toggle("play");
    } else {
      video.play();
      document.getElementById("play").classList.toggle("play");
      document.getElementById("play").classList.toggle("pause");
    }
  } else {
    speedlist.className = "speed";
    quality.className = "quality";
    settings.className = "settingopt";
  }
}
function hometheatre() {
  document.getElementById("videobody").style.width = "93vw";
  document.getElementById("rightbody").removeAttribute("margin");
  document.getElementById("rightbody").style.marginTop = "640px";
  document.getElementById("videobody").style.height = "105vh";
  document.getElementById("videoplayersection").style.height = "82%";
}
function homemini() {
  document.getElementById("videobody").style.width = "auto";
  document.getElementById("rightbody").style.margin = "5px";
  document.getElementById("videobody").style.height = "570px";
  document.getElementById("videoplayersection").style.height = "73%";
}
function fullscreen() {
  document.querySelector("video").webkitRequestFullScreen();
}
