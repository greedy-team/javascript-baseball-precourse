export function createUniqueNumberString() {
    let validString = "";
    while (validString.length < 3) {
        const randomNumber = MissionUtils.Random.pickNumberInRange(1, 9);
        validString = addUniqueNumberToString(validString, randomNumber);
    }
    return validString;
}

function addUniqueNumberToString(validString, randomNumber) {
    if (validString.includes(randomNumber)) {
        return validString;
    }
    return validString + randomNumber;
}

export function play(stringRandomNumber, stringInputNumber) {
    const strike = countStrike(stringRandomNumber, stringInputNumber);
    const ball = countBall(stringRandomNumber, stringInputNumber);
    if (strike === 3) {
        showRestartButton();
        return `<span style="font-size: 18px; font-weight: bold;">🎉정답을 맞추셨습니다🎉</span><br><br><span style="font-size: 18px;">게임을 새로 시작하시겠습니까?<br></span>
        `;
    }
    else if ((strike + ball) === 0) { return "낫싱"; }
    else if (ball === 0) { return `${strike}스트라이크`; }
    else if (strike === 0) { return `${ball}볼`; }
    return `${ball}볼 ${strike}스트라이크`;
}

function countStrike(stringRandomNumber, stringInputNumber) {
    let count = 0;
    for (let i = 0; i < 3; i++) {
        if (stringRandomNumber[i] === stringInputNumber[i]) {
            count++;
        }
    }
    return count;
}

function countBall(stringRandomNumber, stringInputNumber) {
    let count = 0;
    for (let i = 0; i < 3; i++) {
        if (stringInputNumber.includes(stringRandomNumber[i]) && stringRandomNumber[i] !== stringInputNumber[i]) {
            count++;
        }
    }
    return count;
}

export function isValidInput(inputNumber) {
    if (!isNumeric(inputNumber) || !isDuplicate(inputNumber) || inputNumber.length !== 3) {
        alert("잘못된 형식으로 입력하셨습니다.");
        return false;
    }
    return true;
}

function isNumeric(inputNumber) {
    return /^[1-9]+$/.test(inputNumber);
}

function isDuplicate(inputNumber) {
    const uniqueChars = new Set(inputNumber);
    return uniqueChars.size === inputNumber.length;
}

export function showRestartButton() {
    const $restartButton = document.getElementById('game-restart-button');
    if (!$restartButton.hidden) {
        $restartButton.hidden = true;
    }
    $restartButton.hidden = false;
}

export function baseballGame() {
    const randomNumber = createUniqueNumberString();
    setOkButtonClickEvent(randomNumber);
    clickRestartButton(randomNumber);
}

function setOkButtonClickEvent(randomNumber) {
    const $submitButton = document.getElementById('submit');
    const $userInput = document.getElementById('user-input');
    const $result = document.getElementById('result');
    $submitButton.addEventListener('click', function (e) {
        e.preventDefault();
        const inputNumber = $userInput.value;
        if (!isValidInput(inputNumber)) {
            return;
        }
        const result = play(inputNumber, randomNumber);
        $result.innerHTML = result;
    });
}

function clickRestartButton(randomNumber) {
    const $restartButton = document.getElementById('game-restart-button');
    const $userInput = document.getElementById('user-input');
    const $result = document.getElementById('result');
    $restartButton.addEventListener('click', function (e) {
        e.preventDefault();
        randomNumber = createUniqueNumberString();
        $userInput.value = '';
        $result.innerHTML = '';
        alert("게임이 재시작되었습니다!");
        $restartButton.hidden = true;
    });
}
