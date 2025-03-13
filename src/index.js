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

// 스트라이크 카운팅 함수
function countStrike(pitcher, batter) {
    let count = 0;

    for(let i = 0; i < 3; i++) {
        if (pitcher[i] === batter[i]) count++;
    }

    return count;
}

// 볼 카운팅 함수
function countBall(pitcher, batter) {
    let count = 0;

    for(let i = 0; i < 3; i++) {
        let newBatter = batter.filter((_, index) => index != i);
        if(newBatter.includes(pitcher[i])) count++;
    }

    return count;
}

// 오답 힌트 판별 함수
function play(pitcher, batter) {
    let strike = countStrike(pitcher, batter);
    let ball = countBall(pitcher, batter);

    if (strike == 3) successJudge();
    else if((strike + ball) == 0) return "낫싱";
    else if (strike == 0) return `${ball}볼`;
    else if (ball == 0) return `${strike}스트라이크 `;
    else return `${ball}볼 ${strike}스트라이크`;
}

// 정답 메시지 함수
function successJudge() {
    restartBt.style.display = "block";
    resultMessage.innerHTML = `🎉<strong>정답을 맞추셨습니다</strong>🎉<br><br>게임을 다시 시작하시겠습니까?<br><br>`
}

// "확인"버튼, 게임 플레이 함수
function start() {
    const batter = vaildTypedNumber();

    if(!batter) {
        alert("올바른 숫자를 입력해주세요!");
        return;
    }

    const message = play(pitcher, batter);

    if(message !== undefined) {
        resultMessage.innerText = message;
    }
}

// 게임 초기화 함수
function restart() {
    pitcher = randomString();
    document.getElementById("user-input").value = "";
    resultMessage.innerHTML = "";
    restartBt.style.display = "none";
}

// "확인"버튼 클릭 시
button.addEventListener("click", function(e) {
    e.preventDefault();
    start();
})

// "재시작"버튼 클릭 시
restartBt.addEventListener("click", function(e) {
    e.preventDefault();
    restart();
})