import { toggleRestartButton } from "../views/ui.js";

export function play(stringRandomNumber, stringInputNumber) {
    const strike = countStrike(stringRandomNumber, stringInputNumber);
    const ball = countBall(stringRandomNumber, stringInputNumber);
    if (strike === 3) {
        toggleRestartButton();
        return `<span style="font-size: 18px; font-weight: bold;">🎉정답을 맞추셨습니다🎉</span><br><br><span style="font-size: 18px;">게임을 새로 시작하시겠습니까?<br></span>
        `;
    }
    if ((strike + ball) === 0) { return "낫싱"; }
    if (ball === 0) { return `${strike}스트라이크`; }
    if (strike === 0) { return `${ball}볼`; }
    return `${ball}볼 ${strike}스트라이크`;
}

function countStrike(stringRandomNumber, stringInputNumber) {
    return stringRandomNumber
        .split("")
        .filter((num, idx) => num === stringInputNumber[idx])
        .length;
}

function countBall(stringRandomNumber, stringInputNumber) {
    return stringRandomNumber
        .split("")
        .filter((num, idx) => num === stringInputNumber[(idx + 1) % 3] || num === stringInputNumber[(idx + 2) % 3])
        .length;
}
