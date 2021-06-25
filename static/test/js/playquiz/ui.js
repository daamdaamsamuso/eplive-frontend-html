const quizList = [
    "dv_q_0",
    "dv_q_1",
    "dv_q_2",
    "dv_q_3",
    "dv_q_4",
    "dv_q_5",
    "dv_q_6",
    "dv_q_7",
    "dv_q_8",
    "dv_q_9",
    "dv_q_10",
    "dv_q_11",
];
var status_state= "init"; //현재상태  onWait onQdm onResult
var _innerWidth = 0;
var _innerHeight = 0;
var filter = "win16|win32|win64|mac|macintel";
document.addEventListener("DOMContentLoaded", function () {
    if(navigator.userAgent.toLowerCase().includes('opt') || navigator.userAgent.toLowerCase().match(/opr/i)||navigator.userAgent.toLowerCase().match(/opera/i)||navigator.userAgent.toLowerCase().match(/opios/i))
    {
        window.location.href = "/error/browsercheck";
    }
    document.getElementById("dv_mute_icon").onclick = unMute;
    document.getElementById("dv_mute_icon").style.display = "none";
    document.getElementById("dv_waiting").style.display = "none";
    document.getElementById("dv_qdm").style.display = "none";
    document.getElementById("dv_result").style.display = "none";
    document.getElementById("dv_info_schedule").style.display = "none";
    document.getElementById("dv_test_alert").style.display = "flex";

    Console_Log("DOMContentLoaded");
});

