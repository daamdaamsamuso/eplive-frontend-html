var cook_key = getCookie("member_seq");
var cook_no = getCookie("member_no");

if ((cook_key == "" || cook_key == null)) {
    //alert("로그인되어있지 않습니다.")
    location.href = "/main/epic7live3rd-joinin";
} else {
}