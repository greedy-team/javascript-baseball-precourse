import { createUniqueNumberString } from '../models/uniqueNumberString.js';
import { isValidInput } from '../models/inputValidation.js';
import { play } from '../models/play.js';
import { updateResult, clearInput, clearResult, showRestartAlert, hideRestartButton } from '../views/ui.js';
import { showInvalidAlert } from "../views/ui.js";

let uniqueNumberString = createUniqueNumberString();

export function baseballGame() {
    setOkButtonClickEvent(uniqueNumberString);
    setRestartButtonClickEvent(uniqueNumberString);
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
    const result = play(inputNumber, uniqueNumberString);
    updateResult(result);
}

function setRestartButtonClickEvent() {
    document.getElementById('game-restart-button').addEventListener('click', handleRestartButtonClick);
}

function handleRestartButtonClick(event) {
    event.preventDefault();
    uniqueNumberString = createUniqueNumberString();
    clearInput();
    clearResult();
    showRestartAlert();
    hideRestartButton();
}
