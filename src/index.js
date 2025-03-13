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
