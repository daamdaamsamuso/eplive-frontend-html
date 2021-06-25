

var youtubePlayer;

const krVideoId = 'W_1RgNlYBFM';
const enVideoId = 'O8DODfM56Zs';
const zhVideoId = 'IJp8rAmsUHk';

function getVideoId() {
    //현재 브라우저 언어 가져오기
    //언어 값 받아올 변수. un은 undefined 의 앞 2글자.
    var userLang = "un";
    //crome+firefox || explorer || explorer
    userLang = navigator.language || navigator.userLanguage || navigator.systemLanguage;

    let videoId;

    userLang = userLang.toLowerCase(); //받아온 값을 소문자로 변경
    userLang = userLang.substring(0, 2); //소문자로 변경한 갚의 앞 2글자만 받아오기

    if (userLang == "ko") {
        //한국어
        Console_Log("한국 버전 유튜브 ID 적용");
        videoId = krVideoId;
    } else if (userLang == "cn" || userLang == "tw" || userLang == "zh") {
        //중국어
        Console_Log("대만/중국 버전 유튜브 ID 적용");
        videoId = zhVideoId;
    }else{
        Console_Log("영어 버전 유튜브 ID 적용");
        videoId = enVideoId;
    }

    return videoId;
}


// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
function onYouTubeIframeAPIReady() {
    youtubePlayer = new YT.Player('player', {
        height: '360',
        width: '360',
        videoId: getVideoId(),
        playerVars: {
            //'autoplay': 0, // 자동재생
            //'controls': 0, // 재생컨트롤 노출여부
            //'autohide': 0, // 재생컨트롤이 자동으로 사라질지의 여부
            'fs': 0,
            'rel': 0, // 동영상 재생완료 후 유사동영상 노출여부
            'playsinline': 1, // 현페이지에서 재생
            'modestbranding': 1
            //'wmode': 'transparent'
        },
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
}


function initYoutubePlayer() {
    Console_Log("initYoutubePlayer " + status_state );

    // 2. This code loads the IFrame Player API code asynchronously.
    var tag = document.createElement('script');

    tag.src = "https://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
}

var stopYoutube = false;

// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
    if (status_state == "onWait") {
        waitMov();
        event.target.mute();
        if (stopYoutube == false)
            event.target.playVideo();
    }
}

// 5. The API calls this function when the player's state changes.
//    The function indicates that when playing a video (state=1),
//    the player should play for six seconds and then stop.
var done = false;

function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.PLAYING && !done) {
        done = true;
    }
}

function stopYoutubeAndHide() {
    stopYoutube = true;
    //Console_Log("stopVideoAndHide");
    try {
        if (youtubePlayer != null)
            youtubePlayer.stopVideo();
    } catch (e) {
    }

    hideUnMuteButton();
    waitImg();
}

function unMute() {
    //Console_Log("unmute");
    try {
        if (youtubePlayer != null) {
            youtubePlayer.unMute();

            if (youtubePlayer.getPlayerState() == -1 || youtubePlayer.getPlayerState() == 2)
                youtubePlayer.playVideo();
        }
    } catch (e) {
        Console_Log("e : " + e);
    }
    hideUnMuteButton();
}

//youtubePlayer.getPlayerState()
// -1 –시작되지 않음
// 0 – 종료
// 1 – 재생 중
// 2 – 일시중지
// 3 – 버퍼링
// 5 – 동영상 신호