const restartButton = document.querySelector('#game-restart-button');
export default class BaseballGameView {
  constructor() {
    this.userInput = document.querySelector('#user-input');
    this.resultText = document.querySelector('#result');
    this.submitButton = document.querySelector('#submit');
    this.restartButton = document.querySelector('#game-restart-button');
  }

  renderResult(resultMessage) {
    this.resultText.innerText = resultMessage;
  }

  settingGame() {
    this.renderResult('');
    this.restartButton.style.visibility = 'hidden';
  }

  restartGame() {
    this.resultText.innerText =
      '🎉정답을 맞추셨습니다🎉 게임을 새로 시작하시겠습니까?';
    this.restartButton.style.visibility = 'visible';
    this.userInput.value = '';
    this.restartButton.addEventListener(
      'click',
      () => {
        this.settingGame();
      },
      { once: true }
    );
  }
}
