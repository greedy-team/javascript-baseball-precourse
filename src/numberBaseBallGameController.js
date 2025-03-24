// Controller 파일
import NumberBaseballGameModel from "./numberBaseBallGameModel.js";
import NumberBaseballGameView from "./numberBaseBallGameView.js";

export default class NumberBaseballGameController {
    constructor() {
        this.model = new NumberBaseballGameModel();
        this.view = new NumberBaseballGameView();
        this.start();
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const { userInput } = this.view.elements;
        const userInputNumber = userInput.value.split("");
        const inputNumber = this.model.vaildTypedNumber(userInputNumber);

        if (!inputNumber) {
            alert("올바른 3자리의 숫자를 입력해주세요!");
            userInput.value = '';
            return;
        }

        const result = this.model.play(inputNumber);
        this.view.createResultMessage(result);
    }

    start() {
        const { submitBt, restartBt } = this.view.elements;
        restartBt.style.display = 'none';
        
        submitBt.addEventListener("click", this.handleSubmit);

        this.restart();
    }

    restart() {
        const { restartBt, userInput, submitBt } = this.view.elements;

        restartBt.addEventListener("click", (e) => {
            e.preventDefault();
            submitBt.removeEventListener("click", this.handleSubmit);

            userInput.value = '';
            document.getElementById("result").innerText = '';
            restartBt.style.display = 'none';
            userInput.disabled = false;
            submitBt.disabled = false;
            this.model = new NumberBaseballGameModel();
            this.view = new NumberBaseballGameView();
            this.start();
        })
    }
}
