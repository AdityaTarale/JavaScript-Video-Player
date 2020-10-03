const video = document.querySelector("#video");
const play = document.querySelector("#play");
const duration = document.querySelector("#duration");
const timestamp = document.querySelector("#timestamp");
const progress = document.querySelector("#progress");
const skipForward = document.querySelector("#skip-forward");
const skipBackward = document.querySelector("#skip-Backward");

//to play & pause video clip
const togglePlayClass = (e) => {
  if (video.paused) {
    video.play();
  } else if (video.play) {
    video.pause();
  }
};

//to change icon of play & pause
const changeIcon = () => {
  if (video.paused) {
    play.innerHTML = `<i class="fa fa-pause-circle fa-2x"></i>`;
  } else if (video.play) {
    play.innerHTML = `<i class="fa fa-play-circle fa-2x"></i>`;
  }
};

//updating video progress bar & timestamp
const updateProgress = () => {
  progress.value = (video.currentTime / video.duration) * 100;
  duration.innerHTML = `0` + Math.floor(video.duration) / 100;

  let min = Math.floor(video.currentTime / 100);
  if (min < 10) {
    min = "0" + String(min);
  }
  let sec = Math.floor(video.currentTime % 100);
  if (sec < 10) {
    sec = "0" + String(sec);
  }

  timestamp.textContent = `${min}:${sec}`;
  console.log(video.currentTime);
};

//to change video time when progress bar changes
const setProgressBar = () => {
  video.currentTime = (+progress.value * video.duration) / 100;
};

//forwarding video
const Forward = () => {
  video.currentTime = video.currentTime + 5;
};

//backwarding video
const Backward = () => {
  video.currentTime = video.currentTime - 5;
};

//events
video.addEventListener("click", togglePlayClass);
play.addEventListener("click", togglePlayClass);
video.addEventListener("pause", changeIcon);
video.addEventListener("play", changeIcon);
video.addEventListener("timeupdate", updateProgress);
progress.addEventListener("change", setProgressBar);
skipForward.addEventListener("click", Forward);
skipBackward.addEventListener("click", Backward);


// event on spacebar , right arrow & left arrow key 
window.addEventListener("keydown", (e) => {
  if (e.keyCode === 32) {
    togglePlayClass();
  }
});
window.addEventListener("keydown", (e) => {
  if (e.keyCode === 39) {
    Forward();
  }
});
window.addEventListener("keydown", (e) => {
  if (e.keyCode === 37) {
    Backward();
  }
});
