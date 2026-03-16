// Model은 Controller와 View에 의존하지 않아야 한다.
// 데이터 저장 및 처리
class BaseballGameModel {
  constructor() {
    this.computerNumbers = [];
    this.userNumbers = [];
    this.strokes = 0;
    this.balls = 0;
  }
  play() {}
  getResult() {}
  toNumberArray() {}
  validateInput() {}
  randomNumbers() {}
}

export default BaseballGameModel;
