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
        const submitButton = this.#numberBaseballGameView.getSubmitButton();
        const restartButton = this.#numberBaseballGameView.getrestartButton();
        submitButton.addEventListener('click', (event) => this.gameStart(event));
        restartButton.addEventListener('click', () =>  this.restartGame());
    }

    gameStart(event) {
        event.preventDefault();

        const userInput = this.#numberBaseballGameView.getUserInput();
        const user = userInput.value.trim();
        const messages = [];

        if (!this.#numberBaseballGameModel.checkUserInputValidation(user, messages)) {
            this.#numberBaseballGameView.showErrorMessage(messages);
            return;
        }
        const message = this.#numberBaseballGameModel.play(user);
        this.#numberBaseballGameView.showBaseballGameResultMessage(message);
    }

    restartGame() {
        this.#numberBaseballGameModel.setAnswer();
        this.#numberBaseballGameView.clearResultMessageValue();
        this.#numberBaseballGameView.clearUserInputValue();
        this.#numberBaseballGameView.toggleButtonState();
        this.#numberBaseballGameView.toggleUserInputState();
    }
}