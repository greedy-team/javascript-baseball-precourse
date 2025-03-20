//컨트롤러

import BaseballGame from "./BaseballGame.js";
import GameView from "./GameView.js"

export function gameStart() {

    const game = new BaseballGame();
    const view = new GameView();

    const form = document.querySelector("form");
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        let userInput = document.getElementById("user-input").value;
        let comparisionResult = game.handleUserInput(userInput);
        if (comparisionResult === "3스트라이크") {
            view.displaySuccessMessage();
        } else {
            view.displayResultMessage(comparisionResult);
        }
    });
}

export function gameReplay() {
    const view = new GameView();
    view.resetGameUI();
    gameStart();
}
