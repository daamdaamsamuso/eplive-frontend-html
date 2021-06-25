//remaintime 체크해서
// 퀴즈전이면 대기 페이지
// 퀴즈중이면 퀴즈 페이지
// 퀴즈후이면 결과 페이지
//실제 클라이언트에 연결된 퀴즈 종료시간

setCookieEncryption("member_seq", 300);
setCookieEncryption("member_no", 300);


window.addEventListener('offline', function (e) {
    console.log('offline');
    onNetworkFailOn();
});

let intv = setInterval(runFunc, 1000);

function runFunc() {
    if (isSynced) {
        if (remainingTime > 0) {
            //퀴즈전
            Console_Log("대기페이지 이동");

            if (runOnWait == false) {
                runOnWait = true;
                onWait();
            }

            initYoutubePlayer();
        } else if ((remainingTime <= 0) && (remainingEndTime > 0)) {
            //퀴즈 진행중
            Console_Log("퀴즈페이지 이동");
            onQDM();
        } else {
            getCheckResult().then(result => {
                onResult();
                Console_Log("퀴즈끝 페이지 이동")
                stopYoutubeAndHide();
            });
        }
        clearInterval(intv);
    }
}