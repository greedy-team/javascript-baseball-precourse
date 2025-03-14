function randomString() {
    let validString = "";
    while (validString.length < 3) {
        const randomNumber = MissionUtils.Random.pickNumberInRange(1, 9);
        validString = findValidNumber(validString, randomNumber);
    }
    return validString;
}

function findValidNumber(validString, randomNumber) {
    if (validString.includes(randomNumber)) {
        return validString;
    }
    else {
        return validString + randomNumber;
    }
}

function play(pitcher, batter) {
    let strike = countStrike(pitcher, batter);
    let ball = countBall(pitcher, batter);
    if (strike == 3) {
        showRestartButton();
        return `<span style="font-size: 18px; font-weight: bold;">🎉정답을 맞추셨습니다🎉</span><br><br><span style="font-size: 18px;">게임을 새로 시작하시겠습니까?<br></span>`;
    }
    else if ((strike + ball) == 0) { return "낫싱"; }
    else if (ball == 0) { return `${strike}스트라이크`; }
    else if (strike == 0) { return `${ball}볼`; }
    else { return `${ball}볼 ${strike}스트라이크`; }
}

function countStrike(pitcher, batter) {
    let count = 0;
    for (let i = 0; i < 3; i++) {
        if (pitcher[i] === batter[i]) {
            count++;
        }
    }
    return count;
}

function countBall(pitcher, batter) {
    let count = 0;
    for (let i = 0; i < 3; i++) {
        if (batter.includes(pitcher[i]) && pitcher[i] !== batter[i]) {
            count++;
        }
    }
    return count;
}

function isValidInput(inputNumber) {
    if (!isNumeric(inputNumber) || !isDuplicate(inputNumber) || inputNumber.length !== 3) {
        alert("잘못된 형식으로 입력하셨습니다.");
        return false;
    }
    return true;
}

function isNumeric(inputNumber) {
    return /^[0-9]+$/.test(inputNumber);
}

function isDuplicate(inputNumber) {
    const uniqueChars = new Set(inputNumber);
    return uniqueChars.size == inputNumber.length;
}

function clickOkButton(randomNumber) {
    document.getElementById('submit').addEventListener('click', function (e) {
        e.preventDefault();
        let inputNumber = document.getElementById('user-input').value;
        if (!isValidInput(inputNumber)) {
            return;
        }
        let result = play(inputNumber, randomNumber);
        document.getElementById('result').innerHTML = result;
    });
}

function clickRestartButton(randomNumber) {
    document.getElementById('game-restart-button').addEventListener('click', function (e) {
        e.preventDefault();
        randomNumber = randomString();
        document.getElementById('user-input').value = '';
        document.getElementById('result').innerHTML = '';
        alert("게임이 재시작되었습니다!");
        showRestartButton();
    });
}

function showRestartButton() {
    const restartButton = document.getElementById('game-restart-button');
    if (restartButton.hidden) {
        restartButton.hidden = false;
    }
    else {
        restartButton.hidden = true;
    }
}

function baseballGame() {
    let randomNumber = randomString();
    clickOkButton(randomNumber);
    clickRestartButton(randomNumber);
}

baseballGame();
