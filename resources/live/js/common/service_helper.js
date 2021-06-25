//submission 등록
const updateSubmission = async (data) => {
    Console_Log("data:" + data);

    var body = new Object;
    body.data = data;

    const result = await fetch("/helper/submission/encr", {
        credentials: 'include',
        mode: 'cors',
        headers: {"Content-Type": "application/json"},
        method: "POST",
        body: JSON.stringify(body),
    }).catch(err => {
        Console_Log("updateSubmission err : " + err);
        onNetworkFailOn();
    });
    //.then((response) => {
    //    return response.json();
    //});
    return result;
};

const getCheckResult = async () => {

    //const member_score = getCookie("member_score");

    //if (!(member_score == undefined || member_score == "")) {
    //    return member_score;
    //} else {

        let memberObject = new Object();

        const member_seq = getCookie("member_seq");
        const member_no = getCookie("member_no");

        memberObject.member_seq = member_seq;
        memberObject.member_no = member_no;

        var body = new Object;
        body.data = stringToUtf8Bytes(JSON.stringify(memberObject));


        const result = await fetch("/helper/checkresult/encr",{
            credentials: 'include',
            mode: 'cors',
            headers: {"Content-Type": "application/json"},
            method: "POST",
            body: JSON.stringify(body),
        }).then((response) => {
            return response.json();
        })
        .then((data) => {
            //UI 적용
            document.getElementById("score_my").src = '/img/qdm/result_score_' + data.member_score + '.png';
            if (data.member_score < 10) {
                // n문제 맞췄을경우
                onFailQdm(data.member_score);
            } else {
                // 모두 맞췄을경우
                onPass();
            }
            //cookie 적용
            setCookie("member_score", data.member_score, 300);
            return data.member_score;
        })
        .catch((err) => {
            Console_Log("checkresult error : " + err);
            //setTimeout( window.location.reload(), 1000);
            onNetworkFailOn();
        });
        return result;
    //}
};