export default class GameView {
  /** @type { (bool) => void } */
  static toggleGameRestartButton(shouldShow) {
    const gameRestartButton = document.querySelector('#game-restart-button');

    if (shouldShow) {
      gameRestartButton.style.display = 'block';
    } else if (!shouldShow) {
      gameRestartButton.style.display = 'none';
    }
  }

  /** @type {() => void} */
  static clearUserInputText() {
    document.querySelector('#user-input').value = '';
  }

  /** @type {(string) => void} */
  static alertMessage(message) {
    /* eslint-disable no-alert */
    alert(message);
    /* eslint-enable no-alert */
  }

  /** @type {(string) => void} */
  static showResult(result) {
    let textToPrint = result;

    if (result === '3스트라이크') {
      textToPrint = '축하합니다!\n정답을 맞추셨습니다!';
    }

    document.querySelector('#result').textContent = textToPrint;
  }
}
