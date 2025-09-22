// eslint-disable-next-line import/extensions
import BaseballGame from './BaseballGame.js';
// eslint-disable-next-line import/extensions
import GameView from './GameView.js';

const baseballGame = new BaseballGame();
baseballGame.setRandomAnswers();

const submitButtonHandle = GameView.getSubmitButtonHandle();
const restartButtonHandle = GameView.getRestartButtonHandle();
GameView.toggleGameRestartButton(false);

submitButtonHandle.addEventListener('click', () => {
  const userInput = GameView.getUserInputText();
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

restartButtonHandle.addEventListener('click', () => {
  baseballGame.setRandomAnswers();
  GameView.toggleGameRestartButton(false);
  GameView.clearUserInputText();
  GameView.showResult('');
});
