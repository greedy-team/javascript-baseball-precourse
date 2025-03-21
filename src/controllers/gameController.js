import { createUniqueNumberString } from '../models/uniqueNumberString.js';
import { isValidInput } from '../models/inputValidation.js';
import { play } from '../models/play.js';
import { updateResult, clearInput, clearResult, showRestartAlert, hideRestartButton } from '../views/ui.js';
import { showInvalidAlert } from "../views/ui.js";

let randomNumber = createUniqueNumberString();

export function baseballGame() {
    setOkButtonClickEvent(randomNumber);
    setRestartButtonClickEvent(randomNumber);
}

function setOkButtonClickEvent() {
    document.getElementById('submit').addEventListener('click', handleOkButtonClick)
}

function handleOkButtonClick(event) {
    event.preventDefault();
    const inputNumber = document.getElementById('user-input').value;
    if (!isValidInput(inputNumber)) {
        showInvalidAlert();
    }
    const result = play(inputNumber, randomNumber);
    updateResult(result);
}

function setRestartButtonClickEvent() {
    document.getElementById('game-restart-button').addEventListener('click', handleRestartButtonClick);
}

function handleRestartButtonClick(event) {
    event.preventDefault();
    randomNumber = createUniqueNumberString();
    clearInput();
    clearResult();
    showRestartAlert();
    hideRestartButton();
}
