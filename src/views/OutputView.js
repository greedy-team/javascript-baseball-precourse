export default class OutputView {
    constructor() {
        this.result = document.getElementById('result');
        this.restartBtn = document.getElementById('game-restart-button');
        
        this.restartBtn.style.display = "none";
    }

    showResult(message, isAnswer) {
        this.result.innerHTML = message;
        this.restartBtn.style.display = isAnswer ? "block" : "none";
    }

    showError(errorMessage) {
        alert(errorMessage);
    }

    clearResult() {
        this.result.innerHTML = "";
        this.restartBtn.style.display = "none";
    }

    // 재시작 버튼 클릭 이벤트 바인딩
    bindRestartEvent(handler) {
        this.restartBtn.addEventListener("click", () => {
            handler();
        });
    }
}