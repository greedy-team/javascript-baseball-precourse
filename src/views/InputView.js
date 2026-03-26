export default class InputView {
    constructor() {
        this.userInput = document.getElementById('user-input');
        this.submitBtn = document.getElementById('submit');
    }

    bindSubmitEvent(handler) {
        this.submitBtn.addEventListener('click', (event) => {
            event.preventDefault();
            const inputNumber = this.userInput.value.split("");
            handler(inputNumber);
        }
    );}

    clearInput() {
        this.userInput.value = "";
    }
}