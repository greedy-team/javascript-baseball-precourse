export default class BaseballGameModel {
  constructor() {
    this.computerInputNumbers = "";
    this.userInputNumbers = "";
    this.strike = 0;
    this.ball = 0;
  }

  play() {
    this.calculateStrikeBall(this.computerInputNumbers, this.userInputNumbers);
    return this.generateStrikeBallMessage();
  }

  calculateStrikeBall() {
    this.ball = 0;
    this.strike = 0;

    for (let index = 0; index < 3; index += 1) {
      if (this.computerInputNumbers[index] === this.userInputNumbers[index])
        this.strike += 1;
      else if (this.computerInputNumbers.includes(this.userInputNumbers[index]))
        this.ball += 1;
    }
  }

  generateStrikeBallMessage() {
    if (this.strike === 0 && this.ball === 0) return "낫싱";
    if (this.strike === 0) return `${this.ball}볼`;
    if (this.ball === 0) return `${this.strike}스트라이크`;
    return `${this.ball}볼 ${this.strike}스트라이크`;
  }

  generateRandomNumberString() {
    const numbers = new Set();
    while (numbers.size < 3) {
      const randomNumber = MissionUtils.Random.pickNumberInRange(1, 9);
      numbers.add(randomNumber);
    }
    this.computerInputNumbers = [...numbers].join("");
  }

  userInput(input) {
    this.userInputNumbers = input;
  }

  isValidInput() {
    return (
      this.isNumbersBetweenOneAndNine() && this.isDifferent() && this.isThree()
    );
  }

  isNumbersBetweenOneAndNine() {
    return [...this.userInputNumbers].every(
      (element) => element >= "1" && element <= "9"
    );
  }

  isDifferent() {
    const uniqueNumber = [...new Set(this.userInputNumbers)];
    return uniqueNumber.length === 3;
  }

  isThree() {
    return this.userInputNumbers.length === 3;
  }
}
