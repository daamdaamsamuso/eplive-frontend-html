var _innerWidth =0;
var _innerHeight =0;
var filter = "win16|win32|win64|mac|macintel";
var oninputFocus = false;

let isCheckInfoName_gtag = true;
document.addEventListener("DOMContentLoaded", function () {
    if(navigator.userAgent.toLowerCase().includes('opt') || navigator.userAgent.toLowerCase().match(/opr/i)||navigator.userAgent.toLowerCase().match(/opera/i)||navigator.userAgent.toLowerCase().match(/opios/i))
    {
        window.location.href = "/error/browsercheck";
    }
    checkSevername(getLang());  //브라우저 언어별 기본서버 설정
    document.getElementById("dv_joinshow").style.display = "none";
    document.getElementById("dv_Supported").style.display = "none";
    document.getElementById("dv_NotSupported").style.display = "none";

    document.getElementById("dv_test_alert").style.display = "none";
});
window.onload=function(){
    Console_Log("window.onload");
    checkWindow();
    window.addEventListener("resize", checkWindowResize);
    window.addEventListener("orientationchange", onWindowOrientation);
    if(!onCookie)
    {
        onCookieCheckOn();
    }

}
function checkSevername(userLang) {
    //총 4개 (한국 kr/ 아시아 asia/ 글로벌 global/ 유럽 eu)
    //한국어=한국서버, 중국어=아시아 서버, 그 외= 글로벌 서버로 기본 셋팅
    userLang = userLang.toLowerCase(); //받아온 값을 소문자로 변경
    userLang = userLang.substring(0, 2); //소문자로 변경한 갚의 앞 2글자만 받아오기

    let server_name = "global";

    if (userLang == "ko") {
        //한국어
        server_name = "kr";
    } else if (userLang == "cn" || userLang == "tw" || userLang == "zh") {
        //중국어
        server_name = "asia";
    }

    let option_len = document.getElementById("select_server_name").options.length;
    for (let i = 0; i < option_len; i++) {
        if ( document.getElementById("select_server_name").options[i].value == server_name ) {
            document.getElementById("select_server_name").options[i].selected = true;
        }
    }
}
function getLang() {
    //현재 브라우저 언어 가져오기
    //언어 값 받아올 변수. un은 undefined 의 앞 2글자.
    var userLang = "un";
    //crome+firefox || explorer || explorer
    userLang = navigator.language || navigator.userLanguage || navigator.systemLanguage;
    return userLang;
}