window.onload=function(){
    checkWindow();
    window.addEventListener("resize", checkWindowResize);
    // onDisplay(document.getElementsByClassName("NotSupported"),"flex");
    // onDisplay(document.getElementsByClassName("NotSupported_large"),"none");
    // onDisplay(document.getElementsByClassName("NotSupported_small"),"none");
}
var landscape= true;
var portrait= true;
var landscape_space =0;
var portrait_space =0;
var ipad_portrait = true;
var ipad_status = true;
function checkWindow() {
    document.getElementById("dv_Testbox").style.backgroundColor= "#ffffff7a" ;

    if(navigator.userAgent.toLowerCase().indexOf('crios')>-1){
        //크롬 IOS
        if(ipad_portrait)
        {
            if(window.matchMedia("screen and (orientation:landscape)").matches){
                // 가로
                if(landscape){
                    landscape_space =  screen.availWidth - window.innerHeight;
                    landscape=false;
                }
                ipad_status = true;
            }else if(window.matchMedia("screen and (orientation:portrait)").matches){
                //세로
                if(portrait){
                    portrait_space =  screen.availHeight - window.innerHeight;
                    portrait = false;
                }
                ipad_status = false;
            }
            ipad_portrait = false;
        }else
        {
            if(ipad_status)
            {
                //가로
                if(landscape){
                    landscape_space =  screen.availWidth - window.innerHeight;
                    landscape=false;
                }
                _innerWidth =  screen.availHeight;
                _innerHeight =  screen.availWidth - landscape_space;
                // document.getElementById("dv_Testbox").style.backgroundColor= "#0000007a" ;
                ipad_status = false;
            }else
            {
                //세로
                if(portrait){
                    portrait_space =  screen.availHeight - window.innerHeight;
                    portrait = false;
                }
                _innerWidth =  screen.availWidth;
                _innerHeight = screen.availHeight - portrait_space;
                // document.getElementById("dv_Testbox").style.backgroundColor= "#ffffff7a" ;
                ipad_status = true;
            }
        }
    }else if(navigator.userAgent.toLowerCase().indexOf('chrome')>-1){
        //크롬 AOS
        _innerWidth = window.innerWidth;
        _innerHeight =  window.innerHeight;
    }else if(navigator.userAgent.toLowerCase().indexOf('whale')>-1 || navigator.userAgent.toLowerCase().indexOf('naver')>-1){
        //네이버,웨일
        if(navigator.userAgent.includes("iPhone")|| navigator.userAgent.includes("iPad")){
            if(window.matchMedia("screen and (orientation:landscape)").matches){
                //가로
                _innerWidth =  screen.availHeight;
                _innerHeight =  document.body.scrollHeight;
            }else if(window.matchMedia("screen and (orientation:portrait)").matches){
                //세로
                _innerWidth =  screen.availWidth;
                _innerHeight = document.body.scrollHeight;
            }else{
                _innerWidth = window.innerWidth;
                _innerHeight =  window.innerHeight;
            }
        }else{
            _innerWidth = window.innerWidth;
            _innerHeight =  window.innerHeight;
        }
    }else if(navigator.userAgent.toLowerCase().indexOf('kakaotalk')>-1){
        //카카오
        _innerWidth = window.innerWidth;
        _innerHeight =  window.innerHeight;

    }else if(navigator.userAgent.toLowerCase().indexOf('firefox')>-1) {
        // AOS 파이어폭스
        _innerWidth =  window.innerWidth;
        _innerHeight = window.innerHeight;
    }else{
        //오페라, 파이어폭스, 사파리
        if(window.matchMedia("screen and (orientation:landscape)").matches){
            //가로
            if(landscape){
                landscape_space =  screen.availWidth - window.innerHeight;
                landscape=false;
            }
            _innerWidth =  Math.max(screen.availWidth, screen.availHeight);
            _innerHeight = Math.min(document.body.scrollHeight , window.innerHeight);


        }else if(window.matchMedia("screen and (orientation:portrait)").matches){
            //세로
            if(portrait){
                portrait_space =  screen.availHeight - window.innerHeight;
                portrait = false;
            }
            _innerWidth =  Math.min(screen.availWidth, screen.availHeight);
            _innerHeight = document.body.scrollHeight;
        }
    }

    document.documentElement.style.setProperty("--window-100vw", _innerWidth + "px");
    document.documentElement.style.setProperty("--window-100vh", _innerHeight + "px");

    if(_innerWidth >_innerHeight ){
        //가로
        // onDisplay(document.getElementsByClassName("NotSupported"),"none");
        // onDisplay(document.getElementsByClassName("NotSupported_large"),"none");
        // onDisplay(document.getElementsByClassName("NotSupported_small"),"none");
        document.getElementById("dv_NotSupported").style.display = "block";
        document.documentElement.style.setProperty("--Oops_item-w", document.getElementById("Oops_item_img").clientWidth + "px");
        Console_Log("가로");
        if(status_state=="onQdm"){
           //퀴즈중
            document.getElementById("dv_player_area").style.display = "none";
            document.getElementById("dv_quiz_area").className = "quiz_area_off";

            document.getElementById("dv_waiting").style.display = "none";
            document.getElementById("dv_qdm").style.display = "block";
            document.getElementById("dv_result").style.display = "none";

        }else
        {
            if(_innerWidth >= 1024)
            {
                //타블렛용 디자인
                onDisplay(document.getElementsByClassName("NotSupported"),"none");
                onDisplay(document.getElementsByClassName("NotSupported_large"),"flex");
                onDisplay(document.getElementsByClassName("NotSupported_small"),"none");
            }else
            {
                onDisplay(document.getElementsByClassName("NotSupported"),"flex");
                onDisplay(document.getElementsByClassName("NotSupported_large"),"none");
                onDisplay(document.getElementsByClassName("NotSupported_small"),"none");
            }

            document.getElementById("dv_waiting").style.display = "none";
            document.getElementById("dv_qdm").style.display = "none";
            document.getElementById("dv_result").style.display = "none";
        }

    }else{
        //세로

        document.getElementById("dv_NotSupported").style.display = "none";
        Console_Log("세로");
        if(status_state=="onQdm"){
            //퀴즈중
            document.getElementById("dv_player_area").style.display = "flex";
            document.getElementById("dv_quiz_area").className = "quiz_area";

            document.getElementById("dv_qdm").style.display = "block";
        }

        if(status_state=="onResult")
        {
            document.getElementById("dv_result").style.display = "block";
        }

        if(status_state=="onWait")
        {

            document.getElementById("dv_waiting").style.display = "block";

        }
        if (navigator.platform) {
            if (navigator.userAgent.includes("10.0 Mobile"))
            {
                document.getElementById("waiting_bg_waiting").style.justifyContent = "normal";
                document.getElementById("qdm_bg_qdm").style.justifyContent = "normal";
                document.getElementById("dv_mute_icon").className = "mute_icon_ios";
                document.getElementById("dv_mute_icon_qdm").className = "mute_icon_ios";

                document.documentElement.style.setProperty("--waiting-bg-h",document.getElementById("waiting_bg").clientHeight + "px");
                document.documentElement.style.setProperty("--qdm-bg-h",document.getElementById("qdm_bg_qdm").clientHeight + "px");
                document.documentElement.style.setProperty("--waiting-header-h",document.getElementById("waiting_header_top").clientHeight + "px");
            }
        }
        document.documentElement.style.setProperty("--score-area-w",document.getElementById("dv_img_item").clientWidth + "px");
        document.documentElement.style.setProperty("--score-area-h",document.getElementById("dv_img_item").clientHeight + "px");
        document.documentElement.style.setProperty("--img-mask-h",document.getElementById("dv_img_mask").height + "px");
        document.documentElement.style.setProperty("--img-item-h", _innerHeight - document.getElementById("dv_login_area").clientHeight + document.getElementById("dv_img_mask").height  +"px");
        document.documentElement.style.setProperty("--title-area-h", document.getElementById("dv_login_area").clientHeight - document.getElementById("dv_img_mask").height + "px");

    }

}

