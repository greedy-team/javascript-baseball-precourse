export default class BaseballGameView {
    constructor() {
        this.submitButton = document.querySelector('#submit');
        this.restartButton = document.querySelector("#game-restart-button");
        this.resultElement = document.querySelector("#result");
        this.userInputElement = document.querySelector("#user-input");
    }
    
    enableUserInput() {
        this.userInputElement.disabled = false;
    }

    disableUserInput() {
        this.userInputElement.disabled = true;
    }

    clearResult() {
        this.resultElement.innerHTML = "";
        this.hideRestartButton();
    }
    clearInput() {
        this.userInputElement.value = "";
    }

    showRestartButton() {
        this.restartButton.hidden = false;
    }
    
    hideRestartButton() {
        this.restartButton.hidden = true;
    }
    
    clearGameUI() {
        this.clearInput();
        this.clearResult();
    }

    alertInvalidReason(invalidReason) {
        alert("🚨 " + invalidReason);
    }

    updateGameResult(result) {
        if (result === "정답") {
            this.resultElement.innerHTML = 
            "🎉<strong>정답을 맞추셨습니다!</strong>🎉<br><br>게임을 다시 시작하시겠습니까?<br>";
            this.disableUserInput();
            this.showRestartButton();            
        } else {
            this.resultElement.textContent = result;
        }
    }
}