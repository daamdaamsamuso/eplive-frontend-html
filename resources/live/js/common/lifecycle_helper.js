
let visibleState = "load"; // "visible" // "hidden";
//Console_Log("visibilitychange : " + visibleState);


document.addEventListener('visibilitychange',function (){
    if(document.visibilityState == "visible"){
        visibleState= "visible";
        Console_Log("visibilitychange : " + visibleState);
        window.location.reload();
    }else if(document.visibilityState == "hidden"){
        visibleState= "hidden";
        Console_Log("visibilitychange : " + visibleState);
        videoRelease();
    }
});