function checkWindowResize() {
    document.getElementById("dv_qdm").style.display = "none";
    checkWindow();
    // if (navigator.platform) {
    //     if (filter.indexOf(navigator.platform.toLowerCase()) < 0 || navigator.userAgent.includes("iPad")) {
    //         //mobile
    //         Console_Log("mobile checkWindowResize");
    //     }else {
    //         //pc
    //         // location.href = "/error/pcerror";
    //         checkWindow();
    //         Console_Log("pc checkWindowResize");
    //     }
    // }
}

function waitImg(){
    document.getElementById("dv_mute_icon").style.display = "none"; // mute icon

    document.getElementById("dv_player_img").style.display = "flex";
    document.getElementById("dv_player_mov").style.display = "none";
    Console_Log("waitImg");

}
function waitMov(){
    document.getElementById("dv_mute_icon").style.display = "flex"; //mute icon

    document.getElementById("dv_player_img").style.display = "none";
    document.getElementById("dv_player_mov").style.display = "flex";
    Console_Log("waitMov");

}


function onWait() {
    status_state = "onWait";
    //결과화면
    document.getElementById("dv_mute_icon").style.display = "none";

    document.getElementById("dv_waiting").style.display = "none";
    document.getElementById("dv_qdm").style.display = "none";
    document.getElementById("dv_result").style.display = "none";

    checkWindow();


    if(_innerWidth >= 1024)
    {
        //타블렛
        onDisplay(document.getElementsByClassName("NotSupported"),"none");
        onDisplay(document.getElementsByClassName("NotSupported_large"),"flex");
        onDisplay(document.getElementsByClassName("NotSupported_small"),"none");
    }else
    {
        onDisplay(document.getElementsByClassName("NotSupported"),"flex");
        onDisplay(document.getElementsByClassName("NotSupported_large"),"none");
        onDisplay(document.getElementsByClassName("NotSupported_small"),"none");
    }
    Console_Log("onWait");
}
function onQDM() {
    //퀴즈화면 활성화
    document.getElementById("dv_mute_icon_qdm").style.display = "flex"; // mute icon

    document.getElementById("dv_qdm").style.display = "block";
    document.getElementById("dv_waiting").style.display = "none";
    document.getElementById("dv_result").style.display = "none";

    onDisplay(document.getElementsByClassName("NotSupported"),"none");
    onDisplay(document.getElementsByClassName("NotSupported_large"),"none");
    onDisplay(document.getElementsByClassName("NotSupported_small"),"flex");
    status_state = "onQdm";
    if(_innerWidth >_innerHeight ){
        if(status_state=="onQdm"){
            //퀴즈중
            document.getElementById("dv_qdm").style.display = "none";
            document.getElementById("dv_waiting").style.display = "none";
            document.getElementById("dv_result").style.display = "none";

            document.getElementById("dv_player_area").style.display = "none";
            document.getElementById("dv_quiz_area").className = "quiz_area_off";
            onDisplay(document.getElementsByClassName("NotSupported"),"none");
            onDisplay(document.getElementsByClassName("NotSupported_large"),"none");
            onDisplay(document.getElementsByClassName("NotSupported_small"),"flex");

            document.getElementById("dv_qdm").style.display = "block";

        }else
        {
            if(_innerWidth >= 1024)
            {
                //타블렛
                onDisplay(document.getElementsByClassName("NotSupported"),"none");
                onDisplay(document.getElementsByClassName("NotSupported_large"),"flex");
                onDisplay(document.getElementsByClassName("NotSupported_small"),"none");
            }else
            {
                onDisplay(document.getElementsByClassName("NotSupported"),"flex");
                onDisplay(document.getElementsByClassName("NotSupported_large"),"none");
                onDisplay(document.getElementsByClassName("NotSupported_small"),"none");
            }
        }
    }else{
        if(status_state=="onQdm"){
            //퀴즈중
            document.getElementById("dv_quiz_area").className = "quiz_area";
            document.getElementById("dv_player_area").style.display = "flex";

            if (navigator.platform) {
                if (navigator.userAgent.includes("10.0 Mobile"))
                {
                    document.getElementById("qdm_bg_qdm").style.justifyContent = "normal";
                    document.getElementById("dv_q_1").style.justifyContent = "normal";
                    document.getElementById("dv_q_9").style.justifyContent = "normal";
                    document.getElementById("dv_mute_icon_qdm").className = "mute_icon_ios";
                    document.documentElement.style.setProperty("--qdm-bg-h",document.getElementById("qdm_bg_qdm").clientHeight + "px");
                }
            }
        }
    }
    Console_Log("퀴즈화면 활성화!!!!!!!!!!!!!");
    Console_Log("onQDM");
}

