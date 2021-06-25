//뒤로가기 or 앞으로가기 시 화면 리프레쉬 처리
window.onpageshow = function(event){
    if (event.persisted || (window.performance && window.performance.navigation.type == 2)){
        // 사파리 or 안드로이드에서 뒤로가기로 넘어온 경우(캐시)
        window.location.reload();
    }
};