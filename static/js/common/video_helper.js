

let hls;
let video = document.getElementById("video-player");
var onPlaying = false;

let cnt = 0;
let curr = 0;
const path = getPath();

let isSeekedByProgress = false;

if (Hls.isSupported()) {
    hls = new Hls({
        debug: false,
    });
    hls.attachMedia(video);
    hls.on(Hls.Events.MEDIA_ATTACHED, function () {
    });
    hls.loadSource(path);
} else {
    video.src = path;
    video.addEventListener("canplay", onCanPlay);
}

video.onerror = function (e){
    console.log("onerror:"+e);
}

video.onabort = function (e){
    console.log("onabort:"+e);
}
video.onpause = function (e){
    console.log("onpause:"+e);
}
video.onsuspend = function (e){
    console.log("onsuspend:"+e);
}


video.onplaying = function (e){
    onPlaying = true;
    console.log("onplaying:"+e);
}
video.onstalled = function (e){
    console.log("onstalled:"+e);
}


function onPause(){
    video.play();
}

//ios safari에서는 정상적인 포지션이동이 되지않기때문에
//-canplay-


function onCanPlay() {
    video.removeEventListener("canplay", onCanPlay);
    video.addEventListener('pause',onPause);
    isSeekedByProgress = true;
    video.currentTime = curr;
    video.play();
}



function setCurrentTime(position) {
    isSeekedByProgress = true;
    //안드로이드일 경우
    if (Hls.isSupported()) {
        video.currentTime = position;
    }
    //아이폰일경우
    else {
        curr = position;
    }

}

function getCurrentTime(){
    return video.currentTime;
}

function videoPlay(){
    Console_Log("videoPlay");
    video.addEventListener('pause',onPause);
    var playPromise = video.play();

    if (playPromise != undefined) {
        playPromise.then(_ => {
            Console_Log("VideoPlay : autoPlay");
        })
        .catch(error => {
            Console_Log("VideoPlay : Try Mute Play");
            video.muted = true;
            var playPromise2 = video.play();

            if( playPromise2 != undefined){
                playPromise2.then(_ =>{
                    Console_Log("VideoPlay : Mute Play");
                })
                .catch(error2 =>{
                    Console_Log("VideoPlay : Auto-play was prevented");
                    onPlayIcon();
                });
            }
        });
    }
}

function videoMute(muted){
    video.muted = muted;

    if( muted == false)
        video.play();

}

function videoRelease(){

    video.removeEventListener('pause',onPause);
    Console_Log("videoRelease start");
    video.pause();
    video.removeAttribute('src'); // empty source
    video.load();
    Console_Log("videoRelease end");
}




function videoAddEventListener(eventType, func){
    video.addEventListener(eventType, func);
}

function videoRemoveEventListener(eventType, func){
    video.removeEventListener(eventType, func);
}

