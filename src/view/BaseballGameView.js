export default class BaseballGameView {

    toggleButtons(visible) {
        document.querySelector("#submit").style.display = visible ? 'block' : 'none';
        document.querySelector("#game-restart-button").style.display = visible ? 'none' : 'block';
    }

    resetResult() {
        const output = document.querySelector("#result");
        output.textContent = '';
    }

    printResult(result) {
        const output = document.querySelector("#result");
        output.textContent = result;
    }
}