function onResult() {
    status_state = "onResult";
    //결과화면
    document.getElementById("dv_result").style.display = "none";
    document.getElementById("dv_waiting").style.display = "none";
    document.getElementById("dv_qdm").style.display = "none";
    checkWindow();

    if(_innerWidth >= 1024)
    {
        //타블렛
        onDisplay(document.getElementsByClassName("NotSupported"),"none");
        onDisplay(document.getElementsByClassName("NotSupported_large"),"flex");
        onDisplay(document.getElementsByClassName("NotSupported_small"),"none");
    }else
    {
        onDisplay(document.getElementsByClassName("NotSupported"),"flex");
        onDisplay(document.getElementsByClassName("NotSupported_large"),"none");
        onDisplay(document.getElementsByClassName("NotSupported_small"),"none");
    }
    //결과값을 계산한다.
    //UI에 적용한다.
    //OnResult를 부른다.
    Console_Log("onResult" );
}

function onFailQdm(_score){
    document.getElementById("p_score_txt_pass").style.display = "none";
    document.getElementById("p_score_txt_meta_pass").style.display = "none";

    document.getElementById("p_score_txt_fail").style.display = "block";
    document.getElementById("p_score_txt_meta_fail").style.display = "block";
    document.getElementById("p_score_txt").innerText = _score;
}

function onPass(){
    document.getElementById("p_score_txt_pass").style.display = "block";
    document.getElementById("p_score_txt_meta_pass").style.display = "block";

    document.getElementById("p_score_txt_fail").style.display = "none";
    document.getElementById("p_score_txt_meta_fail").style.display = "none";
}


function onEntrance() {
    //로그인화면
    window.location.href = "login.html";
}

function hideUnMuteButton(){
    document.getElementById("dv_mute_icon").style.display = "none";
    // document.getElementById("dv_top_button").style.display = "none";
}

function onPlayIcon(){
    document.getElementById("dv_mute").style.display = "none";
    document.getElementById("dv_play").style.display = "block";
}
function onMuteIcon(){
    document.getElementById("dv_mute").style.display = "block";
    document.getElementById("dv_play").style.display = "none";
}

