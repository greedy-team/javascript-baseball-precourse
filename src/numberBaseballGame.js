import { vaildTypedNumber, play } from "./utils.js";

// html 요소 할당
const resultMessage = document.getElementById("result");
const restartBt = document.getElementById("game-restart-button");
// 초기화 버튼 제거
restartBt.style.display = "none";

// 정답 메시지 함수
export function successJudge() {
    // bold체를 위한 요소 생성
    const strong = document.createElement("strong");    
    restartBt.style.display = "block";

    strong.innerText = "🎉정답을 맞추셨습니다🎉";
    resultMessage.innerText = ""
    resultMessage.appendChild(strong);
    resultMessage.innerText += "\n게임을 다시 시작하시겠습니까?\n"
}

// "확인"버튼, 게임 플레이 함수
export function start(pitcher) {
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
export function restart() {
    document.getElementById("user-input").value = "";
    resultMessage.innerText = "";
    restartBt.style.display = "none";
}