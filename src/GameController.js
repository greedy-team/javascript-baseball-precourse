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
            gameReplay();
        } else {
            view.displayResultMessage(comparisionResult);
        }
    });
}

function gameReplay() {
    const replay = document.querySelector("#game-restart-button");
    replay.addEventListener("click", (event) => {
        event.preventDefault();
        const view = new GameView();
        view.resetGameUI();
        gameStart();
    });
}
