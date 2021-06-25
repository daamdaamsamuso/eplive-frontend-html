const krYoutubeUrl = 'https://youtu.be/RgFgEMsz6hQ';
const enYoutubeUrl = 'https://youtu.be/G4RkEkTdVTg';
const zhYoutubeUrl = 'https://www.youtube.com/user/bloodybaptism';


function goToYoutubeLiveUrl() {

    //현재 브라우저 언어 가져오기
    //언어 값 받아올 변수. un은 undefined 의 앞 2글자.
    var userLang = "un";
    //crome+firefox || explorer || explorer
    userLang = navigator.language || navigator.userLanguage || navigator.systemLanguage;

    let youtubeUrl;

    userLang = userLang.toLowerCase(); //받아온 값을 소문자로 변경
    userLang = userLang.substring(0, 2); //소문자로 변경한 갚의 앞 2글자만 받아오기

    if (userLang == "ko") {
        //한국어
        Console_Log("한국 버전 유튜브 ID 적용");
        youtubeUrl = krYoutubeUrl;
    } else if (userLang == "cn" || userLang == "tw" || userLang == "zh") {
        //중국어
        Console_Log("대만/중국 버전 유튜브 ID 적용");
        youtubeUrl = zhYoutubeUrl;
    } else {
        Console_Log("영어 버전 유튜브 ID 적용");
        youtubeUrl = enYoutubeUrl;
    }

    document.location = youtubeUrl;
}