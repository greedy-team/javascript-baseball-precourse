  import NumberUtils from "./utils/NumberUtils.js";
  import BaseballGameView from "./view/BaseBallGameView.js";
  import BaseballGame from "./model/BaseBallGame.js";

  export default class BaseballGameController {

    constructor() {
      this.NumberUtils = new NumberUtils();
      this.BaseballGameView = new BaseballGameView();
      this.BaseballGame = new BaseballGame();
      this.gameStart();
    }

    endGame(result) {
      setTimeout(function() {
        alert(result + " 축하드립니다!");
      }, 1);

      const restartButton = document.querySelector("#game-restart-button");

      this.BaseballGameView.toggleButtons(false);

      restartButton.addEventListener('click', () => this.restart());
    }

    restart() {
      this.BaseballGame.scomputerNumbers = this.BaseballGame.makeComputerNumbers();
      this.BaseballGameView.resetInput();
      this.BaseballGameView.resetResult();
      this.BaseballGameView.toggleButtons(true);
    }

    gameStart() {
      const input = document.querySelector("#user-input");
      const submitButton = document.querySelector("#submit");

      this.BaseballGame.computerNumbers = this.BaseballGame.makeComputerNumbers();

      submitButton.addEventListener('click', (event) => {
        event.preventDefault();
        
        console.log(this.BaseballGame.computerNumbers);

        const userInput = input.value;
        const userNumbers = userInput.split('').map(Number);

        if (!this.NumberUtils.validateLength(userNumbers) ||
            !this.NumberUtils.validateNumbers(userInput) ||
            !this.NumberUtils.validateDifferentNumber(userNumbers)) {
          return;
        }

        const result = this.BaseballGame.play(userNumbers, this.BaseballGame.computerNumbers);
        this.BaseballGameView.printResult(result);

        if(this.NumberUtils.isPlayerWinner(result)){
          this.endGame(result);
        }
      });
    }
  }

new BaseballGameController();