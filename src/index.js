import { start, restart } from "./numberBaseballGame.js";
import { randomString } from "./utils.js";

// html 요소 할당
const button = document.getElementById("submit");
const restartBt = document.getElementById("game-restart-button");
let pitcher;

function initGame() {
    pitcher = randomString();
}

// 시작시 랜덤 숫자 생성 함수 호출
initGame();

// "확인"버튼 클릭 시
button.addEventListener("click", function(e) {
    e.preventDefault();
    start(pitcher);
})

// "재시작"버튼 클릭 시
restartBt.addEventListener("click", function(e) {
    e.preventDefault();
    initGame();
    restart();
})