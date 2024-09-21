export default class BaseballGameView {
    paintResult(result) {
        const resultContainer = document.querySelector("#result");
        resultContainer.innerHTML = this.printResult(result);
    }

    printResult(answer) {
        const correctness = this.checkCorrectAnswer(answer);

        if (correctness) {
            answer = "🎉정답을 맞추셨습니다🎉" + this.restartPart();
            const submitBtn = document.querySelector("#submit");
            submitBtn.disabled = true;
        }
        return answer;
    }

    restartPart() {
        const restartBtn = `<button id="game-restart-button">재시작</button>`;
        return `<div>게임을 다시 시작하시겠어요? <br/>${restartBtn}</div>`
    }

    checkCorrectAnswer(result) {
        return result === "3스트라이크";
    }
}