export default class BaseballGameController {
    constructor(view, model) {
        this.view = view;
        this.model = model;
    }

    handleUserInput() {
        const userInput = this.view.userInputElement.value;
        const inputType = this.model.checkUserInputFormat(userInput);
        if (inputType !== "유효한 입력"){
            this.view.alertInvalidReason(inputType);
            return;
        }

        this.model.setUserNumbers(userInput);
        
        const result = this.model.play();

        this.view.updateGameResult(result);
    }

    setupGame(){
        this.view.clearGameUI();
        this.model.generateRandomNumbers();
    }

    restartGame() {
        this.setupGame();
    }

    initEventListeners() {
        this.view.submitButton.addEventListener("click", (event) => {
            event.preventDefault();
            this.handleUserInput();
        });

        this.view.restartButton.addEventListener("click", () => {
            this.restartGame();
        });
    }

    gameStart() {
        this.setupGame();
        this.initEventListeners();
    }
}