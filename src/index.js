import BaseballGame from './BaseBallGame.js';
import { CORRECT, DUPLICATE_ERROR_MESSAGE, INPUT_AGAIN_MESSAGE, STRING_LENGTH_ERROR_MESSAGE } from './constants.js';

const userInput = document.querySelector('#user-input');
const submitButton = document.querySelector('#submit');
const resultMessage = document.querySelector('#result');
const restartButton = document.querySelector('#game-restart-button');

const game = new BaseballGame();

submitButton.addEventListener('click', gameStart);
restartButton.addEventListener('click', restartGame);
document.getElementById('user-input').focus();

function gameStart(event) {
    event.preventDefault();

    const user = userInput.value.trim();
    const messages = [];

    if (!checkUserInputValidation(user, messages)) {
        showAlertMessage(messages);
        return;
    }
    const message = game.play(user);
    showMessage(message);
}

function showAlertMessage(messages) {
    const message = messages.join('');
    alert(`${message}` + INPUT_AGAIN_MESSAGE);
}

function checkUserInputValidation(value, messages) {
    let isValid = true;
    if (!checkStringLengthIsThree(value)) {
        if (!messages.includes(STRING_LENGTH_ERROR_MESSAGE)) messages.push(STRING_LENGTH_ERROR_MESSAGE);
        isValid = false;
    }
    if (!checkDuplicate(value)) {
        if (!messages.includes(DUPLICATE_ERROR_MESSAGE)) messages.push(DUPLICATE_ERROR_MESSAGE);
        isValid = false;
    }
    return isValid;
}

function checkStringLengthIsThree(value) {
    return /^[1-9]{3}$/.test(value);
}

function checkDuplicate(value) {
    return new Set(value).size === value.length;
}

function showMessage(message) {
        showRestartButton();
    if (message === CORRECT) {
        resultMessage.innerHTML = '🎉<strong>정답을 맞추셨습니다</strong>🎉<br><br>게임을 다시 시작하시겠습니까?<br><br>';
    }
    else {
        resultMessage.textContent = message;
    }
}

function showRestartButton() {
    submitButton.disabled = true;
    restartButton.disabled = false;
    restartButton.style.display = "block";
}

function showSubmitButton() {
    submitButton.disabled = false;
    restartButton.disabled = true;
    restartButton.style.display = "none";
}

function restartGame() {
    showSubmitButton();
    game.setAnswer();
    resultMessage.innerHTML = '';
    userInput.value = '';
}