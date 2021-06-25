//submission 등록

var submissionMap = new Map();

var quizMap = new Map();
quizMap.set(1, 0);
quizMap.set(2, 2);
quizMap.set(3, 3);
quizMap.set(4, 1);
quizMap.set(5, 2);
quizMap.set(6, 2);
quizMap.set(7, 2);
quizMap.set(8, 4);
quizMap.set(9, 3);
quizMap.set(10, 2);


const updateSubmission = async (data) => {
    if( submissionMap.has(data.quiz_seq) == false){
        submissionMap.set(data.quiz_seq , data.submission_answer);
        Console_Log( "updateSubmission : " + data.quiz_seq + " | " + data.submission_answer);
    }else{
        //제출된 값 존재시.
        if( data.submission_answer > 0 ) {
            submissionMap.set(data.quiz_seq, data.submission_answer);
            Console_Log( "updateSubmission : " + data.quiz_seq + " | " + data.submission_answer);
        }
    }
};

const getCheckResult = async () => {

    var score = 0;

    for (var [quiz, answer] of quizMap) {
        if( answer == 0) {
            score++;
            Console_Log( "updateSubmission : answer == 0");
        }else{
            if( submissionMap.has(quiz) && submissionMap.get(quiz) == answer){
                score++;
                Console_Log( "updateSubmission : " + quiz +" | " + answer);
            }
        }
    }

    //UI 적용
    document.getElementById("score_my").src = '/img/qdm/result_score_' + score + '.png';
    if (score < 10) {
        // n문제 맞췄을경우
        onFailQdm(score);
    } else {
        // 모두 맞췄을경우
        onPass();
    }

    //cookie 적용
    setCookie("member_score", score, 300);
    Console_Log( "getCheckResult cnt : " + score)
    return score;
};