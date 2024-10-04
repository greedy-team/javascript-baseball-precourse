export default class BaseballGameView {

    toggleButtons(visible) {
        document.querySelector("#submit").style.display = visible ? 'block' : 'none';
        document.querySelector("#game-restart-button").style.display = visible ? 'none' : 'block';
    }

    printResult(result) {
        const output = document.querySelector("#result");
        output.textContent = result;
    }

    resetResult() {
        const output = document.querySelector("#result");
        output.textContent = '';
    }

    resetInput() {
        const input = document.querySelector("#user-input");
        input.value = '';
    }

    printCongurateWinner(result) {
        alert(result + " 축하드립니다!");
    }
}