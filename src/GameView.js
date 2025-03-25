//뷰
export default class GameView {
    displaySuccessMessage() {
        document.querySelector("#result").style.display = "none";
        document.querySelector(".success").style.display = "block";

        const submitBtn = document.querySelector("#submit");
        submitBtn.disabled = true;
    }

    resetGameUI() {
        const submitBtn = document.querySelector("#submit");
        submitBtn.disabled = false;

        document.querySelector(".success").style.display = "none";
        const form = document.getElementById("user-input");
        form.value = null;
    }

    displayResultMessage(comparisionResult) {
        let gameResult = document.querySelector("#result");
        gameResult.style.display = "block";
        gameResult.textContent = comparisionResult;
    }

    getFormElement() {
        return document.querySelector("form");
    }
    getRestartButton() {
        return document.querySelector("#game-restart-button");
    }
    getUserInputValue() {
        return document.getElementById("user-input").value;
    }
}
