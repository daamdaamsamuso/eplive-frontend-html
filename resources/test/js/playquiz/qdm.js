var pre;
var nex;
var current, last = -1;

let submissionObject = new Object();


function initSubmission() {
    submissionObject.member_seq = getCookie("member_seq");
    submissionObject.member_no = getCookie("member_no");
    submissionObject.quiz_seq = 0;

    //최초에 값은 -1로 처리하여.. 중간 접속시 답을 제출하지 않는다 -cheon-
    submissionObject.submission_answer = -1;
}

let currentNum = -1;
let videoCurrentPos = 0;

function time_update() {
    let isEnable = true;

    videoCurrentPos = parseInt( getCurrentTime() );

    nex = videoCurrentPos;
    if (videoCurrentPos != pre) {
        // document.getElementById('dv_debugger_position').innerHTML=pos;
        // Console_Log(pos);
        //1 start
        //1 start
        if (videoCurrentPos <= 96) {
            current = 0;
            currentNum = 0;
        }
        //1 end
        else if (videoCurrentPos < 111) {
            current = 1;
            currentNum = 1;
        }
        //2 start
        else if (videoCurrentPos < 118) {
            current = 6666;
            currentNum = 1;
        }
        //2 end
        else if (videoCurrentPos < 136) {
            current = 2;
            currentNum = 2;
        }
        //3 start
        else if (videoCurrentPos < 165) {
            current = 6666;
            currentNum = 2;
        }
        //3 end
        else if (videoCurrentPos < 184) {
            current = 3;
            currentNum = 3;
        }
        //4 start
        else if (videoCurrentPos < 201) {
            current = 6666;
            currentNum = 3;
        }
        //4 end
        else if (videoCurrentPos < 225) {
            current = 4;
            currentNum = 4;
        }
        //5 start
        else if (videoCurrentPos < 253) {
            current = 6666;
            currentNum = 4;
        }
        //5 end
        else if (videoCurrentPos < 274) {
            current = 5;
            currentNum = 5;
        }
        //6 start
        else if (videoCurrentPos < 298) {
            current = 6666;
            currentNum = 5;
        }
        //6 end
        else if (videoCurrentPos < 316) {
            current = 6;
            currentNum = 6;
        }
        //7 start
        else if (videoCurrentPos < 339) {
            current = 6666;
            currentNum = 6;
        }
        //7 end
        else if (videoCurrentPos < 357) {
            current = 7;
            currentNum = 7;
        }
        //8 start
        else if (videoCurrentPos < 375) {
            current = 6666;
            currentNum = 7;
        }
        //8 end
        else if (videoCurrentPos < 397) {
            current = 8;
            currentNum = 8;
        }
        //9 start
        else if (videoCurrentPos < 422) {
            current = 6666;
            currentNum = 8;
        }
        //9 end
        else if (videoCurrentPos < 442) {
            current = 9;
            currentNum = 9;
        }
        //10 start
        else if (videoCurrentPos < 465) {
            current = 6666;
            currentNum = 9;
        }
        //아웃트로
        else if (videoCurrentPos < 486) {
            current = 10;
            currentNum = 10;

        } else if (videoCurrentPos < 504) {
            current = 6666;
            currentNum = 10;
        } else if(videoCurrentPos < 524){
            //결과체크를 524sec 에 하기 위한 코드...
        } else if (videoCurrentPos < 554) {
            current = 11;
            currentNum = 11;
        }
        //go to result
        else if (videoCurrentPos > 554) {
            current = 12;
        } else {
        }

        if (last != current) {
            last = current;
            if (current == 6666 && currentNum != -1) {
                //서버 업데이트
                //서버에 업데이트
                Console_Log('서버 업데이트');

                submissionObject.quiz_seq = currentNum;

                //정답 제출을 즉각적으로 한다 -cheon-
                //다만 접속하여 문제 UI가 갱신되지 않았던 경우에는 제출하지 않는다 -cheon-
                if( submissionObject.submission_answer > -1) {
                    updateSubmission(submissionObject);
                }


                /*
                //초분할로 랜덤값 가져옴
                let idx = getRandomInt(0, 15);
                submissionObject.quiz_seq = currentNum;
                Console_Log('문제번호 :' + submissionObject.quiz_seq);
                Console_Log('updateSubmission 초 후 실행 :' + idx);

                //mileseconds로 변환
                idx = idx * 1000;
                setTimeout("updateSubmission(submissionObject)", idx);
                 */
            }
            if (current == 11) {
                //결과값 업데이트
                getCheckResult();
            }
            if (current == 12) {
                Console_Log('결과페이지로 이동');
                onResult();

                videoRemoveEventListener('timeupdate' , time_update())
                videoRemoveEventListener('seeked', seeked);

                stopYoutubeAndHide();
                return;
            } else {
                //문제 UI 적용 시점에 제출 답을 0으로 변경한다!!! -cheon-
                if( current <= 10)
                    submissionObject.submission_answer = 0;

                Console_Log('page:' + current + '업데이트');
                setDisplayInArray(current, currentNum);
            }
        }
    }
    pre = videoCurrentPos;
}

function seeked(){
    if( isSeekedByProgress == false ){
        location.reload();
    }
    isSeekedByProgress = false;
}


function initRadioButtons() {
    const answers = document.getElementsByName("tabs");
    answers.forEach((obj) => {
        obj.addEventListener("click", (event) => {
            var qObejct = event.target.id.split('_');//type_seq_question
            var qNum = qObejct[2].split('q')[1];
            var answer = qObejct[1].split('0')[1];
            var type = qObejct[0].split('t')[1];
            Console_Log("qnum:" + qNum + ", answer:" + answer + ", type:" + type);
            submissionObject.quiz_seq = qNum;
            submissionObject.submission_answer = answer;
            Console_Log(submissionObject);
        });
    });
}

const init = () => {
    //쿠키정보를 가져온다
    initSubmission();
    //보기 정보가 든 라디오버튼들을 초기화한다.
    initRadioButtons();


    videoAddEventListener('timeupdate', time_update);
    videoAddEventListener('seeked', seeked);
};

document.addEventListener('DOMContentLoaded', init);



