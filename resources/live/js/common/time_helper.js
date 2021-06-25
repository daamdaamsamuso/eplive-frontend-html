//서버와 클라이언트 시간 동기화된 시간 정보 저장
const getSyncTime = async () => {
    const beforeTime = Date.now();
    const result = await fetch("/helper/serverTime",{
        credentials: 'include'
        })
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            const afterTime = Date.now();
            Console_Log("serverTime:" + data.startTime);
            Console_Log("serverTimeMS:" + data.startTimeMS);
            Console_Log("beforeTime:" + beforeTime);
            Console_Log("afterTime:" + afterTime);

            const delay = afterTime - beforeTime;
            Console_Log("delay:" + delay);

            const gap = data.startTimeMS - afterTime;
            Console_Log("gap:" + gap);

            const estTime = afterTime + gap + delay / 2;
            //동기화된시간fdfdfdf
            Console_Log("estTime:" + estTime);
            const serverTime = new Object();
            serverTime.serverTime = data.startTimeMS;
            serverTime.syncTime = estTime;
            serverTime.gap = gap + delay / 2;
            return serverTime;
        });
    return result;
};

//return millisec - 퀴즈시간 설정
const settingTime = async (data) => {
    const result = await fetch("/helper/time", {
        credentials: 'include',
        mode: 'cors',
        method: "POST",
        body: data,
    })
        .then((response) => {
            return response.json();
        })
        .then((seq) => {
            return seq;
        });
    return result;
};

const settingTimeModify = async (data) => {
    const result = await fetch("/helper/timeModify", {
        credentials: 'include',
        mode: 'cors',
        method: "POST",
        body: data,
    })
        .then((response) => {
            return response.json();
        })
        .then((seq) => {
            return seq;
        });
    return result;
};

//return millisec - 퀴즈시간 반환
const getQuizTime = async () => {
    const result = await fetch("/helper/time",{
        credentials: 'include',
        mode: 'cors',
    })
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            //현재시간
            return data;
        });
    return result;
};

//밀리세컨드->시간(15:20)
const getMsToSec = (millisec) => {
    let seconds = (millisec / 1000).toFixed(0);
    let minutes = Math.floor(seconds / 60);
    let hours = "";
    if (minutes > 59) {
        hours = Math.floor(minutes / 60);
        hours = hours >= 10 ? hours : "0" + hours;
        minutes = minutes - hours * 60;
        minutes = minutes >= 10 ? minutes : "0" + minutes;
    }

    seconds = Math.floor(seconds % 60);
    seconds = seconds >= 10 ? seconds : "0" + seconds;
    if (hours != "") {
        return hours + ":" + minutes + ":" + seconds;
    }
    return minutes + ":" + seconds;
};

//Date객체 -> 시계(07:31:15)
const getParseDateTypeToTime = (time) => {
    const hour = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    const ct = `${hour < 10 ? `0${hour}` : hour}:${
        minutes < 10 ? `0${minutes}` : minutes
    }:${seconds < 10 ? `0${seconds}` : seconds}`;
    return ct;
};

//밀리세컨드 -> 시계(07:31:15)
const getParseMsToTime = (ms) => {
    const time = new Date(ms);
    return getParseDateTypeToTime(time);
};
