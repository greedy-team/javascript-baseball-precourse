import {BaseballGameModel} from "./model.js";
import {clearInputField, inputField, showRestartButton, showResult, submitBtn} from "./view.js";
import {checkDuplicateNumbers, validateUserInput} from "./validate.js";

export class BaseballGameController {
  constructor() {
    this.model = new BaseballGameModel();
    this.addEventListeners();
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

    // 모델에서 볼, 스트라이크 계산
    return this.model.returnResult(computerString, userString);
  }

  // 뷰가 결과와 재시작 버튼을 보여주게 하는 메서드
  showGameResult(event) {
    const result = this.play(event);
    showResult(result);
    if (result === "정답입니다!") showRestartButton(true);
  }

  // submit버튼에 이벤트리스너를 추가하는 메서드
  addEventListeners() {
    submitBtn.addEventListener("click", (event) => this.showGameResult(event)); // submitBtn 클릭 이벤트 연결
  }
}
