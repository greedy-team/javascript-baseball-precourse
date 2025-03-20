import NumberBaseballGameView from './NumberBaseballGameView.js';
import NumberBaseballGameModel from './NumberBaseballGameModel.js';

export default class NumberBaseballGameController {
    #numberBaseballGameView;
    #numberBaseballGameModel;

    constructor() {
        this.#numberBaseballGameModel = new NumberBaseballGameModel();
        this.#numberBaseballGameView = new NumberBaseballGameView();
        this.setupButtonEventListener();
    }

    setupButtonEventListener() {
        const submitButton = this.#numberBaseballGameView.getSubmitButtonElement();
        const restartButton = this.#numberBaseballGameView.getrestartButtonElement();
        submitButton.addEventListener('click', (event) => this.gameStart(event));
        restartButton.addEventListener('click', () =>  this.restartGame());
    }

    gameStart(event) {
        event.preventDefault();

        const userInput = this.#numberBaseballGameView.getUserInputElement();
        const user = userInput.value.trim();
        const messages = [];

            this.#numberBaseballGameView.showAlertMessage(messages);
        if (!this.#numberBaseballGameModel.checkUserInputValidation(user, messages)) {
            return;
        }
        this.#numberBaseballGameView.showMessage(message);
        const message = this.#numberBaseballGameModel.play(user);
    }

    restartGame() {
        this.#numberBaseballGameModel.setAnswer();
        this.#numberBaseballGameView.clearResultMessageValue();
        this.#numberBaseballGameView.clearUserInputValue();
        this.#numberBaseballGameView.toggleButtonState();
        this.#numberBaseballGameView.toggleUserInputState();
    }
}