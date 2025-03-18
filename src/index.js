import BaseballGame from './BaseBallGame.js';
import { CORRECT, DUPLICATE_ERROR_MESSAGE, INPUT_AGAIN_MESSAGE, STRING_LENGTH_ERROR_MESSAGE } from './constants.js';

const userInput = document.querySelector('#user-input');
const submitButton = document.querySelector('#submit');
const resultMessage = document.querySelector('#result');
const restartButton = document.querySelector('#game-restart-button');

let answer = createRandomNumber();

submitButton.addEventListener('click', gameStart);
restartButton.addEventListener('click', restartGame);

function createRandomNumber() {
    const numbers = [];
    while (numbers.length < 3) {
        const num = MissionUtils.Random.pickNumberInRange(1, 9);
        if (!numbers.includes(num)) numbers.push(num);
    }
    return numbers.join("");
}

function gameStart(event) {
    event.preventDefault();

    const user = userInput.value.trim();
    if (!checkValidation(user)) {
        alert("잘못된 값을 입력했습니다! 다시 입력해주세요.");
        return;
    }
    const message = new BaseballGame().play(answer, user);
    showMessage(message);
}

function checkValidation(value) {
    if(!checkIsNumber(value)) return false; 
    if(!checkDuplicate(value)) return false;
    if(!checkNumberLength(value)) return false;
    return true;
}

function checkIsNumber(value) {
    return /^[1-9]{3}$/.test(value);    
}

function checkDuplicate(value) {
    return new Set(value).size === 3;
}

function checkNumberLength(value) {
    return value.length === 3;
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
    answer = createRandomNumber();
    showSubmitButton();
    resultMessage.innerHTML = '';
    userInput.value = '';
}