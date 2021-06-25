document.addEventListener("DOMContentLoaded", function () {
    hideButton();
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