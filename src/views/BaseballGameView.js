// View는 Model에만 의존해야 하고, Controller에는 의존하면 안된다.
// View가 Model로부터 데이터를 받을 때는, 사용자마다 다르게 보여주어야 하는 데이터에 대해서만 받아야 한다.
// View가 Model로 부터 데이터를 받을 때, 반드시 Controller에서 받아야 한다.
// 입력을 Controller로 전달

class BaseballGameView {
  // 생성자 에서 DOM 요소들을 선택하여 인스턴스 변수로 저장
  constructor() {
    this.userInput = document.querySelector("#user-input");
    this.submitButton = document.querySelector("#submit");
    this.resultDiv = document.querySelector("#result");
    this.restartButton = document.querySelector("#game-restart-button");
  }
}

export default BaseballGameView;
