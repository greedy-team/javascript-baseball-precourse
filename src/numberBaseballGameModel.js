import { CORRECT, NOTHING, NUMBER_OF_MAXIMUM_LENGTH, STRIKE_COUNTS_FOR_ANSWER, STRING_LENGTH_ERROR_MESSAGE, DUPLICATE_ERROR_MESSAGE } from './constants.js';

export default class NumberBaseballGameModel {
    #answer;

    constructor() {
        this.setNewAnswerString();
    }

    #createRandomNumberToString() {
        const numbers = [];
        while (numbers.length < NUMBER_OF_MAXIMUM_LENGTH) {
            const num = MissionUtils.Random.pickNumberInRange(1, 9);
            if (!numbers.includes(num)) numbers.push(num);
        }
        return numbers.join('');
    }

    // 대체 네이밍으로 initializeAnswer 도 괜찮아 보인다
    setNewAnswerString() {
        this.#answer = this.#createRandomNumberToString();
    }

    getAnswer() {
        return this.#answer;
    }

    isValidUserInput(value, messageArray) {
        if (!this.#isThreeDigitStringWithoutZero(value) && !this.#containsDuplicateChars(value)) {
            this.#pushErrorMessageToArray(STRING_LENGTH_ERROR_MESSAGE, messageArray);
            this.#pushErrorMessageToArray(DUPLICATE_ERROR_MESSAGE, messageArray);
            return false;
        }
        if (!this.#isThreeDigitStringWithoutZero(value)) {
            this.#pushErrorMessageToArray(STRING_LENGTH_ERROR_MESSAGE, messageArray);
            return false;
        }
        if (!this.#containsDuplicateChars(value)) {
            this.#pushErrorMessageToArray(DUPLICATE_ERROR_MESSAGE, messageArray);
            return false;
        }
        return true;
    }

    #isThreeDigitStringWithoutZero(value) {
        return /^[1-9]{3}$/.test(value);
    }

    #containsDuplicateChars(value) {
        return new Set(value).size === value.length;
    }

    #pushErrorMessageToArray(message, messageArray) {
        if (!messageArray.includes(message)) messageArray.push(message);
    }

    play(user) {
        let strike = 0;
        let ball = 0;

        for (let i = 0; i < NUMBER_OF_MAXIMUM_LENGTH; i++) {
            if (this.#answer[i] === user[i]) strike++;
            else if (user.includes(this.#answer[i])) ball++;
        }
        return this.getGameResultMessage(strike, ball);
    }

    getGameResultMessage(strike, ball) {
        if (strike === STRIKE_COUNTS_FOR_ANSWER) return CORRECT;
        if (!strike && !ball) return NOTHING;
        if (!ball) return `${strike}스트라이크`;
        if (!strike) return `${ball}볼`;
        return `${ball}볼 ${strike}스트라이크`;
    }
}