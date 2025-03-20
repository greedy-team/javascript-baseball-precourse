import BaseballGameModel from "./model/BaseballGameModel.js";
import BaseballGameView from "./view/BaseballGameView.js";
import BaseballGameController from "./controller/BaseballGameController.js";

const controller = new BaseballGameController(new BaseballGameView(), new BaseballGameModel());
controller.gameStart();
