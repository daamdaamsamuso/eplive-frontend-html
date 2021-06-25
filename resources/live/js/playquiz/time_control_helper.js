let serverTime = new Object();
let quizTime = new Object();
let remainingTime = 0;
let remainingEndTime = 0;

var runOnQdm = false;
var runOnWait = false;
var runOnResult = false;

let isSynced = false;
let isDomLoaded = false;

const syncProcess = ()=>{
    Console_Log("syncProcess : " + isSynced +"  " + isDomLoaded);
    if( isSynced == false || isDomLoaded == false)
    {
        //여기 오면 실패...
        Console_Log("Sync FAILED");
        isNetworkFail = true;

        //네트워크 실패로 인한 사용 불가......
        onNetworkFailOn();
    }else{
        //성공
        Console_Log("Sync SUCCEED");

        if (remainingEndTime > 0) {
            getTime();
            setInterval(getTime, 1000);
        }
        setTimeout(onNetworkCheckOff, 10);
    }
}



//동기화시간을 계산하여 남은 퀴즈시간을 구한다.
//timeInit()
const timeInit = async () => {
    isSynced = false;
    onNetworkCheckOn();
    setTimeout(syncProcess, 3000);
    // setTimeout(syncProcess, 5000);

    serverTime = await getSyncTime();
    quizTime = await getQuizTime();


    isSynced = true;
    runOnQdm = false;
    runOnWait = false;
    runOnResult = false;

    //퀴즈시간-서버시간  = 남은시간
    remainingTime = quizTime.startTimeMS - serverTime.syncTime;
    remainingEndTime = quizTime.endTimeMS - serverTime.syncTime;
    //타이머돌려서 시계를 돌린다.
    Console_Log(remainingTime);
    Console_Log(remainingEndTime);
};


const getTime = () => {
    Console_Log("getTime");
//현재시간-퀴즈시작시간=퀴즈시작 남은시간
    var nowtime = '';
//현재시간-퀴즈종료시간=퀴즈종료 남은시간
    var nowendtime = '';
    remainingTime -= 1000;
    remainingEndTime -= 1000;

    if ((remainingTime <= 0) && (remainingEndTime > 0)) {

        //퀴즈 후 지난시간
        nowtime = parseInt(Math.abs(remainingTime) / 1000);
        setUICountdown(true, nowtime);
        //퀴즈페이지로 이동

        if(runOnQdm == false) {
            runOnQdm = true;
            //영상 포지션을 이동 후 플레이한다.
            //영상을 플레이한다.
            var position = Math.abs(remainingTime) / 1000;
            setCurrentTime(position);

            Console_Log('play');
            document.getElementById("img_video_thum").addEventListener("click", function (e) {
                //아직 재생 전이라면 해당 처리를 하지 않는다.
                if( onPlaying == false)
                    return;
                videoMute(false);

                document.getElementById("img_video_thum").style.display = "none";
                document.getElementById("dv_mute_icon_qdm").style.display = "none";
            })
            console.log('video.paused:'+video.paused);
            console.log('video.played:'+video.played);
            videoPlay();

            onQDM();
            stopYoutubeAndHide();
        }

        //종료
        //퀴즈페이지 이동 버튼 활성화 및 영상 재생
    } else if (remainingTime > 0) {
        //퀴즈 전 남은시간

        nowtime = parseInt(remainingTime / 1000);
        setUICountdown(false, nowtime);

        if( runOnWait == false) {
            runOnWait = true;
            onWait();
        }

        //UI 구현
        if (remainingTime < 10000)
            stopYoutubeAndHide();

    } else {
        //퀴즈 끝
        if( runOnResult == false) {
            runOnResult = true;
            onResult();
            stopYoutubeAndHide();
            videoRelease();
        }
        //종료
    }

    if (remainingEndTime <= 0) {
        //퀴즈종료 후 지난시간
        nowendtime = parseInt(Math.abs(remainingEndTime) / 1000);
        setUICountdownEnded(true, nowendtime);

    } else {
        //퀴즈종료 전 남은시간
        nowendtime = parseInt(remainingEndTime / 1000);
        setUICountdownEnded(false, nowendtime);
    }

    setUIDebugger(quizTime);
};

function setUICountdown(isPre, time) {
    if (isPre) {
        //document.getElementById("dv_debugger_remaintime").innerText = "지난시간: " + getMsToSec(time * 1000);
        document.getElementById("p_timer_countdown").innerText = "퀴즈가 시작되었습니다.";
    } else {
        //document.getElementById("dv_debugger_remaintime").innerText = "남은시간: " + getMsToSec(time * 1000);
        document.getElementById("p_timer_countdown").innerText = getMsToSec(time * 1000);
    }

}

function setUICountdownEnded(isPre, time) {
    if (isPre) {
        //document.getElementById("dv_debugger_remainEndtime").innerText = "지난시간: " + getMsToSec(time * 1000);
        document.getElementById("p_timer_countdown").innerText = "퀴즈가 종료되었습니다.";
    } else {
        //document.getElementById("dv_debugger_remainEndtime").innerText = "남은시간: " + getMsToSec(time * 1000);
    }
}

function setUIDebugger(quizTime) {
    // document.getElementById("dv_debugger_quizst").innerText = getParseMsToTime(quizTime.startTimeMS);
    // document.getElementById("dv_debugger_quizend").innerText = getParseMsToTime(quizTime.endTimeMS);
    // document.getElementById("dv_debugger_quizrun").innerText = getMsToSec(quizTime.runTime * 1000);
}


function btnNetworkCheckFailed(){
    history.back();
}

Console_Log('네트워크 체크 시작');
timeInit().then(() => {
    Console_Log('네트워크 체크 완료');
    Console_Log('시간 동기화 완료 : ' + getMsToSec(remainingTime));
});

document.addEventListener("DOMContentLoaded", function () {
    isDomLoaded = true;
});