function  onWindowOrientation(){
    //입력상태에서 회전이 일어나면 포커스를 제거한다.
    document.getElementById("input_name").blur();
    document.getElementById("input_number").blur();
}
function onFocusInput(){
    oninputFocus= true;
}
function onBlurInput(){
    oninputFocus= false;
}
var landscape= true;
var portrait= true;
var landscape_space =0;
var portrait_space =0;
var ipad_portrait = true;
var ipad_status = true;
function checkWindow() {
    document.getElementById("dv_Testbox").style.backgroundColor= "#ffffff7a" ;

    if(oninputFocus)
    {
        return;
    }else
    {
        document.getElementById("dv_joinshow").style.display = "none";
        document.getElementById("dv_Supported").style.display = "none";
        document.getElementById("dv_NotSupported").style.display = "none";


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
            if(navigator.userAgent.includes("iPhone") || navigator.userAgent.includes("iPad")){
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
                _innerHeight = document.body.scrollHeight;

            }else if(window.matchMedia("screen and (orientation:portrait)").matches){
                //세로
                if(portrait){
                    portrait_space =  screen.availHeight - window.innerHeight;
                    portrait = false;
                }
                _innerWidth =  Math.min(screen.availWidth, screen.availHeight);
                _innerHeight = document.body.scrollHeight;
            }
            console.log("Opera else");
            // if(navigator.userAgent.toLowerCase().indexOf('opt')>-1) {
            //     alert("Opera")
            // }
        }
        document.documentElement.style.setProperty("--window-100vw", _innerWidth + "px");
        document.documentElement.style.setProperty("--window-100vh", _innerHeight + "px");

        if(_innerWidth >_innerHeight ){
            //가로
            document.getElementById("dv_NotSupported").style.display = "block";
            document.getElementById("dv_joinshow").style.display = "none";
            document.getElementById("dv_Supported").style.display = "none";
            if(_innerWidth >= 1024){
                //타블렛용 디자인
                onDisplay(document.getElementsByClassName("NotSupported"),"none");
                onDisplay(document.getElementsByClassName("NotSupported_large"),"flex");
            }else{
                onDisplay(document.getElementsByClassName("NotSupported"),"flex");
                onDisplay(document.getElementsByClassName("NotSupported_large"),"none");
            }
            ios10Check();
            document.documentElement.style.setProperty("--Oops_item-w", document.getElementById("Oops_item_img").clientWidth + "px");
            document.documentElement.style.setProperty("--img-title-h", _innerHeight - document.getElementById("dv_login_area").clientHeight+"px");
            document.documentElement.style.setProperty("--img-title-w", _innerWidth - document.getElementById("main_area_img_title").clientWidth+"px");
            document.documentElement.style.setProperty("--title-area-h", document.getElementById("dv_login_area").clientHeight - document.getElementById("img_mask").height + "px");
        }else{
            //세로
            document.getElementById("dv_NotSupported").style.display = "none";
            document.getElementById("dv_joinshow").style.display = "block";
            document.getElementById("dv_Supported").style.display = "block";
            ios10Check();
            document.documentElement.style.setProperty("--img-title-h", _innerHeight - document.getElementById("dv_login_area").clientHeight+"px");
            document.documentElement.style.setProperty("--img-title-w", _innerWidth - document.getElementById("main_area_img_title").clientWidth+"px");
            document.documentElement.style.setProperty("--title-area-h", document.getElementById("dv_login_area").clientHeight - document.getElementById("img_mask").height + "px");
        }


    }
    document.getElementById("dv_Testbox").innerHTML=
        "checkWindowResize"+_innerWidth+"    "+_innerHeight+ "<br>"
        +"inner"+window.innerWidth+"    "+window.innerHeight+ "<br>"
        + "Width" + screen.availWidth +"Height" + screen.availHeight + "<br>" +navigator.userAgent+"<br>"
        +navigator.appName +"<br>"
        +navigator.userAgent.toLowerCase().includes('opt')+"<br>"
        +document.body.scrollHeight +"<br>";


}
function ios10Check(){
    if (navigator.platform) {
        if (navigator.userAgent.includes("10.0 Mobile"))
        {
            document.getElementById("main_area_img_bg").className = "img_bg_ios";
            document.getElementById("main_area_img_title").className = "img_title_ios";
            document.getElementById("helper_popup_bg").className = "popup_bg_ios";
            document.getElementById("validation_popup_bg").className = "popup_bg_ios";
            document.getElementById("qdm_exit_popup_bg").className = "popup_bg_ios";
            document.getElementById("dv_popup_shadow").className = "popup_shadow_ios";
            document.getElementById("dv_popup_shadow_validation").className = "popup_shadow_ios";
            document.getElementById("dv_popup_shadow_qdm_exit").className = "popup_shadow_ios";
        }
    }
}
function checkWindowResize() {

        checkWindow();
    // if (navigator.platform) {
    //     if (filter.indexOf(navigator.platform.toLowerCase()) < 0 || navigator.userAgent.includes("iPad")) {
    //         //mobile
    //         Console_Log("mobile checkWindowResize");
    //     }else {
    //         //pc
    //         // window.location.href = "/error/pcerror";
    //         checkWindow();
    //         Console_Log("pc checkWindowResize");
    //     }
    // }
}

