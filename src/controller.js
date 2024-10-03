import {BaseballGameModel} from "./model.js";
import {clearInputField, inputField, showRestartButton, showResult} from "./view.js";
import {checkDuplicateNumbers, validateUserInput} from "./validate.js";

export class BaseballGameController {
  constructor() {
    this.model = new BaseballGameModel();
  }

  // 사용자 입력을 받는 메서드
  getUserInput(event) {
    event.preventDefault();

    let userInput = inputField.value;
    if (!checkDuplicateNumbers(userInput)) {
      alert("1~9까지의 수를 중복없이 3개 입력해주세요.");
      clearInputField();
      return "";
    }

    return validateUserInput(userInput);
  }

  play(event) {
    const userInput = this.getUserInput(event);
    if (userInput === "") return;

    const userString = String(userInput);
    const computerString = String(this.model.computerInput);
    const [strikeCnt, ballCnt] = this.model.countStrikeAndBall(computerString, userString);

    if (strikeCnt === 0 && ballCnt === 0) return "낫싱";
    if (strikeCnt === 3) return "정답입니다!";
    if (strikeCnt !== 0 && ballCnt === 0) return `${strikeCnt}스트라이크`;
    if (strikeCnt === 0 && ballCnt !== 0) return `${ballCnt}볼`;
    return `${ballCnt}볼 ${strikeCnt}스트라이크`;
  }

  // 뷰가 결과와 재시작 버튼을 보여주게 하는 메서드
  showGameResult(event) {
    const result = this.play(event);
    showResult(result);
    if (result === "정답입니다!") showRestartButton(true);
  }
}
