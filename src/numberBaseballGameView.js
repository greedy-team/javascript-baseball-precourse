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
    }

    getSubmitButtonElement() {
        return this.#submitButton;
    }

    getrestartButtonElement() {
        return this.#restartButton;
    }

    getUserInputElement() {
        return this.#userInput;
    }

    getResultMessageElement() {
        return this.#resultMessage;
    }

    setFocusOnUserInput() {
        this.#userInput.focus();
    }

    showAlertMessage(messages) {
        const errorMessage = messages.join('');
        alert(`${errorMessage}${INPUT_AGAIN_MESSAGE}`);
    }

    showMessage(message) {
        if (message === CORRECT) {
            this.clearResultMessageValue();
            this.showAnswerMessage();
            this.toggleButtonState();
            this.toggleUserInputState();
        }
        else {
            this.#resultMessage.textContent = message;
        }
    }

    showAnswerMessage() {
        const strongTag = document.createElement('strong');
        strongTag.textContent = '정답을 맞추셨습니다';
        this.#resultMessage.append('🎉', strongTag, '🎉', document.createElement('br'), document.createElement('br'), '게임을 다시 시작하시겠습니까?', document.createElement('br'), document.createElement('br'));
    }

    toggleButtonState() {
        this.#submitButton.disabled = !this.#submitButton.disabled;
        this.#restartButton.disabled = !this.#restartButton.disabled;
        this.#restartButton.style.display = this.#restartButton.style.display === 'none' ? 'block' : 'none';
    }

    toggleUserInputState() {
        this.#userInput.disabled = !this.#userInput.disabled;
    }

    clearUserInputValue() {
        this.#userInput.value = '';
    }

    clearResultMessageValue() {
        this.#resultMessage.textContent = '';
    }
}