import { checkUsersValidation } from "../utils/validations.js";

export default class BaseballGameModel {
    constructor() {
        this.computerNumber = this.makeRandomNumbers();
    }

    makeRandomNumbers() {
        let numbers = "";
        while (numbers.length < 3) {
            let num = MissionUtils.Random.pickNumberInRange(1, 9);
            if (this.makeRandomNumberIsDiff(numbers, String(num))) {
                numbers += String(num);
            }
        }
        return numbers;
    }

    makeRandomNumberIsDiff(numbers, num) {
        return !numbers.includes(num);
    }

    play(userNumber) {
        const score = this.checkingBallOrStrike(userNumber, this.computerNumber);
        if (score[0] === 0 && score[1] === 0) {
            return "낫싱";
        } else if (score[0] === 0 && score[1] > 0) {
            return `${score[1]}스트라이크`;
        } else if (score[0] > 1 && score[0] === 0) {
            return `${score[0]}볼`;
        } else {
            return `${score[0]}볼 ${score[1]}스트라이크`;
        }
    }

    checkingBallOrStrike(userNumber, computerNumber) {
        let ball = 0;
        let strike = 0;
        for (let i = 0; i < userNumber.length; i++) {
            if (userNumber[i] === computerNumber[i]) {
                strike++;
            } else if (computerNumber.includes(userNumber[i])) {
                ball++;
            }
        }
        return [ball, strike];
    }
}