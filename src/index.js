import { inputField, validateInput, validateUserInput } from "./validate.js";

const submitBtn = document.getElementById("submit");
const result = document.getElementById("result");
const restartBtn = document.getElementById("game-restart-button");

restartBtn.addEventListener("click", () => {
  location.reload();
});

submitBtn.addEventListener("click", BaseballGame);

let computerInput;
let pickedNumber;
let userInput = "";

function BaseballGame() {
  this.play = function (computerInput, userInput) {
    let result = "";

    getUserInput(event);
    const userString = String(userInput);
    const computerString = String(computerInput);

    const [strikeCnt, ballCnt] = countStrikeBall(computerString, userString);

    if (strikeCnt === 0 && ballCnt === 0) return (result = "낫싱");
    if (strikeCnt === 3) return (result = "정답입니다!");
    if (strikeCnt !== 0 && ballCnt === 0) return (result = `${strikeCnt}스트라이크`);
    if (strikeCnt === 0 && ballCnt !== 0) return (result = `${ballCnt}볼`);

    return (result = `${ballCnt}볼 ${strikeCnt}스트라이크`);
  };

  userInput = getUserInput(event);
  if (userInput === "") return; // 잘못된 입력이 들어왔을 때는 경고창만 띄우고 아무것도 하지 않음

  this.result = this.play(computerInput, userInput);

  result.innerText = this.result; // 결과 표시
  if (this.result === "정답입니다!") {
    restartBtn.hidden = false; // 재시작 버튼 표시
    submitBtn.disabled = true; // 확인 버튼 비활성화
  }
}

// computerinput(정답)을 얻음
while (true) {
  pickedNumber = MissionUtils.Random.pickNumberInRange(100, 999);

  // 중복되지 않는 숫자 3개
  if (validateInput(pickedNumber)) {
    computerInput = pickedNumber;
    break;
  }
}
console.log(computerInput);

// userInput을 얻는 함수
function getUserInput(event) {
  event.preventDefault();

  userInput = inputField.value;

  if (!validateInput(userInput)) {
    alert("1~9까지의 수를 중복없이 3개 입력해주세요.");
    inputField.value = ""; // 입력창을 비움
    return ""; // 잘못된 입력
  }

  userInput = validateUserInput(userInput);
  if (userInput === "") return userInput; // 잘못된 입력
  return userInput;
}

// 스트라이크, 볼 개수를 세는 함수
function countStrikeBall(computerString, userString) {
  let strikeCnt = 0;
  let ballCnt = 0;
  let i;

  for (i = 0; i < 3; i++) {
    if (computerString[i] === userString[i]) {
      strikeCnt += 1;
      continue;
    }
    if (computerString.includes(userString[i])) ballCnt += 1;
  }

  return [strikeCnt, ballCnt];
}
