
let isDebugMode = true;



// url 에서 parameter 추출
function getParam(sname) {
    var params = location.search.substr(location.search.indexOf("?") + 1);
    var sval = "";
    params = params.split("&");
    for (var i = 0; i < params.length; i++) {
        temp = params[i].split("=");
        if ([temp[0]] == sname) {
            sval = temp[1];
        }
    }
    return sval;
}

function existParam(sname){
    var params = location.search.substr(location.search.indexOf("?") + 1);

    params = params.split("&");
    for (var i = 0; i < params.length; i++) {
        temp = params[i].split("=");
        if ([temp[0]] == sname) {
            return true;
        }
    }
    return false;
}

function Console_Log(msg){
    if( isDebugMode )
        console.log(msg);
}

isDebugMode = existParam("debug");
Console_Log("DEBUG MODE");

