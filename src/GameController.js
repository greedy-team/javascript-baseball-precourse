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
    const form = document.querySelector("form");
    form.addEventListener("submit", processUserInput);

    const replay = document.querySelector("#game-restart-button");
    replay.addEventListener("click", gameStart);
}

function processUserInput(event) {
    event.preventDefault();
    let userInput = document.getElementById("user-input").value;
    let comparisionResult = game.handleUserInput(userInput);
    if (comparisionResult === "3스트라이크") {
        view.displaySuccessMessage();
    } else {
        view.displayResultMessage(comparisionResult);
    }
}
