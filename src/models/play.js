import { hideRestartButton } from "../views/ui.js";

export function play(stringRandomNumber, stringInputNumber) {
    const strike = countStrike(stringRandomNumber, stringInputNumber);
    const ball = countBall(stringRandomNumber, stringInputNumber);
    if (strike === 3) {
        hideRestartButton();
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
