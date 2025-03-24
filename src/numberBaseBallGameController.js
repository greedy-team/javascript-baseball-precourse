// Controller 파일
import NumberBaseballGameModel from "./numberBaseBallGameModel.js";
import NumberBaseballGameView from "./numberBaseBallGameView.js";

export default class NumberBaseballGameController {
    constructor() {
        this.model = new NumberBaseballGameModel();
        this.view = new NumberBaseballGameView();
        this.start();
    }


    start() {
        const { button, restartBt } = this.view.elements;
        restartBt.style.display = 'none';
        
        button.addEventListener("click", (e) => {
            e.preventDefault();

            const inputNumber = this.model.vaildTypedNumber();

            if (!inputNumber) {
                alert("올바른 3자리의 숫자를 입력해주세요!");
                document.getElementById("user-input").value = '';
                return ;
            }
            
            const result = this.model.play(inputNumber);
            this.view.createResultMessage(result);
        })

        this.restart();
    }

    restart() {
        const { restartBt, userInput, submitBt } = this.view.element;

        restartBt.addEventListener("click", (e) => {
            e.preventDefault();
            document.getElementById("user-input").value = '';
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
