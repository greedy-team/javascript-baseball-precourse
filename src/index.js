import {BaseballGameController} from "./controller.js";
import {submitBtn} from "./view.js";

const baseballGameController = new BaseballGameController();

submitBtn.addEventListener("click", (event) => baseballGameController.showGameResult(event));

