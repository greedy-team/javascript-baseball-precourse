import BaseBallGame from './baseBallGame.js';
import View from './view.js';

const baseBallGame = BaseBallGame();
const view = View({
  onSubmit: (userInput) => {
    try {
      const result = baseBallGame.handleUserInput(userInput);
      if (result === 'win') {
        view.displayGameWinView();
      } else {
        view.updateView(result);
      }
    } catch (error) {
      view.displayErrorView();
    }
  },
  onRestart: () => {
    baseBallGame.startGame();
    view.displayGameStartView();
  },
});

view.displayGameStartView();
baseBallGame.startGame();
