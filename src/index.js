import BaseballController from "./controllers/BaseballController.js";

export default class BaseballGame {
    constructor() {
    this.controller = new BaseballController(this); 
    }

    play(computerInputNumbers, userInputNumbers) {
        return this.controller.play(computerInputNumbers, userInputNumbers);
    }
}

// 게임 실행
new BaseballGame();