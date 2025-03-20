import numberBaseballGameView from './numberBaseballGameView.js';
import numberBaseballGameModel from './numberBaseballGameModel.js';

export default class numberBaseballGameController {
    #numberBaseballGameView;
    #numberBaseballGamemModel;

    constructor() {
        this.#numberBaseballGamemModel = new numberBaseballGameModel();
        this.#numberBaseballGameView = new numberBaseballGameView();
        this.#numberBaseballGameView.setFocusOnUserInput();
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

        if (!this.#numberBaseballGamemModel.checkUserInputValidation(user, messages)) {
            this.#numberBaseballGameView.showAlertMessage(messages);
            return;
        }
        const message = this.#numberBaseballGamemModel.play(user);
        this.#numberBaseballGameView.showMessage(message);
    }

    restartGame() {
        this.#numberBaseballGamemModel.setAnswer();
        this.#numberBaseballGameView.clearResultMessageValue();
        this.#numberBaseballGameView.clearUserInputValue();
        this.#numberBaseballGameView.toggleButtonState();
        this.#numberBaseballGameView.toggleUserInputState();
    }
}