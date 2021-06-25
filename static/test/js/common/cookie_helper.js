//항상 Encripyt_helper 뒤에 호출하세요!!!!


//쿠키 값 가져오기
const getCookie = (cname) => {
    var name = cname + "=";
    var ca = document.cookie.split(";");
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == " ") {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            let subStringC = c.substring(name.length, c.length);

            let decrValue = subStringC;

            //encr data일 경우 decr
            if (subStringC.indexOf('@') == 0)
                decrValue = decryptProcess(subStringC.substring(1, subStringC.length).split("%2C"));

            return decrValue;
        }
    }
    return "";
}


//쿠키 체크
const checkCookie = () => {

    setCookie("check", "possible", 1);
    var checkValue = getCookie("check");
    if (checkValue != "") {
        return true;
    } else {
        return false;
    }
}


// 쿠키 설정
const setCookie = (cookie_name, value, miuntes) => {
    const exdate = new Date();
    exdate.setMinutes(exdate.getMinutes() + miuntes);
    let encrValue = encryptProcess(value);
    const cookie_value =
        escape("@" + encrValue) +
        (miuntes == null ? "" : "; expires=" + exdate.toUTCString());
    document.cookie = cookie_name + "=" + cookie_value;
}


//쿠키 삭제
const deleteCookie = name => {
    document.cookie = name + '=; expires=Thu, 01 Jan 1999 00:00:10 GMT;';
}

// 쿠키 조회
const view_cookie = () => {
    Console_Log(document.cookie);
}


const setCookieEncryption = (cookie_name, miuntes) => {
    let srcCookieValue = getCookie(cookie_name);

    //ecr화 안되있는 경우 처리
    if (srcCookieValue.length > 0 && srcCookieValue.indexOf("@") < 0)
        setCookie(cookie_name, srcCookieValue, miuntes);
}


//쿠키 값 가져오기
const getCookie_lasted = (cname) => {
    var name = cname + "=";
    var ca = document.cookie.split(";");
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == " ") {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}


// 쿠키 설정
const setCookie_original = (cookie_name, value, miuntes) => {
    Console_Log(value);
    const exdate = new Date();
    exdate.setMinutes(exdate.getMinutes() + miuntes);
    const cookie_value =
        escape(value) +
        (miuntes == null ? "" : "; expires=" + exdate.toUTCString());
    document.cookie = cookie_name + "=" + cookie_value;
    Console_Log(cookie_value);
}

function getCookie_original(cookieName){
    var cookieValue=null;
    if(document.cookie){
        var array=document.cookie.split((escape(cookieName)+'='));
        if(array.length >= 2){
            var arraySub=array[1].split(';');
            cookieValue=unescape(arraySub[0]);
        }
    }
    return cookieValue;
}

