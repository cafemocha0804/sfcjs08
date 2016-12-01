function play(){
  let player = document.querySelector("audio");
  player.play();
}

function pause(){
  let player = document.querySelector("audio");
  player.pause();
}

function rewind(sec){
  let player = document.querySelector("audio");
  player.currentTime = player.currentTime - sec;
  return sec;
}

function fastForward(sec){
  let player = document.querySelector("audio");
  player.currentTime = player.currentTime + sec;
  return sec;
}

function updateVolume(){
    let slider = document.querySelector("#volume");
    let value = slider.value;
    let player = document.querySelector("audio");
    player.volume = value;    
}

function configureSeekBar(){
    let seekbar = document.querySelector("#seek-bar");
    let player = document.querySelector("audio");
    seekbar.max = player.duration;
}

function updateCurrentTime(){
    let seekbar = document.querySelector("#seek-bar");
    let player = document.querySelector("audio");
    player.currentTime = seekbar.value;
}

function updateSeekBar(){
    let seekbar = document.querySelector("#seek-bar");
    let player = document.querySelector("audio");
    seekbar.value = player.currentTime;
}


function setEventHandlers(){
    let playButton = document.querySelector("#play-button");
    playButton.addEventListener("click", play);

    let pauseButton = document.querySelector("#pause-button");
    pauseButton.addEventListener("click", pause);

    let volume = document.querySelector("#volume");
    volume.addEventListener("input", updateVolume);

    let conf = document.querySelector("audio");
    conf.addEventListener("canplay", configureSeekBar)

    let seekbar = document.querySelector("#seek-bar");
    seekbar.addEventListener("input", updateCurrentTime);

    let update = document.querySelector("audio");
    update.addEventListener("timeupdate", updateSeekBar);
}

setEventHandlers();