import verifyUserNumbers from '../utils/verifyUserNumbers.js';
export default class BaseballGameController {
  constructor(view, model) {
    this.view = view;
    this.model = model;
    this.view.startGame(this.startGame.bind(this));
  }

  createComputerNumbers() {
    this.model.createComputerNumbers();
    const { computerNumbers } = this.model;
    return computerNumbers;
  }

  countStrikeAndBall(computerNubers, userNumbers) {
    this.model.countStrikeAndBall(computerNubers, userNumbers);
  }

  renderResultMessage() {
    const resultMessage = this.model.createResultMessage();
    if (resultMessage === '3스트라이크') {
      this.view.restartGame();
    } else {
      this.view.renderResult(resultMessage);
    }
  }

  startGame() {
    const computerNubers = this.createComputerNumbers();
    const userInput = this.view.userInput.value;
    this.model.getUserNumber(userInput);
    const { userNumbers } = this.model;
    if (!verifyUserNumbers.validateNumber(userNumbers)) {
      return;
    }
    console.log(computerNubers);
    this.countStrikeAndBall(computerNubers, userNumbers);
    this.renderResultMessage();
    this.model.resetCount();
  }
}
