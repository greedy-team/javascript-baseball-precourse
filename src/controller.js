import BaseballGame from './model.js';
import InputView from './views/InputView.js'
import OutputView from './views/OutputView.js';

export default class BaseballController {
    constructor() {
        this.model = new BaseballGame();
        this.inputView = new InputView();
        this.outputView = new OutputView();

        this.init();
    }

    init() {
        this.inputView.bindSubmitEvent(this.onSubmit.bind(this));
        this.outputView.bindRestartEvent(this.onRestart.bind(this));
    }

    onSubmit(inputNumber) {
        try {
            this.model.checkValidity(inputNumber);
            
            const score = this.model.play(this.model.randomNumber, inputNumber);
            const result = this.createResultMessage(score);
            this.outputView.showResult(result.message, result.isAnswer);
            
        } catch (error) {
            this.outputView.showError(error.message);
            this.inputView.clearInput();
        }
    }

    createResultMessage(score) {
        if (score.ball == 3 && score.strike == 3) {
            return {
                message: "<h4>🎉정답을 맞추셨습니다🎉</h4><br><div>게임을 새로 하시겠습니까?</div><br>",
                isAnswer: true,
            };
        }

        if (score.ball == 0 && score.strike == 0) {
            return {message: "낫싱", isAnswer: false};
        }

        if (score.ball == 0 && score.strike != 0) {
            return {message: score.strike + "스트라이크", isAnswer: false};
        }

        if (score.ball != 0 && score.strike == 0) {
            return {message: score.ball + "볼", isAnswer: false};
        }

        return {
            message: score.ball + "볼 " + score.strike + "스트라이크",
            isAnswer: false,
        };
    }

    onRestart() {
        this.inputView.clearInput();
        this.outputView.clearResult();
    }
}