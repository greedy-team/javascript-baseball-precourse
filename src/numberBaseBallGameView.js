// View 파일

export default class NumberBaseballGameView {
    constructor() {
        this.elements = this.getDomElements();
    }

    getDomElements() {
        return {
            resultMessage: document.getElementById("result"),
            restartBt: document.getElementById("game-restart-button"),
            userInput: document.getElementById("user-input"),
            submitBt: document.getElementById("submit"),
        };
    }

    createResultMessage(result) {
        const { resultMessage, restartBt, userInput, submitBt } = this.elements;

        if (result === true) {
            resultMessage.innerText = '';
            const strong = document.createElement("strong");
            strong.textContent = '🎉정답을 맞추셨습니다🎉';
            resultMessage.appendChild(strong);
            resultMessage.innerText += '\n\n게임을 다시 시작하시겠습니까?\n\n';
            restartBt.style.display = 'block';
            userInput.disabled = true;
            submitBt.disabled = true;
        } else {
            resultMessage.innerText = `${result}`;
        }
    }
}
