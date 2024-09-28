import createNumber from './createNumbers.js';
import getUserInput from './getUserInput.js';
import compareAnswer from './compareAnswer.js';

const resultText = document.getElementById('result');
const submitButton = document.getElementById('submit');
const userText = document.getElementById('user-input');
const restartButton = document.getElementById('game-restart-button');

export default class BaseballGame {
  constructor() {
    this.computerInputNumbers = createNumber();
    this.userInputNumbers = '';
    this.isEnd = false;
    console.log(this.computerInputNumbers);
  }

  play(computerInputNumbers, userInputNumbers) {
    const resultMessage = compareAnswer(computerInputNumbers, userInputNumbers);
    return resultMessage;
  }

  playSingleRound() {
    this.userInputNumbers = getUserInput(userText.value);
    if (this.userInputNumbers) {
      const userInputs = [...this.userInputNumbers];
      const computerInputs = [...this.computerInputNumbers];
      const result = this.play(computerInputs, userInputs);
      this.viewResultMessage(result);
    }
  }

  gameSettingAndStart() {
    resultText.innerText = null;
    restartButton.style.visibility = 'hidden';
    submitButton.addEventListener('click', (event) => {
      event.preventDefault();
      if (!this.isEnd) {
        this.playSingleRound();
      }
    });
  }

  viewResultMessage(result) {
    if (result !== '3스트라이크') {
      resultText.innerText = result;
    } else if (result === '3스트라이크') {
      this.EndgameAndReset();
    }
  }

  EndgameAndReset() {
    resultText.innerText =
      '🎉정답을 맞추셨습니다🎉 게임을 새로 시작하겠습니까?';
    restartButton.style.visibility = 'visible';
    this.isEnd = true;
  }
}

let game = new BaseballGame();
game.gameSettingAndStart();

restartButton.addEventListener('click', () => {
  game = new BaseballGame();
  game.gameSettingAndStart();
  userText.value = '';
});
