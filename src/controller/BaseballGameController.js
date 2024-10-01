import VerifyUserNumbers from '../utils/VerifyUserNumbers.js';
export default class BaseballGameController {
  constructor(view, model) {
    this.view = view;
    this.model = model;
    this.view.submitButton.addEventListener('click', this.startGame.bind(this));
  }

  renderResultMessage(userNumbers) {
    const resultMessage = this.model.createResultMessage(userNumbers);
    if (resultMessage === '3스트라이크') {
      this.view.restartGame();
      this.model.initComputerNumbers();
    } else {
      this.view.renderResult(resultMessage);
    }
  }

  playSingleRound() {
    const userInput = this.view.userInput.value;
    this.model.getUserNumber(userInput);
    const { userNumbers } = this.model;
    if (!VerifyUserNumbers.validateNumber(userNumbers)) {
      return null;
    }
    this.renderResultMessage(userNumbers);
  }

  startGame(event) {
    event.preventDefault();
    this.view.settingGame();
    this.playSingleRound();
  }
}
