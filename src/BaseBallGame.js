/* global MissionUtils */
export default class BaseballGame {
  #answerNumbers = [];

  #userNumbers = [];

  #resultText = '';

  /** @type {(string) => bool} */
  play(userInput) {
    if (!this.#convertInput(userInput)) {
      return false;
    }

    const gameResult = this.#compareUserNumberWithAnswerNumbers();
    this.#makeResult(gameResult);
    return true;
  }

  /** @type {{() => void}} */
  setRandomAnswers() {
    const ANSWER_SIZE = 3;

    while (this.#answerNumbers.length < ANSWER_SIZE) {
      const randomNum = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!this.#answerNumbers.includes(randomNum)) {
        this.#answerNumbers.push(randomNum);
      }
    }
  }

  /** @type { () => string} */
  getResult() {
    return this.#resultText;
  }

  /** @type {() => {Number, Number }} */
  #compareUserNumberWithAnswerNumbers() {
    let ballCount = 0;
    let strikeCount = 0;

    this.#userNumbers.forEach((number, position) => {
      if (number === this.#answerNumbers[position]) {
        strikeCount += 1;
      } else if (this.#answerNumbers.includes(number)) {
        ballCount += 1;
      }
    });
    return { ballCount, strikeCount };
  }

  /** @type {({Number, Number }) => void} */
  #makeResult(gameResult) {
    this.#resultText = '';

    if (gameResult.ballCount !== 0) {
      this.#resultText += `${gameResult.ballCount}볼 `;
    }
    if (gameResult.strikeCount !== 0) {
      this.#resultText += `${gameResult.strikeCount}스트라이크`;
    }
    if (this.#resultText === '') {
      this.#resultText = '낫싱';
    }
  }

  /** @type {(string) => bool} */
  #convertInput(userInput) {
    const NUMBER_UPPER_BOUND = 999;
    const NUMBER_LOWER_BOUND = 111;

    let digitNumber = Number(userInput);

    if (!Number.isInteger(digitNumber)) {
      return false;
    }
    if (digitNumber < NUMBER_LOWER_BOUND || digitNumber > NUMBER_UPPER_BOUND) {
      return false;
    }

    this.#userNumbers = [];
    while (digitNumber !== 0) {
      const onePlace = digitNumber % 10;
      digitNumber = Math.floor(digitNumber / 10);
      if (this.#userNumbers.includes(onePlace)) {
        return false;
      }
      this.#userNumbers.unshift(onePlace);
    }

    return true;
  }
}
