import BaseballGameModel from "../models/BaseballGameModel.js";
import BaseballGameView from "../view/BaseballGameView.js";
import { checkUsersValidation } from "../utils/validations.js";

export default class BaseballGameController {
    constructor() {
        this.model = new BaseballGameModel();
        this.view = new BaseballGameView();
        this.gameStart();
    }

    gameStart() {
        const input = document.querySelector("#user-input");
        const submitBtn = document.querySelector("#submit");

        submitBtn.addEventListener("click", (event) => {
            event.preventDefault();
            if (!checkUsersValidation(input.value)) {
                return alert("1~9사이의 서로 다른 세자리의 숫자를 입력해주세요!");
            }
            const result = this.model.play(input.value);
            this.view.paintResult(result);
            if (this.view.checkCorrectAnswer(result)) {
                this.giveFunctionToRestartBtn();
            }
        })
    }

    giveFunctionToRestartBtn() {
        const restartBtn = document.getElementById("game-restart-button");
        restartBtn.addEventListener("click", this.restart.bind(this));
    }

    restart() {
        const input = document.querySelector("#user-input");
        const submitBtn = document.querySelector("#submit");
        const result = document.querySelector("#result");

        input.value = null;
        submitBtn.disabled = false;
        result.innerHTML = "";

        this.model = new BaseballGameModel();
    }
}