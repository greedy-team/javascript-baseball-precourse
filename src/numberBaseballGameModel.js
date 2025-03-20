import { CORRECT, NOTHING, NUMBER_OF_MAXIMUM_LENGTH, STRIKE_COUNTS_FOR_ANSWER, STRING_LENGTH_ERROR_MESSAGE, DUPLICATE_ERROR_MESSAGE } from './constants.js';

export default class NumberBaseballGameModel {
    #answer;

    constructor() {
        this.setAnswer();
    }

    setAnswer() {
        this.#answer = this.#createRandomNumberToString();
    }

    getAnswer() {
        return this.#answer;
    }

    checkUserInputValidation(value, messages) {
        let isValid = true;
        if (!this.checkThreeDigitStringWithoutZero(value)) {
            if (!messages.includes(STRING_LENGTH_ERROR_MESSAGE)) messages.push(STRING_LENGTH_ERROR_MESSAGE);
            isValid = false;
        }
        if (!this.checkDuplicatesInString(value)) {
            if (!messages.includes(DUPLICATE_ERROR_MESSAGE)) messages.push(DUPLICATE_ERROR_MESSAGE);
            isValid = false;
        }
        return isValid;
    }

    checkThreeDigitStringWithoutZero(value) {
        return /^[1-9]{3}$/.test(value);
    }

    checkDuplicatesInString(value) {
        return new Set(value).size === value.length;
    }

    #createRandomNumberToString() {
        const numbers = [];
        while (numbers.length < NUMBER_OF_MAXIMUM_LENGTH) {
            const num = MissionUtils.Random.pickNumberInRange(1, 9);
            if (!numbers.includes(num)) numbers.push(num);
        }
        return numbers.join('');
    }

    play(user) {
        let strike = 0;
        let ball = 0;

        for (let i = 0; i < NUMBER_OF_MAXIMUM_LENGTH; i++) {
            if (this.#answer[i] === user[i]) strike++;
            else if (user.includes(this.#answer[i])) ball++;
        }
        return this.getBaseballGameResultMessage(strike, ball);
    }

    getBaseballGameResultMessage(strike, ball) {
        if (strike === STRIKE_COUNTS_FOR_ANSWER) return CORRECT;
        if (strike === 0 && ball === 0) return NOTHING;
        if (ball === 0) return `${strike}스트라이크`;
        if (strike === 0) return `${ball}볼`;
        return `${ball}볼 ${strike}스트라이크`;
    }
}