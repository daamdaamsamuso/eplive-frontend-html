document.addEventListener("DOMContentLoaded", function () {
    hideButton();
    if(window.location.pathname == "/login.html")
    {
        demoButton(0);
    }else if(window.location.pathname == "/playquiz.html")
    {
        demoButton(7);
    }
    
});
function showButton() {
    document.getElementById("dv_testbutton").style.display = "none";
    document.getElementById("dv_buttonlist1").style.display = "flex";
    document.getElementById("dv_buttonlist2").style.display = "flex";
    document.getElementById("dv_buttonlist3").style.display = "flex";
}
function hideButton() {
    document.getElementById("dv_testbutton").style.display = "flex";
    document.getElementById("dv_buttonlist1").style.display = "none";
    document.getElementById("dv_buttonlist2").style.display = "none";
    document.getElementById("dv_buttonlist3").style.display = "none";
}


function demoButton(idx)
{
  
    // 유튜브 관리 / playquiz Test이벤트 중에 테스트페이지 설정만 제외하고..
    if( idx > 7 && idx != 16)
        stopYoutubeAndHide();

    switch(idx)
    {
        case 0:
            //퀴즈까지 남은 시간
            document.getElementById("dv_test_alert").style.display = "none";
            document.getElementById("header_timer").style.display = "block";
            document.getElementById("p_timer_countdown").style.display = "block";
            onNetworkCheckOff();
            onCookieCheckOff();
            onReconnectViewOff();
            onLoginView();
            document.getElementById("dv_top_timer").style.display = "flex";
            document.getElementById("p_title_play").style.display = "none";
            document.getElementById("p_title_countdown").style.display = "block";
            document.getElementById("p_timer_countdown").innerText = "01:03";
            break;
    
        case 1:
            //퀴즈 진행중
            document.getElementById("dv_test_alert").style.display = "none";
            document.getElementById("header_timer").style.display = "block";
            document.getElementById("p_timer_countdown").style.display = "block";
            onNetworkCheckOff();
            onCookieCheckOff();
            onReconnectViewOff();
            onLoginView();
            document.getElementById("dv_top_timer").style.display = "flex";
            document.getElementById("p_title_play").style.display = "block";
            document.getElementById("p_title_countdown").style.display = "none";
            document.getElementById("p_timer_countdown").innerText = "";
            break;
        case 2:
            //퀴즈 찹여불가
            document.getElementById("dv_test_alert").style.display = "none";
            document.getElementById("header_timer").style.display = "block";
            document.getElementById("p_timer_countdown").style.display = "block";
            onNetworkCheckOff();
            onCookieCheckOff();
            onReconnectViewOff();
            onFinishView();
            break;
        case 3:
            //재입장 확인
            document.getElementById("dv_test_alert").style.display = "none";
            document.getElementById("header_timer").style.display = "block";
            document.getElementById("p_timer_countdown").style.display = "block";
            onNetworkCheckOff();
            onCookieCheckOff();
            onReconnectViewOn();
            break;

        case 4:
            //쿠키확인
            document.getElementById("dv_test_alert").style.display = "none";
            document.getElementById("header_timer").style.display = "block";
            document.getElementById("p_timer_countdown").style.display = "block";
            onNetworkCheckOff();
            onReconnectViewOff();
            onCookieCheckOn();
            break;

        case 5:
            //네트워크 확인 
            document.getElementById("dv_test_alert").style.display = "none";
            document.getElementById("header_timer").style.display = "block";
            document.getElementById("p_timer_countdown").style.display = "block";
            onCookieCheckOff();
            onReconnectViewOff();
            onNetworkCheckOn();
            break;

        case 6:
            //네트워크 실패
            document.getElementById("dv_test_alert").style.display = "none";
            document.getElementById("header_timer").style.display = "block";
            document.getElementById("p_timer_countdown").style.display = "block";
            onCookieCheckOff();
            onReconnectViewOff();
            onNetworkFailOn();
            break;

        case 7:
            //가이드  - 유튜브
            onWait();
            waitMov();
            initYoutubePlayer();
            break;
        case 17:
            //가이드 - 이미지
            onWait();
            waitImg();
            break;
        case 8:
            //퀴즈인트로 
            onQDM();
            setDisplayInArray(1,0);
            break;
        case 9:
            //O X 
            onQDM();
            var t1 = document.getElementById("t1_01_q7");
            var t2 = document.getElementById("t1_02_q7");
            t1.checked = false;
            t2.checked = false;
            setDisplayInArray(1,7);
            break;
        case 10:
            //3지선다
            onQDM();
            var t1 = document.getElementById("t2_01_q1");
            var t2 = document.getElementById("t2_02_q1");
            var t3 = document.getElementById("t2_03_q1");
            t1.checked = false;
            t2.checked = false;
            t3.checked = false;
            setDisplayInArray(1,1);
            break;
        case 11:
            //4지선다
            onQDM();
            var t1 = document.getElementById("t3_01_q2");
            var t2 = document.getElementById("t3_02_q2");
            var t3 = document.getElementById("t3_03_q2");
            var t4 = document.getElementById("t3_04_q2");
            t1.checked = false;
            t2.checked = false;
            t3.checked = false;
            t4.checked = false;
            setDisplayInArray(1,2);
            break;
        case 12:
            //타임아웃
            onQDM();
            var t1 = document.getElementById("t3_01_q2");
            var t2 = document.getElementById("t3_02_q2");
            var t3 = document.getElementById("t3_03_q2");
            var t4 = document.getElementById("t3_04_q2");
            t1.checked = false;
            t2.checked = false;
            t3.checked = false;
            t4.checked = false;
            setDisplayInArray(1,2);
            setDisplayInArray(6666,2);
            break;
        case 13:
            //퀴즈 아웃트로
            onQDM();
            setDisplayInArray(1,11)
            break;
        case 14:
            //모두 정답
            onResult();
            document.getElementById("score_my").src= "../resources/img/qdm/result_score_10.png";
            onPass();
            break;
        case 15:
            //스코어 
            onResult();
            document.getElementById("score_my").src= "../resources/img/qdm/result_score_7.png";
            onFailQdm(7);
            break;
        case 16:
            //테스트 퀴즈  
            document.getElementById("dv_test_alert").style.display = "flex";
            document.getElementById("header_timer").style.display = "none";
            document.getElementById("p_timer_countdown").style.display = "none";
            break;
       
    }
    hideButton();
}