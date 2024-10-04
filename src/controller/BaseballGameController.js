import NumberUtils from "../utils/NumberUtils.js";
import BaseballGameView from "../view/BaseBallGameView.js";
import BaseballGame from "../model/BaseballGame.js";

export default class BaseballGameController {

    constructor() {
        this.NumberUtils = new NumberUtils();
        this.BaseballGameView = new BaseballGameView();
        this.BaseballGame = new BaseballGame();
        this.gameStart();
    }

    endGame(result) {
        this.BaseballGameView.printCongurateWinner(result);
        this.BaseballGameView.toggleButtons(false);
        const restartButton = document.querySelector("#game-restart-button");
        restartButton.addEventListener('click', () => this.restart());
    }

    restart() {
        this.BaseballGameView.resetInput();
        this.BaseballGameView.resetResult();
        this.BaseballGameView.toggleButtons(true);
        this.BaseballGame.resetComputerNumbers();
        this.gameStart();
    }

    gameStart() {
        const input = document.querySelector("#user-input");
        const submitButton = document.querySelector("#submit");

        this.BaseballGame.setComputerNumbers();

        submitButton.addEventListener('click', (event) => {
            event.preventDefault();

            const userInput = input.value;
            const userNumbers = this.NumberUtils.inputConvertNumbers(userInput);

            if (!this.validateUserInput(userInput, userNumbers)) {
                return;
            }

            const result = this.BaseballGame.play(userNumbers);
            this.BaseballGameView.printResult(result);

            if (this.NumberUtils.isPlayerWinner(result)){
                this.endGame(result);
            }
        });
    }

    validateUserInput(userInput, userNumbers) {
        if (!this.NumberUtils.validateNumbers(userInput)) {
            alert("잘못된 입력입니다. 중복되지 않는 서로 다른 3개의 숫자를 입력하세요.");
            return false;
        }
        else if(!this.NumberUtils.validateDifferentNumber(userNumbers)) {
            alert('잘못된 입력입니다. 1부터 9까지의 숫자만 입력하세요.');
            return false;
        }
        return true;
    }
}