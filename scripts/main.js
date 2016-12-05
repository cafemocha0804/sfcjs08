function play(){
  let player = document.querySelector("audio");
  player.play();
}
//audioを再生する

function pause(){
  let player = document.querySelector("audio");
  player.pause();
}
//audioを一時停止する

function rewind(){
  let player = document.querySelector("audio");
  player.currentTime = player.currentTime - 5;
  return sec;
}
//5秒再生位置を戻す

function fastForward(){
  let player = document.querySelector("audio");
  player.currentTime = player.currentTime + 5;
  return sec;
}
//5秒再生位置を進める

function updateVolume(){
    let slider = document.querySelector("#volume");
    let value = slider.value;
    let player = document.querySelector("audio");
    player.volume = value;    
}
//音量調節

function configureSeekBar(){
    let seekbar = document.querySelector("#seek-bar");
    let player = document.querySelector("audio");
    seekbar.max = player.duration;
}
//スライダーの最大位置の決定

function updateCurrentTime(){
    let seekbar = document.querySelector("#seek-bar");
    let player = document.querySelector("audio");
    player.currentTime = seekbar.value;
}
//再生位置の調整

function updateSeekBar(){
    let seekbar = document.querySelector("#seek-bar");
    let player = document.querySelector("audio");
    seekbar.value = player.currentTime;
}
//シークバーの位置変更

function updateSpeed(){
    let slider = document.querySelector("#speed");
    let value = slider.value;
    let player = document.querySelector("#audio");
　　 player.playbackRate = value;
}
//再生スピードをスライダーでコントロールする

function changePan(){
    let pannerControl = document.querySelector("#panner");
    panner.pan.value = pannerControl.value;
}
//パンニングする


function setEventHandlers(){
    let playButton = document.querySelector("#play-button");
    playButton.addEventListener("click", play);
    //audioを再生する

    let pauseButton = document.querySelector("#pause-button");
    pauseButton.addEventListener("click", pause);
    //audioを一時停止する

    let rewindButton = document.querySelector("#rewind-button");
    rewindButton.addEventListener("click", rewind);
    //audioを5秒巻き戻す

    let fastForwardButton = document.querySelector("#fastForward-button");
    fastForwardButton.addEventListener("click", fastForward);
    //audioを5秒早送りする

    let volume = document.querySelector("#volume");
    volume.addEventListener("input", updateVolume);
    //音量調節

    let conf = document.querySelector("audio");
    conf.addEventListener("canplay", configureSeekBar);
    //スライダーの最大位置の決定

    let seekbar = document.querySelector("#seek-bar");
    seekbar.addEventListener("input", updateCurrentTime);
    //再生位置の調整

    let update = document.querySelector("audio");
    update.addEventListener("timeupdate", updateSeekBar);
    //シークバーの位置変更

　　let speed = document.querySelector("#speed");
    speed.addEventListener("input", updateSpeed);
    //再生スピードをスライダーでコントロールする

   let pannerControl = document.querySelector("#panner");
　　pannerControl.addEventListener("input", changePan);
   //パンニングする

}
//関数にまとめることでプログラムが整理される

setEventHandlers();
//関数の呼び出し


//パンニングの準備
let panner;

function initAudioGraph(){
    let ac = new AudioContext();
    let player = document.querySelector("audio");

    let source = ac.createMediaElementSource(player);
    panner = ac.createStereoPanner();
    let speaker = ac.destination;

    source.connect(panner);
    panner.connect(speaker);

}

initAudioGraph();

