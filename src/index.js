import createNumber from './createNumbers.js';
import userInput from './userInput.js';
import compareAnswer from './compareAnswer.js';

let resultText = document.getElementById('result');
let submitButton = document.getElementById('submit');
let restartButton = document.querySelector('#game-restart-button');
let userText = document.getElementById('user-input');

export default class BaseballGame {
  constructor() {
    this.computerInputNumbers = createNumber();
    console.log(this.computerInputNumbers);
    this.isEnd = false;
  }

  play(computerInputNumbers, userInputNumbers) {
    if (userInputNumbers) {
      computerInputNumbers = [...computerInputNumbers];
      userInputNumbers = [...userInputNumbers];
      let result = compareAnswer(computerInputNumbers, userInputNumbers);
      if (result === '3스트라이크') this.reset();
      console.log(result);
      resultText.innerText = result;
    }
  }

  start() {
    restartButton.style.visibility = 'hidden';
    resultText.innerHTML = null;
    submitButton.addEventListener('click', (event) => {
      event.preventDefault();
      if (!this.isEnd) {
        const userInputNumbers = userInput(userText.value);
        this.play(this.computerInputNumbers, userInputNumbers);
      }
    });
  }
}

let game = new BaseballGame();
game.start();
