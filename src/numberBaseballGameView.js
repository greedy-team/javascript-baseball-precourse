import { CORRECT, INPUT_AGAIN_MESSAGE } from './constants.js';

export default class NumberBaseballGameView {
    #userInput;
    #resultMessage;
    #submitButton;
    #restartButton;

    constructor() {
        this.#userInput = document.querySelector('#user-input');
        this.#resultMessage = document.querySelector('#result');
        this.#submitButton = document.querySelector('#submit');
        this.#restartButton = document.querySelector('#game-restart-button');
        this.setFocusOnUserInput();
    }

    getSubmitButton() {
        return this.#submitButton;
    }

    getRestartButton() {
        return this.#restartButton;
    }

    getUserInput() {
        return this.#userInput;
    }

    setFocusOnUserInput() {
        this.#userInput.focus();
    }

    alertErrorMessageArrayToString(messageArray) {
        const errorMessage = messageArray.join('');
        alert(`${errorMessage}${INPUT_AGAIN_MESSAGE}`);
    }

    showGameResultMessage(message) {
        if (message === CORRECT) {
            this.clearResultMessageValue();
            this.showAnswerMessage();
            this.toggleButtonState();
            this.#userInput.disabled = true;
        }
        else {
            this.#resultMessage.textContent = message;
        }
    }

    showAnswerMessage() {
        const template = `
        <strong>🎉정답을 맞추셨습니다🎉</strong><br><br>
        게임을 다시 시작하시겠습니까?<br><br>
        `;

        const fragment = document.createRange().createContextualFragment(template);
        this.#resultMessage.append(fragment);
    }

    toggleButtonState() {
        this.#submitButton.disabled = !this.#submitButton.disabled;
        this.#restartButton.disabled = !this.#restartButton.disabled;
        this.#restartButton.style.display = this.#restartButton.style.display === 'none' ? 'block' : 'none';
    }

    clearUserInputValue() {
        this.#userInput.value = '';
    }

    clearResultMessageValue() {
        this.#resultMessage.textContent = '';
    }
}