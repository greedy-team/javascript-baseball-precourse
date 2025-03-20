import numberBaseballGameView from './numberBaseballGameView.js';
import numberBaseballGameModel from './numberBaseballGameModel.js';
export default class numberBaseballGameController {
    #numberBaseballGameView;
    #numberBaseballGamemModel;
    constructor() {
        this.#numberBaseballGamemModel = new numberBaseballGameModel();
        this.#numberBaseballGameView = new numberBaseballGameView();
    }
}