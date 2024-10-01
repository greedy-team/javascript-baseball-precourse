import {inputField, validateInput, validateUserInput} from "./validate.js";

const submitBtn = document.getElementById("submit");
const result = document.getElementById("result");
const restartBtn = document.getElementById("game-restart-button");

restartBtn.addEventListener("click", () => {
  location.reload();
});

class BaseballGame {
  constructor() {
    this.result = "";
    this.computerInput = this.getComputerInput();
  }

  getComputerInput() {
    let randomNumber = [0, 0, 0];
    randomNumber[0] = MissionUtils.Random.pickNumberInRange(1, 9);
    for (let i = 1; i < 3; i++) {
      let pickedNumber = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!randomNumber.includes(pickedNumber)) randomNumber[i] = pickedNumber;
      else i -= 1;
    }
    console.log(randomNumber[0] * 100 + randomNumber[1] * 10 + randomNumber[2]);
    return randomNumber[0] * 100 + randomNumber[1] * 10 + randomNumber[2];
  }

  getUserInput(event) {
    event.preventDefault();

    let userInput = inputField.value;
    if (!validateInput(userInput)) {
      alert("1~9까지의 수를 중복없이 3개 입력해주세요.");
      inputField.value = "";
      return "";
    }
    return validateUserInput(userInput);
  }

  countStrikeAndBall(computerString, userString) {
    let strikeCnt = 0;
    let ballCnt = 0;

    for (let i = 0; i < 3; i++) {
      if (computerString[i] === userString[i]) {
        strikeCnt += 1;
        continue;
      }
      if (computerString.includes(userString[i])) ballCnt += 1;
    }
    return [strikeCnt, ballCnt];
  }

  play(event) {
    const userInput = this.getUserInput(event);
    if (userInput === "") return;

    const userString = String(userInput);
    const computerString = String(this.computerInput);
    const [strikeCnt, ballCnt] = this.countStrikeAndBall(computerString, userString);

    if (strikeCnt === 0 && ballCnt === 0) return "낫싱";
    if (strikeCnt === 3) return "정답입니다!";
    if (strikeCnt !== 0 && ballCnt === 0) return `${strikeCnt}스트라이크`;
    if (strikeCnt === 0 && ballCnt !== 0) return `${ballCnt}볼`;
    return `${ballCnt}볼 ${strikeCnt}스트라이크`;
  }

  displayResult(event) {
    this.result = this.play(event);
    if (this.result !== undefined) result.innerText = this.result;  // 잘못된 입력이면 결과를 업데이트 하지 않음

    if (this.result === "정답입니다!") {
      restartBtn.hidden = false;
      submitBtn.disabled = true;
    }
  }
}

const baseballGame = new BaseballGame();
submitBtn.addEventListener("click", (event) => baseballGame.displayResult(event));
