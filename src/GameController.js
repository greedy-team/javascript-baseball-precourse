//컨트롤러

import BaseballGame from "./BaseballGame.js";
import { displaySuccessMessage, displayResultMessage } from "./GameView.js"

export function gameStart() {

    const game = new BaseballGame();

    const form = document.querySelector("form");
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        let userInput = document.getElementById("user-input").value;
        let comparisionResult = game.handleUserInput(userInput);
        if (comparisionResult === "3스트라이크") {
            displaySuccessMessage();
        } else {
            displayResultMessage(comparisionResult);
        }
    });
}

export function gameReplay() {

    const submitBtn = document.querySelector("#submit");
    submitBtn.disabled = false;

    document.querySelector(".success").style.display = "none";

    gameStart();
}
