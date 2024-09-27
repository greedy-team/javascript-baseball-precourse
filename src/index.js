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
  }

  play(computerInputNumbers, userInputNumbers) {
    if (userInputNumbers) {
      console.log(userInputNumbers);
      computerInputNumbers = [...computerInputNumbers];
      userInputNumbers = [...userInputNumbers];
      const resultMessage = compareAnswer(
        computerInputNumbers,
        userInputNumbers
      );
      return resultMessage;
    }
  }

  playSingleRound() {
    if (!this.isEnd) {
      this.userInputNumbers = getUserInput(userText.value);
      const result = this.play(
        this.computerInputNumbers,
        this.userInputNumbers
      );
      this.viewResultMessage(result);
    }
  }

  gameSettingAndStart() {
    resultText.innerText = null;
    restartButton.style.visibility = 'hidden';
    submitButton.addEventListener('click', (event) => {
      event.preventDefault();
      this.playSingleRound();
    });
  }

  viewResultMessage(result) {
    if (result && result !== '3스트라이크') {
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
