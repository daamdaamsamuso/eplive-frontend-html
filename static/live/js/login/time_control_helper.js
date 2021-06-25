let serverTime = new Object();
let quizTime = new Object();
let remainingTime = 0;
let remainingEndTime = 0;
var isFirst = true;

let isSynced = false;
let isDomLoaded = false;

var isQuizStarted_gtag = false;


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
    setTimeout(syncProcess, 2000);
    // setTimeout(syncProcess, 5000);

    serverTime = await getSyncTime();
    quizTime = await getQuizTime();


    isSynced = true;

    //퀴즈시간-서버시간  = 남은시간
    remainingTime = quizTime.startTimeMS - serverTime.syncTime;
    remainingEndTime = quizTime.endTimeMS - serverTime.syncTime;
    //타이머돌려서 시계를 돌린다.
    Console_Log("remainingTime : " + remainingTime);
    Console_Log("remainingEndTime : " + remainingEndTime);
};

const getTime = () => {
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
        //종료
    } else if (remainingTime > 0) {
        //퀴즈 전 남은시간
        nowtime = parseInt(remainingTime / 1000);
        setUICountdown(false, nowtime);
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
        isQuizStarted_gtag = true;
        //document.getElementById("dv_debugger_remaintime").innerText = "지난시간: " + getMsToSec(time * 1000);
        document.getElementById("dv_top_timer").style.display = "flex";
        document.getElementById("p_title_play").style.display = "block";
        document.getElementById("p_title_countdown").style.display = "none";
        document.getElementById("p_timer_countdown").innerText = "";
    } else {
        isQuizStarted_gtag = false;
        //document.getElementById("dv_debugger_remaintime").innerText = "남은시간: " + getMsToSec(time * 1000);
        document.getElementById("dv_top_timer").style.display = "flex";
        document.getElementById("p_title_play").style.display = "none";
        document.getElementById("p_title_countdown").style.display = "block";
        document.getElementById("p_timer_countdown").innerText = getMsToSec(time * 1000);
    }

}

function setUICountdownEnded(isPre, time) {
    if (isPre) {
        isQuizStarted_gtag = true;
        //document.getElementById("dv_debugger_remainEndtime").innerText = "지난시간: " + getMsToSec(time * 1000);
        // document.getElementById("p_timer_countdown").innerText = "퀴즈가 종료되었습니다.";
        //퀴즈 종료
        document.getElementById("dv_top_timer").style.display = "none";
        document.getElementById("p_title_play").style.display = "none";
        document.getElementById("p_title_countdown").style.display = "none";

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
    location.reload();
}

function checkValidation_gtag() {
    if (isQuizStarted_gtag) {
        Console_Log("checkValidation_gtag " + isQuizStarted_gtag + " 진행중참여하기");
        gtag('event', '진행중참여하기', {
            'event_category' : '진행중및종료후접속',
            'event_label' : '진행중참여하기',
            'event_callback' : checkValidation()});
    } else {
        Console_Log("checkValidation_gtag " + isQuizStarted_gtag + " 정보입력_다음");
        gtag('event', '정보입력_다음', {
            'event_category' : '참가정보입력',
            'event_label' : '정보입력_다음',
            'event_callback' : checkValidation()});

    }
}

Console_Log('네트워크 체크 시작');
timeInit().then(() => {
    Console_Log('네트워크 체크 완료');
    Console_Log('시간 동기화 완료 : ' + getMsToSec(remainingTime));
});

document.addEventListener("DOMContentLoaded", function () {
    isDomLoaded = true;
});
