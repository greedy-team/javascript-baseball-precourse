//컨트롤러

import BaseballGame from "./BaseballGame.js";
import GameView from "./GameView.js"

let game;
let view;

export function gameStart() {

    game = new BaseballGame();
    view = new GameView();

    view.resetGameUI();
    setEventListeners();
}

function setEventListeners() {
    const form = view.getFormElement();
    form.addEventListener("submit", processUserInput);

    const replay = view.getRestartButton();
    replay.addEventListener("click", gameStart);
}

function processUserInput(event) {
    event.preventDefault();
    let userInput = view.getUserInputValue();
    let comparisionResult = game.handleUserInput(userInput);
    if (comparisionResult === "3스트라이크") {
        view.displaySuccessMessage();
    } else {
        view.displayResultMessage(comparisionResult);
    }
}
