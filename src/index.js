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
    if (!checkValidation(user)) {
        alert("잘못된 값을 입력했습니다! 다시 입력해주세요.");
        return;
    }

function checkValidation(value) {
    if(!checkIsNumber(value)) return false; 
    if(!checkDuplicate(value)) return false;
    if(!checkNumberLength(value)) return false;
    return true;
}

function checkIsNumber(value) {
    return /^[1-9]{3}$/.test(value);    
}

function checkDuplicate(value) {
    return new Set(value).size === 3;
}

function checkNumberLength(value) {
    return value.length === 3;
}
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