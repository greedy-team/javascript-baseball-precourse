import { CORRECT, NOTHING, NUMBER_OF_MAXIMUM_LENGTH, STRIKE_COUNTS_FOR_ANSWER } from './constants.js';

export default class BaseballGame {
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
        return this.getResultMessage(strike, ball);
    }

    getResultMessage(strike, ball) {
        if (strike === STRIKE_COUNTS_FOR_ANSWER) return CORRECT;
        if (strike === 0 && ball === 0) return NOTHING;
        if (ball === 0) return `${strike}스트라이크`;
        if (strike === 0) return `${ball}볼`;
        return `${ball}볼 ${strike}스트라이크`;
    }
}