import verifyUserNumbers from '../utils/verifyUserNumbers.js';
export default class BaseballGameController {
  constructor(view, model) {
    this.view = view;
    this.model = model;
    this.view.submitButton.addEventListener('click', this.startGame.bind(this));
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
      this.model.resetGame();
    } else {
      this.view.renderResult(resultMessage);
    }
  }

  playSingleRound(computerNumbers, userNumbers) {
    console.log(computerNumbers, userNumbers);
    this.countStrikeAndBall(computerNumbers, userNumbers);
    this.renderResultMessage();
    this.model.resetCount();
  }

  startGame(event) {
    event.preventDefault();
    this.view.settingGame();
    const computerNumbers = this.createComputerNumbers();
    const userInput = this.view.userInput.value;
    this.model.getUserNumber(userInput);
    const { userNumbers } = this.model;
    if (!verifyUserNumbers.validateNumber(userNumbers)) {
      return;
    }
    this.playSingleRound(computerNumbers, userNumbers);
  }
}
