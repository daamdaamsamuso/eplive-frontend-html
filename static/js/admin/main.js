function callGetQuizTime() {
    getQuizTime().then(a => {
        document.getElementById('dv_quiz_time').innerHTML = getParseMsToTime(a.startTimeMS);
    });
}

function refresh() {
    onLoading();

    setTimeout(callGetQuizTime, 1300);
    setTimeout(offLoading, 4000);
}

function setServerTime(setTime) {
    settingTime(setTime);
    refresh();
}

function setServerTimeModify(setTime) {
    settingTimeModify(setTime);
    refresh();
}

refresh();

document.getElementById('btn_admin_applytime').addEventListener('click', () => {
    const hour = document.getElementById('txt_admin_hour').value;
    const min = document.getElementById('txt_admin_minute').value;
    const date = new Date();
    date.setHours(hour);
    date.setMinutes(min);
    date.setSeconds(0);
    setServerTimeModify(date.getTime());
});

document.getElementById('btn_p15').addEventListener('click', () => {
    setServerTime(60 * 1);
});

document.getElementById('btn_m15').addEventListener('click', () => {
    setServerTime(-(60 * 1));
});

document.getElementById('btn_p30').addEventListener('click', () => {
    setServerTime(60 * 5);
});

document.getElementById('btn_m30').addEventListener('click', () => {
    setServerTime(-(60 * 5));
});

document.getElementById('btn_p60').addEventListener('click', () => {
    setServerTime(60 * 10);
});

document.getElementById('btn_p120').addEventListener('click', () => {
    setServerTime(-(60 * 10));
});
document.getElementById('btn_p180').addEventListener('click', () => {
    setServerTime(60 * 30);
});

document.getElementById('btn_p240').addEventListener('click', () => {
    setServerTime(60 * 60);
});


function onLoading() {
    document.getElementById('dv_loading').style.display = 'block';
}

function offLoading() {
    document.getElementById('dv_loading').style.display = 'none';

}

function handleOnInput(el, maxlength) {
    el.value = el.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');
    if(el.value.length > maxlength)  {
        el.value
            = el.value.substr(0, maxlength);
    }
}
