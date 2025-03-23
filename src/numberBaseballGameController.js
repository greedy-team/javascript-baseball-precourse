import NumberBaseballGameView from './NumberBaseballGameView.js';
import NumberBaseballGameModel from './NumberBaseballGameModel.js';

export default class NumberBaseballGameController {
    #numberBaseballGameView;
    #numberBaseballGameModel;

    constructor() {
        this.#numberBaseballGameModel = new NumberBaseballGameModel();
        this.#numberBaseballGameView = new NumberBaseballGameView();
        this.setButtonEventListener();
    }

    setButtonEventListener() {
        const submitButton = this.#numberBaseballGameView.getSubmitButton();
        const restartButton = this.#numberBaseballGameView.getrestartButton();
        submitButton.addEventListener('click', (event) => this.startGame(event));
        restartButton.addEventListener('click', () =>  this.restartGame());
    }

    startGame(event) {
        event.preventDefault();

        const userInput = this.#numberBaseballGameView.getUserInput();
        const user = userInput.value.trim();
        const errorMessages = [];

        if (!this.#numberBaseballGameModel.checkUserInputValidation(user, errorMessages)) {
            this.#numberBaseballGameView.showErrorMessage(errorMessages);
            return;
        }
        const gameResultMessage = this.#numberBaseballGameModel.play(user);
        this.#numberBaseballGameView.showGameResultMessage(gameResultMessage);
    }

    restartGame() {
        this.#numberBaseballGameModel.setNewAnswerString();
        this.#numberBaseballGameView.clearResultMessageValue();
        this.#numberBaseballGameView.clearUserInputValue();
        this.#numberBaseballGameView.toggleButtonState();
        this.#numberBaseballGameView.toggleUserInputState();
    }
}