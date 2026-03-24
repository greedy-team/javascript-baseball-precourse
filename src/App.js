import BaseballGameView from "./views/BaseballGameView.js";
import BaseballGameModel from "./models/BaseballGameModel.js";
import BaseballGameController from "./controllers/BaseballGameController.js";

// MVC 패턴을 적용하여 게임을 구성
const model = new BaseballGameModel();
const view = new BaseballGameView();

const controller = new BaseballGameController(model, view);
