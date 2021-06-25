var _innerWidth =0;
var _innerHeight =0;
var filter = "win16|win32|win64|mac|macintel";
var oninputFocus = false;
document.addEventListener("DOMContentLoaded", function () {
});
window.onload=function(){
   checkWindow();
    window.addEventListener("resize", checkWindowResize);
}
var landscape= true;
var portrait= true;
var landscape_space =0;
var portrait_space =0;
var ipad_portrait = true;
var ipad_status = true;
function checkWindow() {
    if(navigator.userAgent.toLowerCase().indexOf('crios')>-1){
        //크롬 IOS
        if(window.innerWidth >= window.innerHeight)
        {
            _innerWidth =  Math.max(window.innerWidth ,window.innerHeight) ;
            _innerHeight =   Math.min(window.innerWidth ,window.innerHeight);
        }else
        {
            _innerWidth =  Math.min(window.innerWidth ,window.innerHeight);
            _innerHeight =  Math.max(window.innerWidth ,window.innerHeight);
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
    }

    document.documentElement.style.setProperty("--window-100vw", _innerWidth + "px");
    document.documentElement.style.setProperty("--window-100vh", _innerHeight + "px");
    if(_innerWidth >_innerHeight ){
        //가로
        document.getElementById("dv_NotSupported").style.display = "block";
        document.getElementById("img_browser").style.display = "none";
    }else{
        //세로
        document.getElementById("dv_NotSupported").style.display = "block";
        document.getElementById("img_browser").style.display = "block";
    }
    console.log(_innerWidth  + " " +_innerHeight)
}

function checkWindowResize() {
    checkWindow();
}
