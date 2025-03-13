// html 요소 할당
const button = document.getElementById("submit");
const resultMessage = document.getElementById("result");
const restartBt = document.getElementById("game-restart-button");
// 초기화 버튼 제거
restartBt.style.display = "none";

// 시작시 랜덤 숫자 생성 함수 호출
let pitcher = randomString();

// 컴퓨터의 랜덤 숫자 생성 함수
function randomString() {
    let vaildString = "";
    while(vaildString.length < 3){
        let randomNumber = MissionUtils.Random.pickNumberInRange(1, 9);
        vaildString = findVaildNumber(vaildString, randomNumber);
    }
    return vaildString;
} 

// 숫자의 중복 검사 함수
function findVaildNumber(vaildString, randomNumber) {
    if(vaildString.includes(randomNumber)) return vaildString;
    else return vaildString.concat(randomNumber);
}

// 사용자의 입력 유효성 검사
function vaildTypedNumber() {
    const input = document.getElementById("user-input").value.split("");
    let vaildInput = "";
    for(let i = 0; i < input.length; i++) {
        // 숫자인지 검사
        if(isNaN(Number(input[i]))) {
            console.log(Number(input[i]));
            return false
        };
        // 숫자 중복 검사
        vaildInput = findVaildNumber(vaildInput, input[i]);
    }
    // 3자리 숫자인지 검사
    if(vaildInput.length !== 3) return false;
    return vaildInput.split("");
}
