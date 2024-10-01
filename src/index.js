import BaseballGameController from './controller/BaseballGameController.js';
import BaseballGameView from './view/BaseballGameView.js';
import BaseBallGameModel from './model/BaseballGameModel.js';

new BaseballGameController(new BaseballGameView(), new BaseBallGameModel());
