const SubmissionfindAllWithMember = async () =>{
    Console_Log("SubmissionfindAllWithMember");
    document.getElementById('txt_resultsubmission').innerText = 'wait...';
    const param = document.getElementById('txt_resultsubmission').value;
    const result = await fetch("/helper/SubmissionfindAllWithMember?"+param, {
        credentials: 'include',
        mode: 'cors',
        headers: {"Content-Type": "application/json"},
        method: "GET",
    }).catch(err => { Console_Log("selectSubmissionAll err : " + err) }).then((response) => {
        return response.json();
    });
    //.then((response) => {
    //    return response.json();
    //});
    document.getElementById('txt_resultsubmission').innerText = result;
    return result;
}

const selectSubmissionAll = async () =>{
    Console_Log("selectSubmissionAll");
    document.getElementById('txt_resultsubmission').innerText = 'wait...';
    const result = await fetch("/helper/selectSubmissionAll", {
        credentials: 'include',
        mode: 'cors',
        headers: {"Content-Type": "application/json"},
        method: "GET",
    }).catch(err => { Console_Log("selectSubmissionAll err : " + err) }).then((response) => {
        return response.json();
    });

    document.getElementById('txt_resultsubmission').innerText = 'selectSubmissionAll : ' + result;
    return result;
}


const deleteSubmissionAll = async () => {
    Console_Log("deleteSubmissionAll");
    const result = await fetch("/helper/deleteSubmissionAll", {
        credentials: 'include',
        mode: 'cors',
        headers: {"Content-Type": "application/json"},
        method: "GET",
    }).catch(err => { Console_Log("deleteSubmissionAll err : " + err) });
    //.then((response) => {
    //    return response.json();
    //});
    document.getElementById('txt_resultsubmission').innerText = '';
    return result;
};



const selectMemberAll = async () => {
    Console_Log("selectMemberAll");
    document.getElementById('txt_resultmember').innerText = 'wait...';
    const result = await fetch("/helper/selectMemberAll", {
        credentials: 'include',
        mode: 'cors',
        headers: {"Content-Type": "application/json"},
        method: "GET",
    }).catch(err => { Console_Log("selectMemberAll err : " + err) })
        .then((response) => {
            return response.json();
        });
    document.getElementById('txt_resultmember').innerText = 'selectMemberAll : ' + result;
    return result;
};

const deleteMemberAll = async () => {
    Console_Log("deleteMemberAll");
    const result = await fetch("/helper/deleteMemberAll", {
        credentials: 'include',
        mode: 'cors',
        headers: {"Content-Type": "application/json"},
        method: "GET",
    }).catch(err => { Console_Log("deleteMemberAll err : " + err) });
    //.then((response) => {
    //    return response.json();
    //});
    return result;
};



const setServerSystem = async (status) => {
    Console_Log("setServerSystem : " + status);
    const result = await fetch("/helper/insertServerSystem?status="+status, {
        credentials: 'include',
        mode: 'cors',
        headers: {"Content-Type": "application/json"},
        method: "GET",
    }).catch(err => { Console_Log("insertServerSystem err : " + err) });

    return result;
};


const collectQuizScore = async (checkPeriod) => {
    Console_Log("collectQuizScore : " + checkPeriod);
    document.getElementById('txt_resultquizscore').innerText = 'wait...';
    const result = await fetch("/helper/collectQuizScore?checkPeriod="+checkPeriod, {
        credentials: 'include',
        mode: 'cors',
        headers: {"Content-Type": "application/json"},
        method: "GET",
    }).catch(err => { Console_Log("collectQuizScore err : " + err) })
        .then((response) => {
            return response.json();
        });

    document.getElementById('txt_resultquizscore').innerText = 'collectQuizScore : ' + result;
    return result;
};

const selectQuizScoreAll = async () => {
    Console_Log("selectQuizScoreAll" );
    const result = await fetch("/helper/selectQuizScoreAll", {
        credentials: 'include',
        mode: 'cors',
        headers: {"Content-Type": "application/json"},
        method: "GET",
    }).catch(err => { Console_Log("selectQuizScoreAll err : " + err) })
        .then((response) => {
            return response.json();
        });

    document.getElementById('txt_resultquizscore').innerText = 'selectQuizScoreAll : ' + result;
    return result;
};

const selectQuizScoreDedup = async () => {
    Console_Log("selectQuizScoreDedup" );
    const result = await fetch("/helper/selectQuizScoreDedup", {
        credentials: 'include',
        mode: 'cors',
        headers: {"Content-Type": "application/json"},
        method: "GET",
    }).catch(err => { Console_Log("selectQuizScoreDedup err : " + err) })
        .then((response) => {
            return response.json();
        });

    document.getElementById('txt_resultquizscore').innerText = 'selectQuizScoreDedup : ' + result;
    return result;
};


const deleteQuizScoreAll = async () => {

    Console_Log("deleteQuizScoreAll" );

    const result = await fetch("/helper/deleteQuizScoreAll", {
        credentials: 'include',
        mode: 'cors',
        headers: {"Content-Type": "application/json"},
        method: "GET",
    }).catch(err => { Console_Log("deleteQuizScoreAll err : " + err) })
        .then((response) => {
            return response.json();
        });

    document.getElementById('txt_resultquizscore').innerText = 'deleteQuizScoreAll : ' + result;
    return result;
};