//열기 네트워크 체크
function onNetworkCheckOn() {
    // 네트워크 체크 중
    //퀴즈페이지에서는 재접속 팝업안뜸
    checkWindow();
    onDisplay(document.getElementsByClassName("dv_checking"),"block");
    onDisplay(document.getElementsByClassName("dv_fail"),"none");
    document.getElementById("dv_network_checking").style.display = "block";
    document.getElementById("dv_network_checking_fail").style.display = "none";
    getClientHeight("_network");
    Console_Log("onNetworkCheckOn 대기페이지");
}

//닫기 네트워크 체크
function onNetworkCheckOff() {
    onDisplay(document.getElementsByClassName("dv_checking"),"none");
    onDisplay(document.getElementsByClassName("dv_fail"),"none");
    document.getElementById("dv_network_checking").style.display = "none";
    document.getElementById("dv_network_checking_fail").style.display = "none";
    Console_Log("onNetworkCheckOff 대기페이지");

}

function onNetworkFailOn() {
    //네트워크 체크 실패
    onDisplay(document.getElementsByClassName("dv_checking"),"none");
    onDisplay(document.getElementsByClassName("dv_fail"),"block");
    document.getElementById("dv_network_checking").style.display = "block";
    document.getElementById("dv_network_checking_fail").style.display = "block";
    getClientHeight("_network");
}


function onFail() {
    //네트워크 체크 실패 팝업
    document.getElementById("img_area").setAttribute('src', "/img/waiting/waitingroom_network_pop_error.png");
    document.getElementById("dv_checking").style.display = "none";
    document.getElementById("dv_fail_network").style.display = "flex";
    document.getElementById("btn_close").style.display = "block";
}

function onInfoSchedule(){
//열기 다음회차 정보
    document.getElementById("dv_info_schedule").style.display = "flex";
    getClientHeight("_info_schedule");
    onDisplay(document.getElementsByClassName("dv_schedule_2st"),"block"); //2회차
    onDisplay(document.getElementsByClassName("dv_schedule_last"),"none"); //마지막
    Console_Log("onInfoSchedule")
}

function offInfoSchedule(){
//닫기 다음회차 정보
    document.getElementById("dv_info_schedule").style.display = "none";
    onDisplay(document.getElementsByClassName("dv_schedule_2st"),"none");
    onDisplay(document.getElementsByClassName("dv_schedule_last"),"none");
}

function setDisplayInArray(num,currentNum) {
    Console_Log("문제 ui 적용:" + num +"currentNum" +currentNum);
    if (num == 6666) {
        // 비활성화
        document.getElementById('dv_time_out').style.display = "flex";
        document.getElementById(quizList[currentNum]).style.display = "flex";

        // for (let i = 0; i < quizList.length; i++) {
        //         document.getElementById(quizList[i]).style.display = "none";
        // }
        //리턴
    } else {
        //활성화
        document.getElementById('dv_time_out').style.display = "none";
        for (let i = 0; i < quizList.length; i++) {
            if (i == currentNum) {
                document.getElementById(quizList[i]).style.display = "flex";
            } else {
                document.getElementById(quizList[i]).style.display = "none";
            }
        }
    }

    if (navigator.platform) {
        if (navigator.userAgent.includes("10.0 Mobile"))
        {
            document.getElementById("dv_q_1").style.justifyContent = "normal";
            document.getElementById("dv_q_9").style.justifyContent = "normal";
        }
    }

}
function getClientHeight(_id){
    document.documentElement.style.setProperty("--bottom-area-h", document.getElementById("dv_bottom_area"+_id).clientHeight + "px")
    document.documentElement.style.setProperty("--popup-100vh", document.getElementById("dv_popup_shadow"+_id).clientHeight + "px")
    document.documentElement.style.setProperty("--fixed-area-h", document.getElementById("dv_fixed_area"+_id).clientHeight + "px")
}
function onDisplay(_classList , _display){
    for(var i=0; i< _classList.length; i++)  {
        _classList[i].style.display = _display;
    }
}