// 퀴즈쇼 참여 가능, 로그인페이지
function onLoginView() {
    Console_Log("퀴즈쇼 참여 가능, 로그인페이지");
    onReconnectViewOff();
    onDisplay(document.getElementsByClassName("open"),"block");
    onDisplay(document.getElementsByClassName("closed"),"none");
    onDisplay(document.getElementsByClassName("schedule_next"),"none"); //다음회차 스케줄
    onDisplay(document.getElementsByClassName("schedule_none"),"block"); //스케줄 없음
}

// 퀴즈쇼 참여 불가 , 종료안내 페이지
function onFinishView() {
    Console_Log("퀴즈쇼 참여 불가 , 종료안내 페이지");
    onReconnectViewOff();
    onDisplay(document.getElementsByClassName("open"),"none");
    onDisplay(document.getElementsByClassName("closed"),"block");
    onDisplay(document.getElementsByClassName("schedule_next"),"none"); //다음회차 스케줄
    onDisplay(document.getElementsByClassName("schedule_none"),"block"); //스케줄 없음

    document.getElementById("dv_top_timer").style.display = "none";
    document.getElementById("p_title_countdown").innerText = "";
    document.getElementById("p_timer_countdown").innerText = "";
}

//퀴즈페이지로 이동
function onPlayPage(){
    location.href = "epic7live3rd-startquizshow";
}
function onNameCheck(){
    //닉네임 입력창에서 enter키 누르면 회원번호 입력창으로 이동
    if( event.charCode == 13) {
        document.getElementById("input_number").focus();
    }
}

//회원 정보 체크
var error_type = 0;
function checkValidation() {
    var result_name = checkMBname(); //닉네임
    var result_number = checkMBNumber(); //회원번호

    if (result_name && result_number) {
        onValidationViewON();
        // document.getElementById("input_name").value = ""; //초기화
        // document.getElementById("input_number").value = ""; //초기화
        Console_Log("입력완료");
    }else
    {
        onErrorLogin(error_type);
    }
}



