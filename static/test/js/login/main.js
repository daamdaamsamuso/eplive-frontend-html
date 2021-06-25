
let isEnd = document.getElementById('div_is_end').innerHTML;
document.getElementById("btn_confirm").disabled = false;
var reconnected = false;


//For TEST PAGE
isEnd = '0';

window.addEventListener('offline', function(e) {
    console.log('offline');
    onNetworkFailOn();
});


if(cook_enable == false){
    // onCookieCheckOn();
    onCookie = false;

}else if ((cook_key == "" || cook_key == null)) {
    Console_Log('쿠키 없음:' + cook_no);
    //퀴즈가 종료되었는가

    if (isEnd == "1") {
        //쿠키없고 퀴즈 죵료
        //종료되었다 뷰
        onFinishView();
    } else {
        //쿠키없고 퀴즈 진행 or 진행중
        //로그인 뷰
        onLoginView();
    }
} else{
    var sp_name = getCookie_original("nick_name");
    var sp_number = getCookie("member_no");

    //퀴즈가 종료되었는가
    reconnected = true;

        // onFinishView();
    if (isEnd == "1") {
        //쿠키있고 퀴즈 종료
        //결과를 보겠냐 뷰
        // onResultView();
        // onReconnectViewOn();
        onFinishView();
        setMember(sp_name, sp_number); //재입장 회원정보

    } else {
        //쿠키있고 퀴즈 진행 or 진행중
        //재입장 물어보는 뷰
        // onReconnectViewOn();
        onLoginView();
        setMember(sp_name, sp_number); //재입장 회원정보
    }
}

function loginFormSubmit() {
    document.getElementById("btn_confirm").disabled = true;
    let nickName = document.getElementById("td_output_name").innerText.toString();
    setCookie_original('nick_name', nickName, 300);
    Console_Log('setCookie_original ' + nickName);
}

// document.getElementById("div_debug_login").innerHTML="login:"+((cook_id=="")?"로그인안됨":cook_id);
// document.getElementById("div_debug_isEnd").innerHTML="isEnd:"+(isEnd=="1"?"종료":"종료되지않음");