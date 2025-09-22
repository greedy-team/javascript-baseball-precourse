// eslint-disable-next-line import/extensions
import BaseballGame from './BaseballGame.js';
// eslint-disable-next-line import/extensions
import GameView from './GameView.js';

const baseballGame = new BaseballGame();
baseballGame.setRandomAnswers();
GameView.toggleGameRestartButton(false);

document.querySelector('#submit').addEventListener('click', () => {
  const userInput = document.querySelector('#user-input').value;
  let gameResult = '';

  if (baseballGame.play(userInput) === true) {
    gameResult = baseballGame.getResult();
  } else {
    GameView.alertMessage('입력값이 형식에 맞지 않습니다!');
    gameResult = '';
    GameView.clearUserInputText();
  }

  if (gameResult === '3스트라이크') {
    GameView.toggleGameRestartButton(true);
  }
  GameView.showResult(gameResult);
});

document.querySelector('#game-restart-button').addEventListener('click', () => {
  baseballGame.setRandomAnswers();
  GameView.toggleGameRestartButton(false);
  GameView.clearUserInputText();
  GameView.showResult('');
});