//닉네임 체크
function checkMBname() {
    var len_num = document.getElementById("input_name").value.length;
    var val_name = document.getElementById("input_name").value;
    var special_pattern = /[`~!@#$%^&*|\\\'\";:\/?]/gi;
    var blank_pattern = /[\s]/g;
    var check = false;
    if(len_num == 0){
        //입력하지 않은 정보가 있을 때
        error_type = 0;
    }else if (blank_pattern.test(val_name) || len_num < 2) {
        //공백, 최소 2자 이상 message:닉네임을 정확히 입력해주세요
        error_type = 1;
        document.getElementById("input_name").value = ""; //초기화
    } else {
        //성공
        check = true;
    }
    Console_Log("checkMBname");
    return check;
}
//회원번호 체크
function checkMBNumber() {
    var len_num = document.getElementById("input_number").value.length;
    var check = false;
    if(len_num == 0){
        //입력하지 않은 정보가 있을 때
        error_type = 0;
    }else if (len_num < 9) {
        //회원번호는 최소9자 입니다.
        error_type = 1;
        document.getElementById("input_number").value = ""; //초기화
        check = false;
    } else {
        //성공
        check = true;
    }
    Console_Log("checkMBname");
    return check;
}

//로그인 정보 확인
function onValidationViewON(){
    document.getElementById("dv_login_validation").style.display = "flex";
    getClientHeight("_validation");

    var sel = document.getElementById("select_server_name");
    var result_server = sel.options[sel.selectedIndex].innerText;
    document.getElementById("td_output_server").innerText = result_server; //서버명
    var result_name = document.getElementById("input_name").value;
    document.getElementById("td_output_name").innerText = result_name; //닉네임
    var result_number = document.getElementById("input_number").value;
    document.getElementById("td_output_number").innerText = result_number;//회원번호

}

//다시입력 버튼
function clearValidation(){
    document.getElementById("dv_login_validation").style.display = "none";
    document.getElementById("input_name").value = ""; //초기화
    document.getElementById("input_number").value = ""; //초기화
}


//로그인 오류
function onErrorLogin(type){
    document.getElementById("dv_login_fail").style.display = "flex";
    getClientHeight("_login_fail");
    switch(type)
    {
        case 0:
            //입력하지 않은 정보가 있을 때
            document.getElementById("dv_error_empty").style.display = "block";
            break;
        case 1:
            //입력정보에 오류가 있을 때
            document.getElementById("dv_error_all").style.display = "block";
            break;
    }
}

//로그인 오류 닫기
function offErrorLogin(){
    document.getElementById("dv_login_fail").style.display = "none";
    document.getElementById("dv_error_empty").style.display = "none";
    document.getElementById("dv_error_all").style.display = "none";
    document.getElementById("dv_error_name").style.display = "none";
    document.getElementById("dv_error_number").style.display = "none";
}

//열기 네트워크 체크
function onNetworkCheckOn(){
    // 네트워크 체크 중
    document.getElementById("dv_joinshow").style.display = "block";

    checkWindow();
    onDisplay(document.getElementsByClassName("dv_checking"),"block");
    onDisplay(document.getElementsByClassName("dv_fail"),"none");
    document.getElementById("dv_network_checking").style.display = "block";
    document.getElementById("dv_network_checking_fail").style.display = "none";
    getClientHeight("_network");

    Console_Log("onNetworkCheckOn 로그인페이지");

}

//닫기 네트워크 체크
function onNetworkCheckOff(){
    if(reconnected){onReconnectViewOn();}//재접속 팝업
    onDisplay(document.getElementsByClassName("dv_checking"),"none");
    onDisplay(document.getElementsByClassName("dv_fail"),"none");
    document.getElementById("dv_network_checking").style.display = "none";
    document.getElementById("dv_network_checking_fail").style.display = "none";
    Console_Log("onNetworkCheckOn 로그인페이지");

}

function onNetworkFailOn(){
    //네트워크 체크 실패
    onDisplay(document.getElementsByClassName("dv_checking"),"none");
    onDisplay(document.getElementsByClassName("dv_fail"),"block");
    document.getElementById("dv_network_checking").style.display = "block";
    document.getElementById("dv_network_checking_fail").style.display = "block";

    getClientHeight("_network");
}
let onCookie = true;
//열기 쿠키 체크
function onCookieCheckOn(){
    //쿠키 체크
    document.getElementById("dv_cookie_checking").style.display = "block";
    getClientHeight("_cookie");
    Console_Log("onCookieCheckOn 로그인페이지");
}
//닫기 쿠키 체크
function onCookieCheckOff(){
    //쿠키 체크 닫기
    document.getElementById("dv_cookie_checking").style.display = "none";
    Console_Log("onCookieCheckOff 로그인페이지");
}

//닫기 Gtag 처리
function offHelperLogin_gtag(){
    if( isCheckInfoName_gtag) {
        Console_Log("offHelperLogin_gtag " + isCheckInfoName_gtag + " 닉네임확인설명_닫기");
        gtag('event', '닉네임확인설명_닫기', {
            'event_category': '게임정보확인방법',
            'event_label': '닉네임확인설명_닫기',
            'event_callback': offHelperLogin()
        });
    }else{
        Console_Log("offHelperLogin_gtag " + isCheckInfoName_gtag + " 회원번호설명_닫기");
        gtag('event', '회원번호설명_닫기', {
            'event_category': '게임정보확인방법',
            'event_label': '회원번호설명_닫기',
            'event_callback': offHelperLogin()
        });
    }
}

//입력정보 확인 방법 열기
function onHelperLogin(){

    var infoPop = document.getElementById("dv_popup_helper");
    infoPop.style.display = "flex";
}
//입력정보 확인 방법 닫기
function offHelperLogin(){
    var infoPop = document.getElementById("dv_popup_helper");
    infoPop.style.display = "none";
    checkInfoName() ;//팝업화면 초기화
}

// 닉네임 확인 방법
function checkInfoName() {
    isCheckInfoName_gtag = true;
    document.getElementById("tab_name").checked = true;
    document.getElementById("dv_guide_id").style.display = "none";
    document.getElementById("dv_guide_name").style.display = "block";
}
// 회원번호 확인 방법
function checkInfoID() {
    isCheckInfoName_gtag = false;
    document.getElementById("dv_guide_id").style.display = "block";
    document.getElementById("dv_guide_name").style.display = "none";
}

//재접속 팝업 열기
function onReconnectViewOn() {
    checkWindow();
    document.getElementById("dv_qdm_exit").style.display = "flex";
    getClientHeight("_qdm_exit");
    Console_Log("onReconnectViewOn 재접속");
}

function setMember(sp_name, sp_number){
    document.getElementById("sp_name").innerText = sp_name;
    document.getElementById("sp_number").innerText = sp_number;
}

//재접속 팝업 닫기
function onReconnectViewOff(){
    document.getElementById("dv_qdm_exit").style.display = "none";
}



function getLang() {
    //현재 브라우저 언어 가져오기
    //언어 값 받아올 변수. un은 undefined 의 앞 2글자.
    var userLang = "un";
    //crome+firefox || explorer || explorer
    userLang = navigator.language || navigator.userLanguage || navigator.systemLanguage;
    return userLang;
}

function getClientHeight(_id){
    document.documentElement.style.setProperty("--bottom-area-h", document.getElementById("dv_bottom_area"+_id).clientHeight + "px");
    document.documentElement.style.setProperty("--popup-100vh", document.getElementById("dv_popup_shadow"+_id).clientHeight + "px");
    document.documentElement.style.setProperty("--fixed-area-h", document.getElementById("dv_fixed_area"+_id).clientHeight + "px");

    Console_Log("getClientHeight::::::: dv_bottom_area" +  document.getElementById("dv_bottom_area"+_id).clientHeight);
    Console_Log("getClientHeight::::::: dv_popup_shadow" +  document.getElementById("dv_popup_shadow"+_id).clientHeight);
    Console_Log("getClientHeight::::::: dv_fixed_area" +  document.getElementById("dv_fixed_area"+_id).clientHeight);

}
function onDisplay(_classList , _display){
    for(var i=0; i< _classList.length; i++)  {
        _classList[i].style.display = _display;
    }
}

function checkOnKeyDown(_this){
    var keyCode = event.keyCode ? event.keyCode : event.which;

    Console_Log("KEY-DOWN : " + keyCode);

    //이동키
    if( keyCode == 13 || event.charCode == 13) {
        event.preventDefault();
        document.getElementById("input_number").blur();
    }

    var isNumber = ((keyCode >= 48 && keyCode <= 57) || (keyCode >= 97 && keyCode <= 105))
    var isEtc = keyCode == 8 || keyCode == 46 || keyCode == 37 || keyCode ==  39;

    if(isEtc)
        return;

    if( isNumber == false ) {
        event.preventDefault();
    }

}


function checkOnKeyUp(_this, maxLen) {

    var keyCode = event.keyCode ? event.keyCode : event.which;

    Console_Log("KEY-UP : " + keyCode);

    var isBlock = keyCode == 189 ||keyCode == 187 ||keyCode == 69;


    if(isBlock){
        _this.value = _this.value.replace(/e/gi,"").replace(/-/g,"*") .replace(/\+/g,"");
    }

    if(_this.value.length == maxLen && _this.value[0] == 9) {
        Console_Log("KEY-UP 범위 넘어감  1: " + _this.value);
        _this.value = _this.value.substr(0, maxLen -1);
        Console_Log("KEY-UP 범위 넘어감  2: " + _this.value);
    }

    if(_this.value.length > maxLen) {
        Console_Log("KEY-UP 길이 넘어감  1: " + _this.value);
        _this.value = _this.value.substr(0, maxLen );
        Console_Log("KEY-UP 길이 넘어감  2: " + _this.value);
    }
}


