
//common/device_helper
//playquiz/time_control_helper             Math.abs(remainingTime) / 1000;
//playquiz/qdm             videoCurrentPos
//common/video_helper setCurrentTime


let validityDelay = 3;
const validityInterval = 1;

const validity=()=>{
    validityDelay -= validityInterval;

    if( visibleState == "hidden" || validityDelay > 0 )
        return;

    if( (remainingTime <= 0) && (remainingEndTime > 0) && videoCurrentPos > 0) {

        let remainingTimeSec = Math.abs(remainingTime) / 1000;

        //Console_Log("validity check [ " + remainingTimeSec + "   " + videoCurrentPos + " ]");

        var gap = remainingTimeSec - videoCurrentPos;

        if (gap > 4 || gap < -4) {
            validityDelay = 4;
            //Console_Log("이동해야됨!! 우선 막아둠.....    remainingTimeSec : " + remainingTimeSec + "        gap : " + gap);
            setCurrentTime(remainingTimeSec)
            videoPlay();

            if(gap > 12 || gap < -12)
                window.location.reload();
        }
    }
}

setInterval(validity,validityInterval*1000);

