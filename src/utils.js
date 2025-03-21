import { successJudge } from "./numberBaseballGame.js";

// 숫자의 중복 검사 함수
function findVaildNumber(vaildString, randomNumber) {
    if(vaildString.includes(randomNumber)) return vaildString;
    return vaildString.concat(randomNumber);
}

// 컴퓨터의 랜덤 숫자 생성 함수
export function randomString() {
    let vaildString = "";
    while(vaildString.length < 3){
        let randomNumber = MissionUtils.Random.pickNumberInRange(1, 9);
        vaildString = findVaildNumber(vaildString, randomNumber);
    }
    return vaildString;
} 


// 사용자의 입력 유효성 검사
export function vaildTypedNumber() {
    const input = document.getElementById("user-input").value.split("");
    let vaildInput = "";
    for(let i = 0; i < input.length; i+=1) {
        // 숫자인지 검사
        if(isNaN(Number(input[i]))) {
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

    for(let i = 0; i < 3; i+=1) {
        if (pitcher[i] === batter[i]) count++;
    }

    return count;
}

// 볼 카운팅 함수
function countBall(pitcher, batter) {
    let count = 0;

    for(let i = 0; i < 3; i+=1) {
        let newBatter = batter.filter((_, index) => index != i);
        if(newBatter.includes(pitcher[i])) count++;
    }

    return count;
}

// 오답 힌트 판별 함수
export function play(pitcher, batter) {
    let strike = countStrike(pitcher, batter);
    let ball = countBall(pitcher, batter);

    if (strike === 3) successJudge();
    else if((strike + ball) === 0) return "낫싱";
    else if (strike === 0) return `${ball}볼`;
    else if (ball === 0) return `${strike}스트라이크 `;
    else return `${ball}볼 ${strike}스트라이크`;
}