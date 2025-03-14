const userInput = document.querySelector("#user-input");
const submitButton = document.querySelector("#submit");
const resultMessage = document.querySelector("#result");
const restartButton = document.querySelector("#game-restart-button");

let answer = createRandomNumber();

submitButton.addEventListener('click', gameStart);
restartButton.addEventListener('click', restartGame);

function createRandomNumber() {
    const numbers = [];
    while (numbers.length < 3) {
        const num = MissionUtils.Random.pickNumberInRange(1, 9);
        if (!numbers.includes(num)) numbers.push(num);
    }
    return numbers.join("");
}

function gameStart(event) {
    event.preventDefault();

    const user = userInput.value.trim();
}

function showRestartButton() {
    submitButton.disabled = true;
    restartButton.disabled = false;
    restartButton.style.display = "block";
}

function showSubmitButton() {
    submitButton.disabled = false;
    restartButton.disabled = true;
    restartButton.style.display = "none";
}

function restartGame() {
    answer = createRandomNumber();
    resultMessage.innerHTML = "";
    userInput.value = "";
    showSubmitButton();
}